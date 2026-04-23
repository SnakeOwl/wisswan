import { Metadata } from "next";
import CacheClearButton from "./_components/CacheClearButton";

export const metadata: Metadata = {
    title: "Администрирование"
}

export default async function Page (){
    return (
        <main>
            <CacheClearButton />
        </main>
    )
}