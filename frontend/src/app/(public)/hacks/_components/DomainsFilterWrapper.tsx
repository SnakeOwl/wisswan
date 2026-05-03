import DomainsFilter from "./DomainsFilter";
import { Fetch } from "@/libs";

export default async function DomainsFilterWrapper() {
    const filterDomainsResponse = await Fetch('feed/hacks-domains', Number(process.env.NEXT_PUBLIC_FETCH_CACHE_LONG));


    return (
        <section className="my-6 border dark:border-neutral-800 border-neutral-200 p-2 rounded-lg">
            <h4 className="mb-2">Области применения</h4>

            <DomainsFilter domains={filterDomainsResponse} />
        </section>
    )
}