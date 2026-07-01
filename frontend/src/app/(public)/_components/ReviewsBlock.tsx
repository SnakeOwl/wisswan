
import AnimatedTestimonials from '@/components/ui/animated-testimonials';

const BlockHeader = () => (
    <div className='flex flex-row gap-4 w-full items-center'>
        <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
        <h3 className='text-5xl font-bold min-w-fit mx-auto'>Наши клиенты</h3>
        <div className="hidden xl:block border-b border-neutral-500 w-full"></div>
    </div>
)

export function ReviewsBlock() {
    const testimonials = [
        {
            quote: "Это не просто сеть. Это хаос, ставший системой. Мы стерли самодовольство с лиц клерков и превратили их в армию. Самосовершенствование — это для слабаков, здесь мы занимаемся саморазрушением ради великой цели. Первое правило: вы не пожалеете",
            name: "Tyler Durden",
            designation: "Владелец спотривных крубов",
            src: '/images/extranet/Tyler.webp',
        },
        {
            quote: "Вы спрашиваете о чистоте продукта? Я гарантирую 99.1%. Мы построили империю на точности и химии, когда остальные играли в песочнице. Я не просто в бизнесе — я и есть бизнес. Каждая точка сбыта работает как часы",
            name: "Walter White",
            designation: "Предприниматель в Альбукерке",
            src: '/images/extranet/Walter.png',

        },
        {
            quote: "Весь мир у моих ног, понимаешь? Я приехал никем, а теперь я контролирую каждый грамм власти в этом городе. Если тебе нужна лучшая команда, которая не боится крови и берет то, что хочет — ты пришел по адресу. Say hello to my little friends",
            name: "Tony Montana",
            designation: "Чикагский предприниматель",
            src: '/images/extranet/Tony.jpg',
        },
        {
            quote: "Дружба — это всё. Дружба — это больше, чем талант. Мы построили структуру, где верность ценится превыше золота. Я сделал им предложение, от которого невозможно отказаться, и теперь наша семья крепка как никогда. Помни: никогда не иди против семьи",
            name: "Vito Corleone",
            designation: "Итальянский винодел",
            src: '/images/extranet/Vito.jpg',
        },
        {
            quote: "Каждый может получить автомобиль любого цвета, при условии, что этот цвет — черный. Мы убили ремесленничество, чтобы дать миру массовость. Автоматизация — это не просто конвейер, это победа дисциплины над хаосом. Скорость сборки выросла в десять раз",
            name: "Henry Ford",
            designation: "Американский механизатор",
            src: '/images/extranet/Henry-Ford.jpg',
        },
    ];

    return (
        <div>
            <BlockHeader />

            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}
