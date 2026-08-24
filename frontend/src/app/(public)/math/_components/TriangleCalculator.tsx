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
import { Button } from "@/components/ui/button";


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

        let S: number = Number(newData.S) || 0;
        let P: number = Number(newData.P) || 0;



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
                if (triangleType == "right") {
                    if (e > 0) {
                        // Свойство прямоугольного треугольника: Катет прямоугольного треугольника, лежащий против угла в 30°, равен половине гипотенузы.
                        if (ω == 30) {
                            f = e * 2;
                        } else if (ω == 45) {
                            g = e;
                            f = Math.sqrt(e * e + g * g);
                        }
                    }

                    // TODO: какая-то неудобная херня 1
                    if (f > 0) {
                        g = Math.sqrt(f * f - e * e);
                    }
                    

                }
                break;

            case "g":
                if (triangleType == "right") {
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
                }
                break;

            case "f":
                if (triangleType == "right") {
                    if (α == 30) {
                        g = f / 2;
                    }
                    if (ω == 30) {
                        e = f / 2;
                    }
                }
                // Свойство прямоугольного треугольника: Катет прямоугольного треугольника, лежащий против угла в 30°, равен половине гипотенузы.


                break;
        }

        if (triangleType == "right") {
            // TODO: какая-то неудобная херня 1
            if (fieldName != "e") {
                if (α == 30 && f > 0) {
                    g = f / 2;
                    e = Math.sqrt(f * f - g * g);
                }

                if (ω == 30 && f > 0) {
                    e = f / 2;
                    g = Math.sqrt(f * f - e * e);
                }
            }


            S = (g > 0 && e > 0) ? g * e / 2 : 0;
            P = (g > 0 && e > 0 && f > 0) ? g + e + f : 0;

        }


        setData({
            "α": α == 0 ? "" : Number(Number(α).toFixed(4)),
            "ω": ω == 0 ? "" : Number(Number(ω).toFixed(4)),
            "γ": γ == 0 ? "" : Number(Number(γ).toFixed(4)),

            "e": e == 0 ? "" : Number(Number(e).toFixed(4)),
            "g": g == 0 ? "" : Number(Number(g).toFixed(4)),
            "f": f == 0 ? "" : Number(Number(f).toFixed(4)),

            "S": S == 0 ? "" : Number(Number(S).toFixed(4)),
            "P": P == 0 ? "" : Number(Number(P).toFixed(4)),
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
                            src="/images/storage/geometry/Triangle-3.svg"
                            width={250} height={250}
                            alt="Прямоугольный треугольник с указанием сторон и углов"
                            unoptimized
                        />

                        <figcaption className="text-sm font-heading">
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
                            />
                        </Field>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Field>
                            <FieldLabel htmlFor="S" className="text-lg">S (площадь)</FieldLabel>

                            <Input id="S"
                                type="number"
                                value={data.S || ""}
                                onChange={e => changeInput("S", e)}
                                disabled
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="P" className="text-lg">P (периметр)</FieldLabel>

                            <Input id="P"
                                type="number"
                                value={data.P || ""}
                                onChange={e => changeInput("P", e)}
                                disabled
                            />
                        </Field>
                    </div>
                </div>
            </section>

            <div className="mt-4">

                <Button
                    onClick={() => setData({
                        γ: 90
                    })}
                >
                    Сброс
                </Button>
            </div>
        </section>
    )
}