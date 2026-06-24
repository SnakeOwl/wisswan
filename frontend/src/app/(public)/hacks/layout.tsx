import NewAnonymHackBlock from "./_components/NewAnonymHackBlock";
import { Suspense } from "react";
import DomainsFilterWrapper from "./_components/DomainsFilterWrapper";
import { SkeletonTable } from "@/app/_components/Skeletons/SkeletonTable";



export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Suspense fallback={<SkeletonTable cols={4} rows={1} />}>
                <DomainsFilterWrapper />
            </Suspense>

            {children}

            <section className="mt-8 border border-neutral-200 p-2 ">
                <NewAnonymHackBlock />
            </section>
        </div>
    )
}