import { Hack } from "@/types/Hack";
import StatusView from "../../../_components/StatusView";
import DeleteButton from "./DeleteButton";
import SendHackToPublickReviewButton from "./SendHackToPublickReviewButton";
import { useContext, useEffect, useState } from "react";
import ContextUser from "@/context/ContextUser";
import { isAdmin } from "@/types/User";
import StatusChanger from "@/app/(auth)/_components/StatusChanger";
import uploadHackRequest from "../_requests/uploadHackRequest";

export default function HackAdvancedForm({
    initialHack
}: {
    initialHack: Hack
}) {
    const { stateUser } = useContext(ContextUser);
    const [hack, setHack] = useState<Hack>(initialHack);


    return (
        <div className="flex flex-col gap-4">
            <div>
                <h4>Информация</h4>
                {hack.created_at &&
                    <div>Создан: {new Date(hack.created_at).toLocaleDateString('ru-RU')}</div>
                }
                {hack.updated_at &&
                    <div>Изменён: {new Date(hack.updated_at).toLocaleDateString('ru-RU')}</div>
                }
                <div>Видимость: {hack.is_global ? "Опубликован" : "Личный"} </div>
                <div>Рейтинг: {hack.rating}</div>
                <div>Айпи последнего обновлявшего: {hack.ip_last_updated}</div>
                <div>Привязан к пользователю: {hack.user_id}</div>
                <div className="flex gap-1 items-center">
                    <span>Статус:</span>
                    <StatusView status={hack.status} />
                </div>
            </div>

            <div>
                <h4>Управление</h4>
                {isAdmin(stateUser.user) &&
                    <div className="flex flex-wrap gap-3 mb-4">
                        <StatusChanger
                            changeRequest={(newStatus: number) => uploadHackRequest({ id: hack.id, status: newStatus })}
                            initialStatus={hack.status}
                            onChanged={(newStatus: number) => setHack({ ...hack, status: newStatus })}
                        />
                    </div>
                }

                <div className="flex flex-wrap gap-3 items-center">
                    <SendHackToPublickReviewButton
                        hack={hack}
                        statusChanged={(newStatus: number) => setHack({ ...hack, status: newStatus })}
                    />

                    <DeleteButton hackId={hack.id} />
                </div>
            </div>
        </div>
    )
}