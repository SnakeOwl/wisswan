"use client"

import Select from "@/app/_components/inputs/Select";
import ContextToast from "@/context/messages/Toaster/ContextToast";
import { statuses } from "@/types/Status";
import { useContext, useEffect, useState } from "react";


export default function StatusChanger({
    changeRequest, // какая-либо функция для отправки на бек. Главное чтобы response возвращала для отладки
    initialStatus,
    onChanged
}: {
    changeRequest: (newStatus: number) => any,
    initialStatus: number,
    onChanged: (newStatus: number) => void
}) {
    const [status, setStatus] = useState<number>(initialStatus);
    const { dispatchToast } = useContext(ContextToast);

    
    const onChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = Number(e.target.value);
        setStatus(newStatus);
        const response = await changeRequest(newStatus);

        if (response == undefined || response.id == undefined)
            throw new Error('Не смог сохранить статус');


        onChanged(newStatus);
        dispatchToast({
            type: "SET",
            title: "Сохранено",
            style: "green",
        });
    }


    // прослушка изменения статуса из вне
    // TODO: refactoring: При добавлении следующей фичи в форму хака, ставить всю форму на useReducer
    useEffect(() => {
        setStatus(initialStatus);
    }, [initialStatus]);


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