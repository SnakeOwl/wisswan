import FilterByStatus from "../../_components/filters/FilterByStatus";
import OrderByPopularOrNew from "../../_components/filters/OrderByPopularOrNew";

export default async function Layout({
    children
}: LayoutProps<'/dashboard/hacks'>) {
    return (
        <div>
            <section className="mb-4 flex flex-wrap gap-2">
                <OrderByPopularOrNew
                    className="w-[220px]"
                />

                <FilterByStatus 
                    className="w-[240px]"
                />
            </section>
            
            {children}
        </div>
    )
}