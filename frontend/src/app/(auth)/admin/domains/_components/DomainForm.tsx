"use client"

import ButtonStyled from "@/app/_components/buttons/ButtonStyled";
import Hr from "@/app/_components/Hr";
import InputV2Styled from "@/app/_components/inputs/InputV2Styled";
import { toast } from "@/components/ui/toast";
import { Delete, Post } from "@/libs/Fetch";
import { Domain } from "@/types/Domain"
import { useId, useState } from "react"

export default function DomainForm({
    initialDomain,
    onDeleted,
    onChanged
}: {
    initialDomain: Domain
    onDeleted: () => void
    onChanged: (newData: Domain) => void
}) {
    const [data, setData] = useState<Domain>(initialDomain);
    const domainFormId = useId();


    const upload = async (updata = data) => {
        const response = await Post(`admin/domains/${data.id}`, updata)

        if (response != undefined) {
            onChanged(response);

            toast.add({
                title: "Сохранено",
                type: "succes"
            });
        }
    }


    const tryDelete = async () => {
        if (!confirm('Удалить?'))
            return;


        const response = await Delete(`admin/domains/${data.id}`);

        if (response) {
            onDeleted();
        }
    }


    return (
        <div className="p-3 flex flex-col gap-2 min-w-[250px]">
            <div className="flex flex-col gap-2">
                <div>
                    <label htmlFor={domainFormId + '-name'}>Название</label>
                    <InputV2Styled id={domainFormId + '-name'}
                        value={data.name || ''}
                        onChange={e => setData({ ...data, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor={domainFormId + '-alias'}>Алиас</label>
                    <InputV2Styled id={domainFormId + '-alias'}
                        value={data.alias || ''}
                        onChange={e => setData({ ...data, alias: e.target.value })}
                    />
                </div>

                <ButtonStyled
                    theme="emerald-reversed"
                    className="px-2 py-1 rounded-md"
                    onClick={() => upload()}
                >
                    Сохранить
                </ButtonStyled>
            </div>

            <Hr />

            <ButtonStyled
                className="px-2 py-1 rounded-md"
                onClick={() => {
                    const newData = { ...data, published: !data.published };
                    setData(newData);
                    upload(newData);
                }}
            >
                {data.published ? "Скрыть" : "Опубликовать"}
            </ButtonStyled>

            <Hr />


            <ButtonStyled
                theme="red-reversed"
                className="px-2 py-1"
                onClick={tryDelete}
            >
                Удалить
            </ButtonStyled>
        </div>
    )
}