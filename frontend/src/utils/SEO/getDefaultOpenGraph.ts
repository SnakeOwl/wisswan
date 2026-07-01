import { Metadata } from "next";

export function getDefaultOpenGraph(overrides: Partial<Metadata["openGraph"]> = {}): Metadata["openGraph"] {
    return {
        type: "website",
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: process.env.NEXT_PUBLIC_APP_NAME,
        locale: "ru_RU",
        images: [(process.env.NEXT_PUBLIC_SITE_URL +  'images/logo_dark.svg')],
        
        ...overrides,
    };
}
