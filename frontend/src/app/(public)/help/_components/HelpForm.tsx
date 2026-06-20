"use client"

import InputV2Styled from "@/app/_components/inputs/InputV2Styled";
import { useForm, Controller } from "react-hook-form"; // <-- Добавили Controller
import { useState } from "react"
import sendHelpFormRequest from "./sendHelpFormRequest";
import TextareaV2Styled from "@/app/_components/inputs/TextareaV2Styled";
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";
import ButtonStyled from "@/app/_components/buttons/ButtonStyled";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subjectSelectOptions = [
    { value: "Вопросы по платформе", title: "Вопросы по платформе" },
    { value: "Сотрудничество", title: "Сотрудничество" },
    { value: "Другое", title: "Другое" }
]

const SupportFormRequestSchema = z.object({
    text: z.string()
        .min(1, "Напишите текст сообщения")
        .max(65535, "Слишком много символов"),
    using_personal_data: z.boolean()
        .refine((val) => val === true), // пропускать только при активной галочке на форме
    subject: z.string()
        .max(255, "Слишком много символов")
        .min(3, "Нужно выбрать тему письма"),
    contact_email: z.string()
        .email("Некорректный email")
        .nullable().optional()
        .or(z.literal('')),
});

type SupportFormRequest = z.infer<typeof SupportFormRequestSchema>;

export default function HelpForm() {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [backendErrors, setBackendErrors] = useState<Record<string, any>>({});
    const [wasSent, setWasSent] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SupportFormRequest>({
        resolver: zodResolver(SupportFormRequestSchema),
        defaultValues: {
            text: "",
            using_personal_data: false,
            subject: "",
            contact_email: "",
        },
    });


    /**
     * Отправка формы 
     * @var data - данные прошедние валидацию 
     */
    const onSubmit = async (data: SupportFormRequest) => {
        setIsPending(true);

        const response = await sendHelpFormRequest(data);

        if (!!response.errros) {
            setBackendErrors(response.errros);
        } else {
            setBackendErrors({});
            // TODO: добавить сюда отклик об отправке формы
            setWasSent(true);
        }

        setIsPending(false);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 xl:max-w-xl mx-auto">
            <div>
                <label htmlFor="subject">Тема</label>
                <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger aria-invalid={!!errors.subject} className="w-full">
                                <SelectValue placeholder="Выберите тему письма" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {subjectSelectOptions.map((el) => (
                                        <SelectItem key={el.value} value={el.value}>
                                            {el.title}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.subject && <p className="text-red-600 text-sm">{errors.subject.message}</p>}
            </div>

            <div>
                <label htmlFor="text">Сообщение</label>
                <TextareaV2Styled
                    id="text"
                    className="w-full"
                    rows={5}
                    {...register("text")} // <--- Подключили стандартный инпут
                    error={errors.text?.message || backendErrors.text}
                />
            </div>

            <div>
                <label htmlFor="contact_email">Контактный email (для получения ответа)</label>
                <InputV2Styled
                    id="contact_email"
                    type="email"
                    placeholder="WalterWhite@gmail.com"
                    autoComplete="email"
                    {...register("contact_email")} // <--- Подключили стандартный инпут
                    error={errors.contact_email?.message || backendErrors.contact_email}
                />
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center">
                    <Controller
                        name="using_personal_data"
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                id="using_personal_data"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                aria-invalid={!!errors.using_personal_data}
                            />
                        )}
                    />
                    <label htmlFor="using_personal_data" className={`${errors.using_personal_data && "text-red-600"}`}>
                        Согласен с <Link href={'/privacy'} prefetch={false} target="_blank" className="hover-link text-sky-800">
                            политикой использования персональных данных
                        </Link>
                    </label>
                </div>
            </div>

            <ButtonStyled
                type="submit"
                className="py-1 rounded max-w-md w-full mx-auto"
                theme={wasSent ? "emerald-reversed" : "blue"}
                disabled={isPending || wasSent}
            >
                {wasSent ? "Отправлено!" : "Отправить"}
            </ButtonStyled>

            {!isPending &&
                <div className="fixed right-4 bottom-4 animate-pulse">
                    <Save className="dark:stroke-neutral-700 stroke-neutral-300" />
                </div>
            }

            {backendErrors.general &&
                <div className="text-red-600">
                    {backendErrors.general}
                </div>
            }
        </form>
    )
}
