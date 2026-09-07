"use client"

import { statuses } from "@/types/Status";
import { toast } from "@/components/ui/toast"
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"
import { Field, FieldLabel } from "@/components/ui/field";

export default function StatusChanger({
    changeRequest, // какая-либо функция для отправки на бек. Главное чтобы response возвращала для отладки
    status,
    onChanged
}: {
    changeRequest: (newStatus: number) => any,
    status: number,
    onChanged: (newStatus: number) => void
}) {
    const onChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = Number(e.target.value);
        await changeRequest(newStatus);

        onChanged(newStatus);

        toast.add({
            title: "Статус изменён",
            type: "succes"
        });
    }



    return (
        <Field className="w-[250px]">
            <FieldLabel htmlFor="status">Статус</FieldLabel>

            <NativeSelect
                id="status"
                onChange={onChange}
                value={status}
            >
                {statuses.map((el, index) => (
                    <NativeSelectOption key={index} value={el.value}>{el.title}</NativeSelectOption>
                ))
                }
            </NativeSelect>
        </Field>
    )
}