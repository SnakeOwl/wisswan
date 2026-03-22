import OrderByPopularOrNew from "../../_components/filters/OrderByPopularOrNew";

export default async function Layout({
    children
}: LayoutProps<'/dashboard/hacks'>) {
    return (
        <div>

        <section className="mb-4">
            <OrderByPopularOrNew 
                className="w-[250px]"
            />
        </section>
            {children}
        </div>
    )
}