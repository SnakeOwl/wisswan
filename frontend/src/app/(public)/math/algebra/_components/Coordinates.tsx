import Image from "next/image";

const Coordinates = () => (
    <div>
        <p><strong>Система координат</strong> — это удобный способ определять положение точки и графики на плоскости или в пространстве. В большинстве случаев в математике используется Декартова система координать, но есть и другие.</p>

        <section>
            <h3 id="Coordinates-ReneDekart" className="text-xl mt-4 mb-2 text-wrap">Декартова система координат</h3>
            <p>Впервые прямоугольную систему координат ввёл Рене Декарт В своей работе «Геометрия». На ней изображены 2 оси: ось <b>X</b> <i>(ось абсцисс)</i> и ось <b>Y</b> <i>(ось ординат)</i> и через них задаются координаты.</p>

            <p>Графиком обратной пропорциональной зависимости является <b>гипербола</b>.</p>

            <figure className="flex flex-col items-center my-2">
                <Image
                    src={"/images/storage/algebra/decart-coordinates.svg"}
                    unoptimized
                    width={500} height={500}
                    alt="Декартова система координат. Две перпендикулярные стрелки с засечками от -9 до 9. Горизонтальная ось X, вертикальная Y."
                />

                <figcaption className="font-bold text-sm">
                    Декартова система координат
                </figcaption>
            </figure>

            <h4 id="Coordinates-examples" className="text-lg mt-4 mb-2 text-wrap">Примеры использования системы координат</h4>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
                <figure className="flex flex-col items-center my-2 w-fit">
                    <Image
                        src={"/images/storage/algebra/decart-coordinates-with-dots.svg"}
                        unoptimized
                        width={500} height={500}
                        alt="Декартова система координат с точками на ней"
                    />

                    <figcaption>
                        Декартова система координат с точками: <b>A(2,1)</b>, <b>B(5,2)</b>, <b>C(6-6)</b>, <b>D(-3,-3)</b>, <b>E(-5,4)</b>
                    </figcaption>
                </figure>

                <figure className="flex flex-col items-center my-2 w-fit">
                    <Image
                        src={"/images/storage/algebra/decart-coordinates-y-2-x.svg"}
                        unoptimized
                        width={500} height={500}
                        alt="Декартова система координат с точками на ней. Точки: (1,2), (2,4), (3,6), (4,8). Через все точки проходит прямая."
                    />

                    <figcaption>
                        Декартова система координат с формулой <b className="text-nowrap">Y = 2X</b>
                    </figcaption>
                </figure>

                <figure className="flex flex-col items-center my-2 w-fit">
                    <Image
                        src={"/images/storage/algebra/decart-coordinates-y-8-div-x.svg"}
                        unoptimized
                        width={500} height={500}
                        alt="Декартова система координат с точками на ней. Точки: (1,8), (2,4), (3,2.6), (4,2), (5,1.6), (6,1.3), (7,1.14), (8,1), (9,0.88). Все точки соеденены линией."
                    />

                    <figcaption className="w-full">
                        Декартова система координат с формулой <b className="text-nowrap">Y = 8/X</b>. Кривая, которая соединяет все точки называют <b>Гиперболой</b>.
                    </figcaption>
                </figure>
            </div>
        </section>
    </div>
)

export default Coordinates;