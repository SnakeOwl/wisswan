import LayoutBreadcrumbs from "../_components/LayoutBreadcrumbs"

export default async function Layout(props: LayoutProps<"/">) {
    return (
        <>
            <LayoutBreadcrumbs />
            <div className="pb-4 container-v1">
                {props.children}
            </div>
        </>
    )
}