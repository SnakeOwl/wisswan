"use client"

import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1"
import clsx from "clsx"
import Image from "next/image"
import 'katex/dist/katex.min.css'; // Важно для правильного отображения дробей
import { InlineMath } from 'react-katex'; // Используем InlineMath, чтобы текст шел в одну строку
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import { useState } from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"


type triangleType = "right";


export default function TriangleCalculator() {
    const [data, setData] = useState<Record<string, string | number>>({
        γ: 90
    });
    const [triangleType, setTriangleType] = useState<triangleType>("right");

    const changeInput = (fieldName: string, event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const newData = { ...data, [fieldName]: event.target.value };
        const val = event.target.value;

        if (val == "") // reset
        {
            setData({});
            return;
        }

        let α: number = Number(newData.α) || 0;
        let ω: number = Number(newData.ω) || 0;
        let γ: number = triangleType == "right" ? 90 : Number(newData.γ) || 0;

        let e: number = Number(newData.e) || 0;
        let g: number = Number(newData.g) || 0;
        let f: number = Number(newData.f) || 0;



        switch (fieldName) {
            case "ω":
                if (triangleType == "right") {
                    α = 90 - ω;

                    if (e > 0) {
                        // Свойство прямоугольного треугольника: Катет прямоугольного треугольника, лежащий против угла в 30°, равен половине гипотенузы.
                        if (ω == 30) {
                            f = e * 2;
                        } else if (ω == 45) {
                            g = e;
                            f = Math.sqrt(e * e + g * g);
                        }
                    }
                }
                break;

            case "α":
                if (triangleType == "right") {
                    ω = 90 - α;

                    if (g > 0) {
                        // Свойство прямоугольного треугольника: Катет прямоугольного треугольника, лежащий против угла в 30°, равен половине гипотенузы.
                        if (α == 30) {
                            f = g * 2;
                        } else if (α == 45) {
                            // катеты равны
                            e = g;
                            f = Math.sqrt(e * e + g * g);
                        }
                    }
                }
                break;

            case "e":
                if (e > 0) {
                    // Свойство прямоугольного треугольника: Катет прямоугольного треугольника, лежащий против угла в 30°, равен половине гипотенузы.
                    if (ω == 30) {
                        f = e * 2;
                    } else if (ω == 45) {
                        g = e;
                        f = Math.sqrt(e * e + g * g);
                    }
                }
                break;

            case "g":
                if (g > 0) {
                    // Свойство прямоугольного треугольника: Катет прямоугольного треугольника, лежащий против угла в 30°, равен половине гипотенузы.
                    if (α == 30) {
                        f = g * 2;
                    } else if (α == 45) {
                        // катеты равны
                        e = g;
                        f = Math.sqrt(e * e + g * g);
                    } else if (e > 0) {
                        // есть 2 катета чтобы просчитать гипотенузу
                        f = Math.sqrt(e * e + g * g);
                    }

                }
                break;

            case "f":


                break;

        }
        console.log(`α: ${α} ω: ${ω} γ: ${γ}`)
        console.log(`e: ${e} g: ${g} f: ${f}`)

        setData({
            "α": α == 0 ? "" : Number(Number(α).toFixed(4)),
            "ω": ω == 0 ? "" : Number(Number(ω).toFixed(4)),
            "γ": γ == 0 ? "" : Number(Number(γ).toFixed(4)),

            "e": e == 0 ? "" : Number(Number(e).toFixed(4)),
            "g": g == 0 ? "" : Number(Number(g).toFixed(4)),
            "f": f == 0 ? "" : Number(Number(f).toFixed(4)),
        });
    }

    return (
        <section aria-hidden={true}>
            <ContentDividerV1 className='my-4'>
                <h2 id="TriangleCalculator" className="w-fit text-2xl text-wrap xl:text-nowrap">Калькулятор треугольников</h2>
            </ContentDividerV1>

            <section>
                <h3 className="text-md text-wrap xl:text-nowrap mt-4 mb-2">Выберите тип треугольника</h3>

                <div className="flex flex-col xl:flex-row gap-3">
                    <figure className={clsx("flex flex-col justify-between items-center border rounded p-2 cursor-pointer hover:border-sky-500 duration-300", {
                        "border-blue-500 ring ring-blue-200": triangleType == "right"
                    })}>
                        <Image
                            src="/images/storage/Triangle_3.svg"
                            width={250} height={250}
                            alt="Прямоугольный треугольник с указанием сторон и углов"
                            unoptimized
                        />

                        <figcaption className="text-sm font-bold">
                            Прямоугольный треугольник
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h3 className="text-md text-wrap xl:text-nowrap mt-4 mb-2">Введите что известно</h3>

                <div className="grid grid-cols-1 xl:grid-cols-5 gap-3">
                    <div className="flex flex-col gap-3">
                        <Field>
                            <FieldLabel htmlFor="α" className="text-amber-700 text-lg"><InlineMath math="\angle{α}" /></FieldLabel>

                            <InputGroup className="max-w-[100px]">
                                <InputGroupInput id="α"
                                    type="number"
                                    value={data.α || ""}
                                    onChange={e => changeInput("α", e)}
                                    max={90} min={0}
                                />

                                <InputGroupAddon align="inline-end">
                                    &deg;
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="ω" className="text-purple-700 text-lg"><InlineMath math="\angle{ω}" /></FieldLabel>

                            <InputGroup className="max-w-[100px]">
                                <InputGroupInput id="ω"
                                    type="number"
                                    value={data.ω || ""}
                                    onChange={e => changeInput("ω", e)}
                                    max={90} min={0}
                                />

                                <InputGroupAddon align="inline-end">
                                    &deg;
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="γ" className="text-pink-700 text-lg"><InlineMath math="\angle{γ}" /></FieldLabel>

                            <InputGroup className="max-w-[100px]">
                                <InputGroupInput id="γ"
                                    type="number"
                                    value={data.γ || ""}
                                    onChange={e => changeInput("γ", e)}
                                    max={90} min={0}
                                    disabled={triangleType == "right"}
                                />

                                <InputGroupAddon align="inline-end">
                                    &deg;
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Field>
                            <FieldLabel htmlFor="e" className="text-amber-700 text-lg">e</FieldLabel>

                            <Input id="e"
                                type="number"
                                value={data.e || ""}
                                onChange={e => changeInput("e", e)}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="g" className="text-cyan-700 text-lg">g</FieldLabel>

                            <Input id="g"
                                type="number"
                                value={data.g || ""}
                                onChange={e => changeInput("g", e)}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="f" className="text-lime-700 text-lg">f</FieldLabel>

                            <Input id="f"
                                type="number"
                                value={data.f || ""}
                                onChange={e => changeInput("f", e)}
                                disabled
                            />

                        </Field>
                    </div>
                </div>
            </section>
        </section>
    )
}