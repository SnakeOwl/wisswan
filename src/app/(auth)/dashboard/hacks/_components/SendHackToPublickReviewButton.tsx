"use client"

import ButtonStyled from "@/app/_components/buttons/ButtonStyled";
import { Hack } from "@/types/Hack";
import { useEffect, useState } from "react";
import uploadHackRequest from "../_requests/uploadHackRequest";

export default function SendHackToPublickReviewButton({
    hack,
    statusChanged
}: {
    hack: Hack
    statusChanged: (newStatus: number) => void
}) {
    const [process, setProcess] = useState<boolean>(false);
    const [status, setStatus] = useState<number>(hack.status);

    let buttonDisabled: boolean = false;

    const onClick = async () => {
        setProcess(true);

        // если статус не "На проверке", то поставить в статус "На проверке" (110), иначе скрываем (200)
        const newStatus = status != 110 ? 110 : 200;
        const response = await uploadHackRequest({ id: hack.id, status: newStatus });

        if (response == undefined || response.id == undefined)
            throw new Error("Не смог заапдейтить статус хака.")


        statusChanged(newStatus);
        setStatus(newStatus);

        setProcess(false);
    }


    // прослушка изменения статуса из вне
    // TODO: refactoring: При добавлении следующей фичи в форму хака, ставить всю форму на useReducer
    useEffect(() => {
        setStatus(hack.status);
    }, [hack.status]);


    let buttonText: string = "Опубликовать";

    switch (status) {
        case 110:
            buttonText = "На проверке";
            buttonDisabled = true;
            break;

        case 200:
            buttonText = "Скрыть (Опубликован)";
            break;
    }


    return (
        <ButtonStyled
            disabled={buttonDisabled || process}
            theme="emerald-reversed"
            onClick={onClick}
            className="px-2 py-1 rounded-sm"
        >
            {buttonText}
        </ButtonStyled>
    )
}