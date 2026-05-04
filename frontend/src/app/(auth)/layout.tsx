import { ReactNode, Suspense } from "react"
import MainMenu from "./_components/MainMenu";
import LayoutAsyncProcessor from "./_components/LayoutAsyncProcessor";



export default async function Layout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-1">
            <Suspense>
                <LayoutAsyncProcessor>
                    <div className="min-h-full min-w-[200px] border-r dark:border-neutral-800 border-neutral-300 py-4">
                        <MainMenu />
                    </div>

                    <div className="pl-4 pt-2 flex-1">
                        {children}
                    </div>
                </LayoutAsyncProcessor>
            </Suspense>
        </div>
    )
}