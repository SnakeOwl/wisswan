"use server"

import { updateTag } from "next/cache"

// на клиенских компонентах используй эту функцию.
export default async function updateTagAction(tagName: string){
    updateTag(tagName);
}