"use client"

import InputV2Styled from "@/app/_components/inputs/InputV2Styled";
import { SiteCrawler } from "@/types/SiteCrawler";
import { useState } from "react"
import upsetSiteCrawler from "../_requests/upsetSiteCrawler";

export default function SiteCrawlerForm({
    initialCrawler,
}: {
    initialCrawler: SiteCrawler | null
}) {
    const [data, setData] = useState<Record<string, any> | null>(initialCrawler || {});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const upload = async () => {
        if (data == null)
            return false;


        const response = await upsetSiteCrawler(data);

        if (response.errors != undefined) {
            setErrors(response.errors);
        } else {
            setErrors({});
        }

        if (data.id == undefined && response.id != undefined) {
            // new Crawler created
            setData(response);
        }
    }


    return (
        <div className="flex flex-col gap-2">
            <div>
                <label htmlFor="url">Ссылка</label>
                <InputV2Styled id="url"
                    value={data ? data.url || '' : ""}
                    onChange={e => setData({ ...data, url: e.target.value })}
                    onBlur={() => upload()}
                    error={errors.url}
                    placeholder="https://nextjs.org/"
                />
            </div>

            {errors.errors &&
                <p className="text-red-500">
                    {errors.errors}
                </p>
            }
        </div>
    )
}