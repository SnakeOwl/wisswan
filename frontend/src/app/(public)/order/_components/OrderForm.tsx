"use client"

import InputV2Styled from "@/app/_components/inputs/InputV2Styled";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react"
import sendHelpFormRequest from "../../_components/sendHelpFormRequest";
import TextareaV2Styled from "@/app/_components/inputs/TextareaV2Styled";
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";
import { CircleQuestionMark, Save } from "lucide-react";
import { default as ButtonStyled, ButtonStyledTheme } from "@/app/_components/buttons/ButtonStyled";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


const SupportFormRequestSchema = z.object({
    text: z.string()
        .min(12, "Опишите пожелания и контакты")
        .max(65535, "Слишком много символов"),
    using_personal_data: z.boolean()
        .refine((val) => val === true), // пропускать только при активной галочке на форме
    subject: z.string(),
    contact_email: z.string()
        .email("Некорректный email")
        .nullable().optional()
        .or(z.literal('')),
});

type SupportFormRequest = z.infer<typeof SupportFormRequestSchema>;

export default function OrderForm() {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [backendErrors, setBackendErrors] = useState<Record<string, any>>({});
    const [wasSent, setWasSent] = useState<boolean>(false);
    const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

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
            subject: "Заказ услуги",
            contact_email: "",
        },
    });


    /**
     * Отправка формы 
     * @var data - данные прошедние валидацию 
     */
    const onSubmit = async (data: SupportFormRequest) => {
        setIsPending(true);

        data.text += selectedTechnology ? ` / Выбранная технология: ${selectedTechnology}` : "Технология не выбрана";

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

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 my-auto grid gap-3 xl:max-w-2xl mx-auto">
            <input type="hidden" {...register("subject")} />

            <ProjectTecnologyButtons
                onTechnologyChanged={(technologyName: string | null) => setSelectedTechnology(technologyName)}
                selectedTechnology={selectedTechnology}
            />

            <div>
                <label htmlFor="text">Опишите пожелания и контактные данные</label>
                <TextareaV2Styled
                    id="text"
                    className="w-full"
                    rows={5}
                    {...register("text")}
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
                    <Save className="stroke-neutral-300" />
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



const ProjectTecnologyButtons = ({
    onTechnologyChanged,
    selectedTechnology,
}: {
    onTechnologyChanged: (technologyName: string | null) => void
    selectedTechnology: string | null
}) => {
    const tecnologies: {
        imageSrc: string,
        imageAlt: string,
        label: string,
        theme: ButtonStyledTheme,
        checkedTheme: ButtonStyledTheme
    }[] = [
            {
                imageSrc: '/images/storage/dashicons-wordpress-alt.svg',
                imageAlt: "Логотип Wordpress",
                label: 'Wordpress',
                theme: "green-reversed",
                checkedTheme: "green",
            }, {
                imageSrc: '/images/storage/1c_bitrix_logo.svg',
                imageAlt: "Логотип 1С-Битрикс",
                label: '1С-Битрикс',
                theme: "blue-reversed",
                checkedTheme: "blue",
            }, {
                imageSrc: '/images/storage/Laravel.svg',
                imageAlt: "Логотип Laravel",
                label: 'Laravel',
                theme: "red-reversed",
                checkedTheme: "red",
            }, {
                imageSrc: '/images/storage/logos/Next.js.svg',
                imageAlt: "Логотип Next.js",
                label: 'Next.js',
                theme: "fuchsia-reversed",
                checkedTheme: "fuchsia",
            }
        ];


    return (
        <div>
            <Tooltip>
                <TooltipTrigger className={"w-full flex"}>
                    <div className="text-lg text-center mb-1 flex flex-row items-center gap-1 mx-auto">
                        Технология разработки <CircleQuestionMark className="text-blue-950 h-5" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Можете выбрать технологию для разработки. Если она выбрана не будет, её установят после ознакомления с требованиями по проекту.</p>
                </TooltipContent>
            </Tooltip>

            <div className="grid grid-cols-2 xl:grid-cols-4 grid-rows-2 xl:grid-rows-1 gap-2">
                {tecnologies.map((el, index) => (
                    <ButtonStyled key={index}
                        className="flex flex-row items-center justify-between p-1 pr-2 text-xl text-nowrap"
                        theme={el.label == selectedTechnology ? el.checkedTheme : el.theme}
                        type="button"
                        onClick={() => onTechnologyChanged(el.label == selectedTechnology ? null : el.label)}
                    >
                        <div className="bg-white rounded p-1 w-fit">
                            <Image
                                src={el.imageSrc}
                                width={25} height={25}
                                alt={el.imageAlt}
                            />
                        </div>

                        <span className="flex-1 mx-auto">
                            {el.label}
                        </span>
                    </ButtonStyled>
                ))
                }
            </div>
        </div>
    )
}