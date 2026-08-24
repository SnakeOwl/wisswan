"use client"

import clsx from "clsx"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import { useState } from "react";
import { Button } from "@/components/ui/button";



export default function CircleCalculator() {
    const defaultData = {};

    const [data, setData] = useState<Record<string, string | number>>(defaultData);


    const changeInput = (fieldName: string, event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const newData = { ...data, [fieldName]: event.target.value };
        const val = event.target.value;

        if (val == "") // reset
        {
            setData({});
            return;
        }

        const pi = Math.PI;

        let S: number = Number(newData.S) || 0;
        let radius: number = Number(newData.radius) || 0;
        let diametr: number = Number(newData.diametr) || 0;
        let length: number = Number(newData.length) || 0;


        switch (fieldName) {
            case "S":
                radius = Math.sqrt(S / pi);
                diametr = radius * 2;
                length = pi * diametr;
                break;

            case "radius":
                diametr = radius * 2;
                length = pi * diametr;
                S = pi * radius * radius;
                break;

            case "diametr":
                radius = diametr / 2;
                length = pi * diametr;
                S = pi * radius * radius;
                break;

            case "length":
                diametr = length / pi;
                radius = diametr / 2;
                S = pi * radius * radius;
                break;
        }

        setData({
            "S": S == 0 ? "" : Number(Number(S).toFixed(4)),
            "radius": radius == 0 ? "" : Number(Number(radius).toFixed(4)),
            "diametr": diametr == 0 ? "" : Number(Number(diametr).toFixed(4)),

            "length": length == 0 ? "" : Number(Number(length).toFixed(4)),
        });
    }

    return (
        <div>
            <div aria-hidden={true}>
                <section>
                    <h3 className="text-md text-wrap xl:text-nowrap mt-4 mb-2">Выберите тип фигуры</h3>

                    <div className="flex flex-col xl:flex-row gap-3">
                        <figure className={clsx("flex flex-col justify-between items-center border rounded p-2 cursor-pointer hover:border-sky-500 duration-300", {
                            "border-blue-500 ring ring-blue-200": true
                        })}>
                            <Image
                                src="/images/storage/geometry/calculator-circle.svg"
                                width={250} height={250}
                                alt="Круг"
                                unoptimized
                            />

                            <figcaption className="text-sm font-heading">
                                Круг
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section>
                    <h3 className="text-md text-wrap xl:text-nowrap mt-4 mb-2">Введите что известно</h3>

                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-3">
                        <div className="flex flex-col gap-3">
                            <Field>
                                <FieldLabel htmlFor="radius" className="text-green-700 text-lg">Радиус</FieldLabel>

                                <Input id="radius"
                                    type="number"
                                    value={data.radius || ""}
                                    onChange={e => changeInput("radius", e)}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="diametr" className="text-blue-700 text-lg">Диаметр</FieldLabel>

                                <Input id="diametr"
                                    type="number"
                                    value={data.diametr || ""}
                                    onChange={e => changeInput("diametr", e)}
                                />
                            </Field>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Field>
                                <FieldLabel htmlFor="length" className="text-lg">Длина (так же периметр)</FieldLabel>

                                <Input id="length"
                                    type="number"
                                    value={data.length || ""}
                                    onChange={e => changeInput("length", e)}
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="S" className="text-lg">S (площадь)</FieldLabel>

                                <Input id="S"
                                    type="number"
                                    value={data.S || ""}
                                    onChange={e => changeInput("S", e)}
                                />
                            </Field>
                        </div>
                    </div>
                </section>

                <div className="mt-4">

                    <Button
                        onClick={() => setData(defaultData)}
                    >
                        Сброс
                    </Button>
                </div>
            </div>

            <div className="sr-only">Калькулятор слишком сложный чтобы его можно было использовать на читалках.</div>
        </div>
    )
}