"use client"
// Функция для парсинга User-Agent (базовый вариант без тяжелых библиотек)
export function getClientMeta() {
    if (typeof window === "undefined") return null;

    const ua = navigator.userAgent;
    const screen = `${window.screen.width}x${window.screen.height}`;
    
    // Определение типа устройства
    let deviceType = "desktop";
    if (/Mobi|Android|iPhone|iPad/i.test(ua)) {
        deviceType = /iPad|Tablet/i.test(ua) ? "tablet" : "mobile";
    } else if (/bot|googlebot|crawler|spider|robot|crawling/i.test(ua)) {
        deviceType = "bot";
    }

    // Определение ОС
    let osName = "Unknown OS";
    if (ua.indexOf("Win") !== -1) osName = "Windows";
    if (ua.indexOf("Mac") !== -1) osName = "macOS";
    if (ua.indexOf("X11") !== -1) osName = "Linux";
    if (ua.indexOf("Linux") !== -1) osName = "Linux";
    if (/iPhone|iPad|iPod/.test(ua)) osName = "iOS";
    if (/Android/.test(ua)) osName = "Android";

    // Определение Браузера
    let browserName = "Unknown Browser";
    if (ua.indexOf("Chrome") !== -1 && ua.indexOf("Safari") !== -1) browserName = "Chrome";
    else if (ua.indexOf("Safari") !== -1 && ua.indexOf("Chrome") === -1) browserName = "Safari";
    else if (ua.indexOf("Firefox") !== -1) browserName = "Firefox";
    else if (ua.indexOf("MSIE") !== -1 || !!(document as any).documentMode === true) browserName = "IE"; 
    else if (ua.indexOf("Edge") !== -1) browserName = "Edge";

    return {
        device_type: deviceType,
        browser_name: browserName,
        os_name: osName,
        screen_resolution: screen
    };
}
