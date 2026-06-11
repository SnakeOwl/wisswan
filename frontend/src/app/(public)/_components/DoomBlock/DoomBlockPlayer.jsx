"use client"

import { useEffect, useRef } from "react"

export default function DoomBlockPlayer() {
    const gameContainerRef = useRef(null);


    useEffect(() => {
        if (!gameContainerRef.current) return;

        // FIX: двойной ререндер react на деве ругается.
        if (gameContainerRef.current.shadowRoot) return;


        // Контейнер в shadow DOM, потому что css стили херят мои нужные cssки глобально.
        const shadowRoot = gameContainerRef.current.attachShadow({ mode: "open" });

        const gameContainer = document.createElement("div");
        gameContainer.id = "game_container";
        gameContainer.style.width = "1200px";
        gameContainer.style.height = "900px";

        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "/js-dos.css"; // Путь к стилям в папке /public

        shadowRoot.appendChild(styleLink);
        shadowRoot.appendChild(gameContainer);

        import("./js-dos").then(() => {
            if (typeof window !== "undefined" && window.Dos) {
                Dos(gameContainer, {
                    url: "https://v8.js-dos.com/bundles/doom.jsdos",
                });
            }
        });
    }, []);


    return (
        <div className="flex">
            <div ref={gameContainerRef}
                id="game_container"
                className="mx-auto"
            >
            </div>
        </div>
    )
}