"use client"

import Script from "next/script"


export default function YandexMetrica() {
    return (
        <Script
            src="/js/yandex_metrika.js"
            strategy="lazyOnload"
        />
    )
}










