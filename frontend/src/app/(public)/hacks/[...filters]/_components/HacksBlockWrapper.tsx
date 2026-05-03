import HacksBlock from "../../_components/HacksBlock";

export default async function HacksBlockWrapper(props: PageProps<"/hacks/[...filters]">) {
    const filters = (await props.params).filters;

    const sparams = new URLSearchParams();

    filters.forEach(filter => {
        sparams.append('domains[]', filter);
    });


    return <HacksBlock filters={sparams} />
}