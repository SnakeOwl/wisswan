import PageContentLinks from "./_components/PageContentLinks";

export default async function Layout(props: LayoutProps<"/math">) {

    return (
        <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="hidden xl:block col-span-1"></div>
            <div className="xl:col-span-3 container-v1">
                {props.children}
            </div>

            <div className="hidden xl:block col-span-1">
                <PageContentLinks />
            </div>
        </div>
    )
}