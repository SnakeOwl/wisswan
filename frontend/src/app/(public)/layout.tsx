import { Suspense } from "react"
import LayoutBreadcrumbs from "../_components/LayoutBreadcrumbs"

export default async function Layout(props: LayoutProps<"/">) {
    return (
        <>
            <Suspense>
                <LayoutBreadcrumbs />
            </Suspense>
            
            <div className="pb-4 flex-1 flex flex-col">
                {props.children}
            </div>
        </>
    )
}