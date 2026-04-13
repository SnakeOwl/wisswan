import OnlyPublished from "../../_components/filters/OnlyPublished";
import OrderByPopularOrNew from "../../_components/filters/OrderByPopularOrNew";
import DomainsList from "./_components/DomainsList";

export default function Page(params: PageProps<'/admin/domains'>) {
    return (
        <main>
            <section className="flex flex-row gap-4 mb-4">
                <OrderByPopularOrNew
                    className="w-[220px]"
                />

                <OnlyPublished 
                    className="w-[260px]"
                />
            </section>

            <DomainsList />
        </main>
    )
}