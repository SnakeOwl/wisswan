"use client"

import LoginFormWrapper from "@/app/(guest)/login/_components/LoginFormWrapper";
import Link from "next/link";

export default function Page() {


    return (
        <main className="p-4 border border-neutral-300 bg-white rounded-xl relative h-full flex flex-col items-center justify-around"
            onClick={e => e.stopPropagation()}
        >
            <div className="w-full lg:w-[400px] flex flex-col gap-4">
                <h1 className="font-bold text-2xl">Вход</h1>

                <LoginFormWrapper useRedirectAfterSuccess={false} />

                <p className="text-sm">
                    Отправляя форму, вы&nbsp;даёте своё согласие на&nbsp;<Link className="text-sky-500" href="/privacy">обработку ваших персональных данных</Link>.
                </p>
            </div>
        </main>
    )
}
