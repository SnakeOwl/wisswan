'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from './ToolbarPlugin';
import "./Lexical.css"
import { HeadingNode } from '@lexical/rich-text';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

export default function Lexical({
    initialEditorState = null,
    onBlur
}: {
    initialEditorState?: string | null
    onBlur?: (content: string) => void;
}) {
    const initialConfig = {
        namespace: 'MyEditor',
        onError: (error: Error) => console.error(error),
        nodes: [
            HeadingNode
        ],
        // Если передан initialEditorState, используем его как начальное состояние
        ...(initialEditorState && { editorState: initialEditorState }),
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="editor-container border p-4 rounded">
                <ToolbarPlugin />

                <RichTextPlugin
                    contentEditable={<ContentEditable className="min-h-[150px] outline-none" />}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                
                <HistoryPlugin />

                <BlurPlugin onBlur={onBlur} />
            </div>
        </LexicalComposer>
    );
}


// Плагин для отслеживания потери фокуса
function BlurPlugin({ onBlur }: { onBlur?: (content: string) => void }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (!onBlur) return;

        const rootElement = editor.getRootElement();
        if (!rootElement) return;

        const handleBlur = (event: FocusEvent) => {
            const relatedTarget = event.relatedTarget as Node | null;
            if (relatedTarget && rootElement.contains(relatedTarget)) {
                return; // фокус внутри редактора
            }
            const content = JSON.stringify(editor.getEditorState().toJSON());
            onBlur(content);
        };

        rootElement.addEventListener('blur', handleBlur, true);

        return () => {
            rootElement.removeEventListener('blur', handleBlur, true);
        };
    }, [editor, onBlur]);

    return null;
}
