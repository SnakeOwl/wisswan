
import Lexical from "@/app/_components/TextEditors/Lexical";
import { Suspense } from "react";

export default async function Page(){
    return (
        <main>
            <Suspense>
                {/* <Lexical  key={new Date().getSeconds()}/> */}
            </Suspense>
        </main>
    )
}