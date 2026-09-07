"use server"

import { Domain } from "@/types/Domain";
import axiosClient from "@/utils/axiosClient";


/**
 * @returns null - не смог обновить данные, Domain[] - привязанные домены.
 * 
 */
export default async function syncPostDomains(postId: number, domains: (Domain | string)[]): Promise<null | Domain[]> {
    console.log("domains: ", domains);
    return axiosClient.put(`user/posts/${postId}/sync-domains`, { domains: domains })
        .then(response => {
            if (response.status == 200) {
                const domains = response.data;
                return domains;
            }
        })
        .catch(responseError => {
            if (responseError.status == 422) {
                console.error(responseError.data)
            }

            return null
        });


}