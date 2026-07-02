import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header/Header";
import { PT_Sans, Unbounded } from "next/font/google";
import UserProvider from "../context/UserProvider";
import ToastProvider from "./_components/contexts/ToastProvider";
import { Suspense } from "react";
import { SkeletonTable } from "./_components/Skeletons/SkeletonTable";
import { cn } from "@/lib/utils";
import CookiesAgreement from "./_components/CookiesAgreement";
import { getDefaultOpenGraph } from "@/utils/SEO/getDefaultOpenGraph";
import { TooltipProvider } from "@/components/ui/tooltip";

// дефолтные шрифты
const pt_sans = PT_Sans({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "700"]
});


// шрифт для заголовков (подключаем как CSS-переменную)
const unbounded = Unbounded({
    subsets: ["cyrillic", "latin"],
    variable: "--font-unbounded", // Имя переменной для Tailwind или CSS
});


export default async function RootLayout({
    children,
    modal
}: {
    children: React.ReactNode
    modal: React.ReactNode;
}) {
    return (
        <html lang="ru" className={cn("bg-white text-black", "font-sans", unbounded.variable)}>
            <UserProvider>
                <body className={`${pt_sans.className}  antialiased`}>
                    <ToastProvider>
                        <TooltipProvider>
                            <div className="relative w-full min-h-screen flex flex-col">
                                <Suspense fallback={<SkeletonTable cols={3} rows={1} />}>
                                    <Header />
                                </Suspense>

                                {children}
                            </div>

                            {modal}
                        </TooltipProvider>
                    </ToastProvider>

                    <Suspense>
                        <CookiesAgreement />
                    </Suspense>

                </body>
            </UserProvider>
        </html>
    )
}



export const metadata: Metadata = {
    // for images and icons
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "/"),
    applicationName: process.env.NEXT_PUBLIC_APP_NAME,
    manifest: process.env.NEXT_PUBLIC_SITE_URL + "manifest.json",

    title: {
        template: `%s / ${process.env.NEXT_PUBLIC_APP_NAME}`,
        default: `${process.env.NEXT_PUBLIC_APP_NAME}`
    },
    openGraph: getDefaultOpenGraph(),
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};
