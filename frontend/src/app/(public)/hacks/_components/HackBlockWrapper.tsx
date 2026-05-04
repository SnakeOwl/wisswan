import HacksBlock from "./HacksBlock";

export default async function HackBlockWrapper(props: PageProps<"/hacks">) {

    const sparams = await props.searchParams;
    const soptions = new URLSearchParams(sparams as { [key: string]: string });

    return <HacksBlock filters={soptions} />
}