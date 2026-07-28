"use client"

import ContentDividerV1 from "@/app/_components/dividers/ContentDividerV1";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"

export default function Calculator() {
    const [data, setData] = useState<Record<string, string | number>>({});

    const changeInput = (fieldName: string, e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const newData = { ...data, [fieldName]: e.target.value };
        const val = e.target.value;

        if (val == "") // reset
        {
            setData({});
            return;
        }

        let h: number = Number(newData.h) || Number(newData.w) || 0;
        let w: number = Number(newData.w) || Number(newData.h) || 0;
        let D: number = Number(newData.D) || 0;
        let P: number = Number(newData.P) || 0;

        // перерасчитать всё что можно расчитать
        switch (fieldName) {
            case "w":
                h = w;
                D = (w > 0 && h > 0) ? Math.sqrt(w * w + h * h) : 0;
                P = (w * 4);
                break;

            case "h":
                w = h;
                D = (w > 0 && h > 0) ? Math.sqrt(w * w + h * h) : 0;
                P = (w * 4);
                break;

            case "D":
                w = Math.sqrt(D * D / 2);
                h = w;
                P = (w * 4);
                break;

            case "P":
                w = P / 4;
                h = w;
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
                <h2 id="Calculator" className="w-fit text-2xl text-wrap xl:text-nowrap">Калькулятор</h2>
            </ContentDividerV1>

            <div>
                <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2">Выберите тип фигуры</h3>

                <Image
                    src={"/images/storage/geometry/square.svg"}
                    alt={"Квадрат где углы помечены как: A, B, C, Z, стороны помечены как: отрезки AB и CZ как h, а BC и AZ как w. По центру проведена диагональ, помеченная как D."}
                    width={200} height={200}
                    unoptimized
                />
            </div>


            <div>
                <h3 className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2 ">Значения (заполнять тут)</h3>
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
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="P" className="text-lg">Периметр (P)</FieldLabel>
                            <Input id="P"
                                type="number"
                                value={data.P || ""}
                                onChange={e => changeInput("P", e)}
                            />
                        </Field>
                    </div>
                </div>
            </div>

        </section>
    )
}
