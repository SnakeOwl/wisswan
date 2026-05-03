import NewAnonymHackBlock from "./_components/NewAnonymHackBlock";
import { Suspense } from "react";
import DomainsFilterWrapper from "./_components/DomainsFilterWrapper";


export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>Хаки по областям</h1>
            <Suspense>
                <DomainsFilterWrapper />
            </Suspense>
            
            <Suspense>
                {children}
            </Suspense>

            <section className="mt-4 border border-neutral-200 dark:border-neutral-800 p-2 rounded-xl">
                <Suspense>
                    <NewAnonymHackBlock />
                </Suspense>
            </section>
        </div>
    )
}