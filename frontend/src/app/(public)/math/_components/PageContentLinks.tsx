"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

// Описываем структуру заголовка для хранения в состоянии
interface HeaderLink {
    id: string
    text: string
    level: number // Сохраняем тег (h1, h2 и т.д.) для возможной стилизации отступов
}


export default function PageContentLinks() {
    const [links, setLinks] = useState<HeaderLink[]>([]);
    const [activeHeaderId, setActiveHeaderId] = useState<string | null>(null);
    const pathname = usePathname();
    const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());


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
            const tag = header.tagName.toLowerCase();
            const hLevel = parseInt(tag[1], 10);

            return {
                id: header.id,
                // Берём текстовое содержимое заголовка (без HTML-тегов, если они внутри)
                text: header.textContent || "",
                level: hLevel,
            }
        })

        // Иначе гидрация ругается
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLinks(parsedLinks)
        setActiveHeaderId(null)
    }, [pathname]);



    // Отслеживаем прокрутку – определяем заголовок ближе всего к вверху
    useEffect(() => {
        if (links.length === 0) return

        let ticking = false

        const updateActive = () => {
            const viewportCenter = window.innerHeight >> 3
            let closestId: string | null = null
            let closestDist = Infinity

            for (const link of links) {
                const element = document.getElementById(link.id)
                if (!element) continue
                const rect = element.getBoundingClientRect()
                const elementCenter = rect.top + rect.height >> 1
                const dist = Math.abs(elementCenter - viewportCenter)
                if (dist < closestDist) {
                    closestDist = dist
                    closestId = link.id
                }
            }

            if (closestId && closestId !== activeHeaderId) {
                setActiveHeaderId(closestId)
            }
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateActive()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        // Первый расчёт сразу после монтирования
        updateActive()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [links, activeHeaderId]) // Зависит от links и activeHeaderId



    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // стандартное поведение не переносит к разделу, если он до этого уже был выбран. (условно: кликнули по ссылке, проскролили вниз, ещё раз кликнули и не перешли на него)
        setActiveHeaderId(id);

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }


    if (
        pathname.includes("calculators") || // рендерить не на всех страницах
        links.length === 0 // нечего рендерить
    )
        return null;


    return (
        <nav className="sticky top-0" aria-label="Содержание страницы">
            <div className="overflow-y-auto scrollbar-none hover:scrollbar-thin max-h-screen px-2 pb-4">
                <p className="font-heading top-0 pt-12 font-bold mb-2">Содержание:</p>

                <ul className="space-y-1 text-sm">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            style={{ paddingLeft: (12 * (link.level - 2)) + "px" }}
                        >
                            <Link
                                href={`#${link.id}`}
                                className={clsx("hover-link", {
                                    "text-blue-500": activeHeaderId === link.id
                                })}
                                scroll={false}

                                onClick={(e) => handleLinkClick(e, link.id)}
                                ref={(el) => {
                                    if (el) linkRefs.current.set(link.id, el)
                                }}
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
