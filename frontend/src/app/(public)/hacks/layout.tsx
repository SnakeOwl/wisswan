import NewAnonymHackBlock from "./_components/NewAnonymHackBlock";
import { Suspense } from "react";
import DomainsFilterWrapper from "./_components/DomainsFilterWrapper";
import { SkeletonTable } from "@/app/_components/Skeletons/SkeletonTable";


const LayoutHeader = () => (
    <div className='flex flex-row gap-4 w-full items-center my-4'>
        <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
        <h1 className='text-4xl font-bold min-w-fit mx-auto'>Хаки по областям</h1>
        <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
    </div>
)

export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <LayoutHeader />

            <Suspense fallback={<SkeletonTable cols={4} rows={1} />}>
                <DomainsFilterWrapper />
            </Suspense>

            {children}

            <section className="mt-8 border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 p-2 ">
                <NewAnonymHackBlock />
            </section>
        </div>
    )
}