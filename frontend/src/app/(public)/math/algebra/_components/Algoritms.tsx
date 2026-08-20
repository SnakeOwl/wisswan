const Algoritsm = () => (
    <div>
        <section>
            <h3 id="Algoritsm-NOD" className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2">Нахождение наибольшего общего делителя НОД</h3>
            <section>
                <h4 id="Algoritsm-NOD-school" className="mt-4 mb-2 text-lg text-wrap">Школьный метод</h4>
                <ol className="list-decimal list-inside">
                    <li>Разложить каждое из чисел на простые множители.</li>
                    <li>Выписать все общие множители (те, которые входят в каждое из полученных разложений).</li>
                    <li>Найти произведение этих общих множителей.</li>
                </ol>

                <p className="font-bold">Пример:</p>
                <ol className="list-decimal list-inside">Найти НОД(48, 72, 96)
                    <li>
                        Разлаживаю числа на простые множители: <br />
                        48 = <b>2 * 2 * 2</b> * 2 * <b>3</b><br />
                        72 = <b>2 * 2 * 2</b> * 3 * <b>3</b><br />
                        96 = <b>2 * 2 * 2</b> * 2 * 2 * <b>3</b>
                    </li>
                    <li>
                        Выписываю общие множители (те, которые входят в каждое из полученных разложений): <br />
                        <b>2 * 2 * 2 * 3</b>
                    </li>
                    <li> Нахожу произведение общих множителей: <b>2 * 2 * 2 * 3</b> = 24</li>
                </ol>
            </section>
        </section>

        <section>
            <h3 id="Algoritsm-NOK" className="w-fit text-xl text-wrap xl:text-nowrap mt-4 mb-2">Нахождение наименьшего общего кратного НОК</h3>
            <section>
                <h4 id="Algoritsm-NOK-school"  className="mt-4 mb-2 text-lg text-wrap">Школьный метод</h4>
                <ol className="list-decimal list-inside">
                    <li>Разложить каждое из чисел на простые множители.</li>
                    <li>Записать разложение одного из чисел и дополнить его теми множителями из остальных разложений, которых нет в записанном произведении.</li>
                    <li>Вычислить записанное произведение.</li>
                </ol>

                <p className="font-bold">Пример:</p>
                <ol className="list-decimal list-inside">Найти НОК(48, 72, 96)
                    <li>
                        Разлаживаю числа на простые множители: <br />
                        48 = 2 * 2 * 2 * 2 * 3<br />
                        72 = 2 * 2 * 2 * 3 * 3<br />
                        96 = 2 * 2 * 2 * 2 * 2 * 3
                    </li>
                    <li>
                        Выписываю числа самого большого числа: <br />
                        <b>2 * 2 * 2 * 2 * 2 * 3</b> <br />
                        Сравниваю с оставшимися числами и дописываю то, чего не хватает. <br />
                        в случае с 48 все множители уже есть. <br />
                        В случае с 72 не хватает тройки. Добавляю тройку в набор <br />
                        <b>2 * 2 * 2 * 2 * 2 * 3 * 3</b>
                    </li>
                    <li>Нахожу произведение общих множителей: <b>2 * 2 * 2 * 3</b> = 24</li>
                </ol>
            </section>
        </section>
    </div>
)

export default Algoritsm;