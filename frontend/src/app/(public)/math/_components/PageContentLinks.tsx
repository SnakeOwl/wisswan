"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

// Описываем структуру заголовка для хранения в состоянии
interface HeaderLink {
    id: string
    text: string
    level: number // Сохраняем тег (h1, h2 и т.д.) для возможной стилизации отступов
}


export default function PageContentLinks() {
    const [links, setLinks] = useState<HeaderLink[]>([])
    const pathname = usePathname();

    useEffect(() => {
        const mainElement = document.querySelector("main")
        if (!mainElement)
            return;

        // заголовки
        const headerElements = mainElement.querySelectorAll<HTMLHeadingElement>(
            "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"
        )

        // создание ссылок из заголовков
        const parsedLinks = Array.from(headerElements).map((header) => {
            let hLevel = 1;
            switch (header.tagName.toLowerCase()) {
                case "h1":
                    hLevel = 1;
                    break;

                case "h2":
                    hLevel = 2;
                    break;

                case "h3":
                    hLevel = 3;
                    break;

                case "h4":
                    hLevel = 4;
                    break;

                case "h5":
                    hLevel = 5;
                    break;

                case "h6":
                    hLevel = 6;
                    break;
            }

            return {
                id: header.id,
                // Берём текстовое содержимое заголовка (без HTML-тегов, если они внутри)
                text: header.textContent || "",
                level: hLevel,
            }
        })

        setLinks(parsedLinks)
    }, [pathname]);

    if (links.length === 0)
        return null; // нечего рендерить


    return (
        <nav className="sticky top-0" aria-label="Содержание страницы">
            <div className="overflow-y-auto scrollbar-none hover:scrollbar-thin max-h-screen px-2 pb-4">
                <p className="font-heading top-0 pt-12 font-bold mb-2">Содержание:</p>

                <ul className="space-y-1 text-sm">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            // Пример динамического отступа: для h3 отступ больше, чем для h2
                            style={{ paddingLeft: (12 * (link.level - 2)) + "px" }}
                        >
                            <Link
                                href={`#${link.id}`}
                                className="hover-link"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
