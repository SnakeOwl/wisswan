"use client"

import Select from "@/app/_components/inputs/Select";
import { statuses } from "@/types/Status";
import { toast } from "@/components/ui/toast"


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
        const response = await changeRequest(newStatus);

        if (response == undefined || response.id == undefined)
            throw new Error('Не смог сохранить статус');


        onChanged(newStatus);

        toast.add({
            title: "Статус изменён",
            type: "succes"
        });
    }



    return (
        <div className="w-[250px]">
            <label htmlFor="status">Статус</label>
            <Select id="status"
                options={statuses}
                value={status}
                onChange={onChange}
            />
        </div>
    )
}