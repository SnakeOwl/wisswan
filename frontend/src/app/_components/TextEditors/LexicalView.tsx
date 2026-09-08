import { makeAlias } from '@/utils/makeSlug';
import React, { ElementType } from 'react';

// Хелпер для разбора стилей текста (format: 1 = bold, 2 = italic и т.д.)
function renderTextNode(child: any, index: number) {
    if (child.type !== 'text') return null;

    let textElement = <React.Fragment key={index}>{child.text}</React.Fragment>;

    // Битовые маски для форматирования в Lexical
    const isBold = child.format & 1;
    const isItalic = child.format & 2;

    if (isBold) textElement = <b key={index}>{textElement}</b>;
    if (isItalic) textElement = <i key={index}>{textElement}</i>;

    return textElement;
}

export default function LexicalView({ content }: { content: string }) {
    // Безопасный парсинг JSON строки
    let nodes = [];
    try {
        const rawContent = content ? JSON.parse(content) : null;
        nodes = rawContent?.root?.children || [];
    } catch (error) {
        console.error("LexicalView: Ошибка парсинга JSON строки контента", error);
        return <div className="text-red-500 text-sm">Ошибка отображения контента</div>;
    }

    return (
        <div className="space-y-4">
            {nodes.map((node: any, idx: number) => {
                const childrenHTML = node.children?.map((child: any, cIdx: number) =>
                    renderTextNode(child, cIdx)
                );

                // Определяем выравнивание текста (format/align)
                const alignmentClass =
                    node.format === 'center' ? 'text-center' :
                        node.format === 'right' ? 'text-right' :
                            node.format === 'justify' ? 'text-justify' : 'text-left';

                switch (node.type) {
                    case 'heading':
                        // 1. Собираем чистый текст заголовка из всех его дочерних text-нод
                        const headingText = node.children
                            ?.filter((child: any) => child.type === 'text')
                            ?.map((child: any) => child.text)
                            ?.join('') || '';

                        // 2. Генерируем alias из полученной строки
                        const headerId = makeAlias(headingText);

                        // Решение ошибки 'Tag': приводим к ElementType и даем дефолтный тег 'h2'
                        const Tag = (node.tag || 'h2') as ElementType;

                        // Расширил маппинг размеров под все заголовки h2-h6 из вашего JSON
                        const headingSizes: Record<string, string> = {
                            h2: 'font-bold mt-4 mb-2', // вернул базовые размеры для h-тегов
                            h3: 'font-semibold mt-4 mb-2',
                            h4: 'font-medium mt-4 mb-2',
                            h5: 'font-medium mt-4 mb-2',
                            h6: 'font-medium mt-4 mb-2',
                        };

                        const currentTagStr = String(node.tag);

                        return (
                            // 3. Передаем сгенерированный headerId в атрибут id
                            <Tag key={idx} id={headerId} className={`${headingSizes[currentTagStr] || 'text-xl'} ${alignmentClass}`}>
                                {childrenHTML}
                            </Tag>
                        );

                    case 'paragraph':
                    default:
                        return (
                            <p key={idx} className={`leading-relaxed ${alignmentClass}`}>
                                {childrenHTML}
                            </p>
                        );
                }
            })}
        </div>
    );
}
