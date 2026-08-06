"use client"

import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import clsx from "clsx";


type Figure = "rectangle" | "square";


export default function RectangleCalculator() {
    const [data, setData] = useState<Record<string, string | number>>({});
    const [figure, setFigure] = useState<Figure>("square");


    const changeFigure = (newFigure: Figure) => {
        setData({});
        setFigure(newFigure);
    }


    const changeInput = (fieldName: string, e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const newData = { ...data, [fieldName]: e.target.value };
        const val = e.target.value;

        if (val == "") // reset
        {
            setData({});
            return;
        }

        let h: number = Number(newData.h) || 0;
        let w: number = Number(newData.w) || 0;
        let D: number = Number(newData.D) || 0;
        let P: number = Number(newData.P) || 0;

        // перерасчитать всё что можно расчитать
        switch (fieldName) {
            case "w":
                if (figure == "square") {
                    h = w;
                    P = (w * 4);
                } else {
                    P = (w > 0 && h > 0)? (w * 2 + h * 2): 0;
                }

                D = (w > 0 && h > 0) ? Math.sqrt(w * w + h * h) : 0;
                break;

            case "h":
                if (figure == "square") {
                    w = h;
                    P = (w * 4);
                } else {
                    P = (w > 0 && h > 0) ? (w * 2 + h * 2) : 0;
                }

                D = (w > 0 && h > 0) ? Math.sqrt(w * w + h * h) : 0;
                break;

            case "D":
                if (figure == "square") {
                    w = Math.sqrt(D * D / 2);
                    h = w;
                    P = (w * 4);
                } else {
                    P = (w * 2 + h * 2);
                    w = 0;
                    h = 0;
                }
                break;

            case "P":
                if (figure == "square") {
                    w = P / 4;
                    h = w;
                } else {
                    P = (w > 0 && h > 0) ? (w * 2 + h * 2) : 0;
                    w = 0;
                    h = 0;
                }
                D = (w > 0 && h > 0) ? Math.sqrt(w * w + h * h) : 0;
                break;
        }

        setData({
            "h": h == 0 ? "" : Number(Number(h).toFixed(4)),
            "w": w == 0 ? "" : Number(Number(w).toFixed(4)),
            "D": D == 0 ? "" : Number(Number(D).toFixed(4)),
            "P": P == 0 ? "" : Number(Number(P).toFixed(4)),
        });
    }


    return (
        <section>
            <ContentDividerV1>
                <h2 id="Calculator" className="w-fit text-2xl text-wrap xl:text-nowrap">Калькулятор прямоугольников</h2>
            </ContentDividerV1>

            <div>
                <p className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 font-heading">Выберите тип фигуры</p>

                <div className="flex flex-col xl:flex-row gap-3">
                    <figure className={clsx("flex flex-col justify-between items-center border rounded p-2 cursor-pointer hover:border-sky-500 duration-300", {
                        "border-blue-500 ring ring-blue-200": figure == "square"
                    })}
                        onClick={() => changeFigure("square")}
                    >
                        <Image
                            src={"/images/storage/geometry/square.svg"}
                            alt={"Квадрат где углы помечены как: A, B, C, Z, стороны помечены как: отрезки AB и CZ как h, а BC и AZ как w. По центру проведена диагональ, помеченная как D."}
                            width={200} height={200}
                            unoptimized
                        />

                        <figcaption className="text-sm text-center font-bold">
                            Квадрат
                        </figcaption>
                    </figure>

                    <figure className={clsx("flex flex-col justify-between items-center border rounded p-2 cursor-pointer hover:border-sky-500 duration-300", {
                        "border-blue-500 ring ring-blue-200": figure == "rectangle"
                    })}
                        onClick={() => changeFigure("rectangle")}
                    >
                        <Image
                            src={"/images/storage/geometry/rectangle.svg"}
                            alt={"Прямоугольник где углы помечены как: A, B, C, Z, стороны помечены как: отрезки AB и CZ как h, а BC и AZ как w. По центру проведена диагональ, помеченная как D."}
                            width={200} height={200}
                            unoptimized
                        />

                        <figcaption className="text-sm text-center font-bold">
                            Прямоугольник
                        </figcaption>
                    </figure>
                </div>
            </div>


            <div>
                <p className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 font-heading">Возможные значения</p>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
                    <div className="flex flex-col gap-3">
                        <Field>
                            <FieldLabel htmlFor="w" className="text-green-700 text-lg">Ширина (w)</FieldLabel>
                            <Input id="w"
                                type="number"
                                value={data.w || ""}
                                onChange={e => changeInput("w", e)}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="h" className="text-blue-700 text-lg">Высота (h)</FieldLabel>
                            <Input id="h"
                                type="number"
                                value={data.h || ""}
                                onChange={e => changeInput("h", e)}
                                disabled={figure == "square"}
                            />
                        </Field>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Field>
                            <FieldLabel htmlFor="D" className="text-purple-700 text-lg">Диагональ (D)</FieldLabel>
                            <Input id="D"
                                type="number"
                                value={data.D || ""}
                                onChange={e => changeInput("D", e)}
                                disabled={figure == "rectangle"}
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="P" className="text-lg">Периметр (P)</FieldLabel>
                            <Input id="P"
                                type="number"
                                value={data.P || ""}
                                onChange={e => changeInput("P", e)}
                                disabled={figure == "rectangle"}
                            />
                        </Field>
                    </div>
                </div>
            </div>

        </section>
    )
}
