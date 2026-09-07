import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
	$getSelection,
	$isRangeSelection,
	CAN_REDO_COMMAND,
	CAN_UNDO_COMMAND,
	COMMAND_PRIORITY_LOW,
	FORMAT_ELEMENT_COMMAND,
	FORMAT_TEXT_COMMAND,
	REDO_COMMAND,
	SELECTION_CHANGE_COMMAND,
	UNDO_COMMAND,
	$createParagraphNode,
} from "lexical";
import {
	Bold,
	Italic,
	Redo2,
	Strikethrough,
	TextAlignCenter,
	TextAlignEnd,
	TextAlignJustify,
	TextAlignStart,
	Underline,
	Undo2,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { $createHeadingNode, $isHeadingNode, HeadingTagType } from "@lexical/rich-text";

function Divider() {
	return <div className="divider" />;
}

export default function ToolbarPlugin() {
	const [editor] = useLexicalComposerContext();
	const toolbarRef = useRef(null);
	const [canUndo, setCanUndo] = useState(false);
	const [canRedo, setCanRedo] = useState(false);
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [isUnderline, setIsUnderline] = useState(false);
	const [isStrikethrough, setIsStrikethrough] = useState(false);

	// 🆕 Состояние для типа блока (paragraph, h1, h2, h3)
	const [blockType, setBlockType] = useState("paragraph");

	const $updateToolbar = useCallback(() => {
		const selection = $getSelection();
		if ($isRangeSelection(selection)) {
			// Update text format
			setIsBold(selection.hasFormat("bold"));
			setIsItalic(selection.hasFormat("italic"));
			setIsUnderline(selection.hasFormat("underline"));
			setIsStrikethrough(selection.hasFormat("strikethrough"));

			// 🆕 Определяем тип текущего блока
			const anchorNode = selection.anchor.getNode();
			const element = anchorNode.getTopLevelElementOrThrow();
			if ($isHeadingNode(element)) {
				setBlockType(element.getTag());
			} else {
				setBlockType("paragraph");
			}
		}
	}, []);

	useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					$updateToolbar();
				});
			}),
			editor.registerCommand(
				SELECTION_CHANGE_COMMAND,
				(_payload, _newEditor) => {
					$updateToolbar();
					return false;
				},
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(
				CAN_UNDO_COMMAND,
				(payload) => {
					setCanUndo(payload);
					return false;
				},
				COMMAND_PRIORITY_LOW,
			),
			editor.registerCommand(
				CAN_REDO_COMMAND,
				(payload) => {
					setCanRedo(payload);
					return false;
				},
				COMMAND_PRIORITY_LOW,
			),
		);
	}, [editor, $updateToolbar]);


	const handleBlockTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		editor.update(() => {
			const selection = $getSelection();
			if ($isRangeSelection(selection)) {
				const anchorNode = selection.anchor.getNode();
				const element = anchorNode.getTopLevelElementOrThrow();

				if (value === "paragraph") {
					const paragraph = $createParagraphNode();
					element.replace(paragraph, true);
					paragraph.selectEnd();
				} else {
					const heading = $createHeadingNode(value as HeadingTagType | undefined);
					element.replace(heading, true);
					heading.selectEnd();
				}
			}
		});
	};

	const pharagraps = [
		{ label: "Заголовок", value: "paragraph" },
		{ label: "Заголовок 2", value: "h2" },
		{ label: "Заголовок 3", value: "h3" },
		{ label: "Заголовок 4", value: "h4" },
		{ label: "Заголовок 5", value: "h5" },
		{ label: "Заголовок 6", value: "h6" },
	];



	return (
		<div className="toolbar" ref={toolbarRef}>
			<button
				disabled={!canUndo}
				onClick={() => {
					editor.dispatchCommand(UNDO_COMMAND, undefined);
				}}
				className="toolbar-item spaced"
				aria-label="Undo"
			>
				<Undo2 />
			</button>
			<button
				disabled={!canRedo}
				onClick={() => {
					editor.dispatchCommand(REDO_COMMAND, undefined);
				}}
				className="toolbar-item"
				aria-label="Redo"
			>
				<Redo2 />
			</button>
			<Divider />



			<select
				className="toolbar-item spaced "
				value={blockType}
				onChange={handleBlockTypeChange}
				aria-label="Format heading"
			>
				{pharagraps.map((el, index) => (
					<option key={index} value={el.value}>{el.label}</option>
				))
				}
			</select>

			<Divider />
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
				}}
				className={"toolbar-item spaced " + (isBold ? "active" : "")}
				aria-label="Format Bold"
			>
				<Bold />
			</button>
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
				}}
				className={"toolbar-item spaced " + (isItalic ? "active" : "")}
				aria-label="Format Italics"
			>
				<Italic />
			</button>
			
			<Divider />
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
				}}
				className="toolbar-item spaced"
				aria-label="Left Align"
			>
				<TextAlignStart />
			</button>
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
				}}
				className="toolbar-item spaced"
				aria-label="Center Align"
			>
				<TextAlignCenter />
			</button>
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
				}}
				className="toolbar-item spaced"
				aria-label="Right Align"
			>
				<TextAlignEnd />
			</button>
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
				}}
				className="toolbar-item"
				aria-label="Justify Align"
			>
				<TextAlignJustify />
			</button>
		</div>
	);
}