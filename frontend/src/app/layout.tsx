import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header/Header";
import { PT_Sans, Geist } from "next/font/google";
import UserProvider from "../context/UserProvider";
import ToastProvider from "./_components/contexts/ToastProvider";
import { Suspense } from "react";
import { SkeletonTable } from "./_components/Skeletons/SkeletonTable";
import { cn } from "@/lib/utils";
import CookiesAgreement from "./_components/CookiesAgreement";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const pt_sans = PT_Sans({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "700"]
});



export default async function RootLayout({
    children,
    modal
}: {
    children: React.ReactNode
    modal: React.ReactNode;
}) {
    return (
        <html lang="ru" className={cn("bg-white dark:bg-black text-black dark:text-stone-100 ", "font-sans", geist.variable)}>
            <UserProvider>
                <body className={/*`${pt_sans.className } ` + */ 'antialiased'}>
                    <ToastProvider>
                        
                        <div className="relative w-full min-h-screen flex flex-col">
                            <Suspense fallback={<SkeletonTable cols={3} rows={1} />}>
                                <Header />
                            </Suspense>

                            {children}
                        </div>

                        {modal}
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

    title: {
        template: `%s / ${process.env.NEXT_PUBLIC_APP_NAME}`,
        default: `${process.env.NEXT_PUBLIC_APP_NAME}`
    },
    description: "",


    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};