import { Skeleton } from "@/app/_components/Skeletons/Skeleton";
import { Suspense } from "react";
import PageContentLinks from "../../math/_components/PageContentLinks";

export default async function Layout(props: LayoutProps<"/blog/[id]">) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-5" >
            <div className="hidden xl:block col-span-1"></div>

            <article className="col-span-4 grid grid-cols-1 xl:grid-cols-4">
                <div className="col-span-3 container-v1">
                    {props.children}
                </div>

                <aside className="hidden xl:block col-span-1">
                    <Suspense fallback={<Skeleton />}>
                        <PageContentLinks />
                    </Suspense>
                </aside>
            </article>
        </div>
    )
}