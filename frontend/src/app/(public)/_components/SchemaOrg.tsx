// структурированные данные под сущности. JSON-LD
export default async function SchemaOrg() {
    const priceCurrency = "BYN";

    const offers = [
        {
            name: "Создание и поддержка сайтов на WordPress",
            description: "Быстрый запуск, удобная админ-панель. Идеально для блогов, визиток, SPA и небольших каталогов",
            priceCurrency: priceCurrency,
            price: 219
        }, {
            name: "Создание и поддержка сайтов на 1С-Битрикс",
            description: "Надежное решение для интернет-магазинов и корпоративных порталов",
            priceCurrency: priceCurrency,
            price: 449
        }, {
            name: "Разработка и поддержка веб-приложений на Laravel",
            description: "Кастомная разработка сервисов, CRM-систем и высоконагруженных проектов",
            priceCurrency: priceCurrency,
            price: 1533
        }, {
            name: "Разработка и поддержка сайтов на Next.js (React)",
            description: "Современные, сверхбыстрые SPA и SSR приложения с отличным SEO-потенциалом и уверенным кешированием",
            priceCurrency: priceCurrency,
            price: 1533
        }
    ];


    const JSONSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": process.env.NEXT_PUBLIC_APP_NAME,
                "url": process.env.NEXT_PUBLIC_SITE_URL,
                "logo": process.env.NEXT_PUBLIC_SITE_URL + 'images/logo_dark.svg',
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "anikeev.nicolas@yandex.by",
                    "contactType": "customer service",
                    "availableLanguage": ["Russian", "English"]
                }
            },
            {
                "@type": "Product",
                "name": "Разработка сайтов под ключ",
                "image": process.env.NEXT_PUBLIC_SITE_URL + 'images/logo_dark.svg',
                "description": "Создание сайтов на Wordpress, Laravel, React, Nextjs.",
                "brand": {
                    "@id": process.env.NEXT_PUBLIC_SITE_URL
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": priceCurrency,
                    "lowPrice": offers.reduce((acum, el) => el.price < acum.price ? el : acum, offers[0]).price,
                    "highPrice": offers.reduce((acum, el) => el.price > acum.price ? el : acum, offers[0]).price,

                    "offerCount": "4",
                    "offers": offers.map(el => ({
                        "@type": "Offer",
                        name: el.name,
                        description: el.description,
                        priceCurrency: el.priceCurrency,
                        price: el.price,
                        availability: "https://schema.org",
                        url: process.env.NEXT_PUBLIC_SITE_URL
                    }))
                }
            },
            {
                "@type": "HowTo",
                "name": "Этапы создания сайта",
                "description": "Пошаговый процесс разработки веб-проекта от идеи до запуска.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Оценка задач",
                        "text": "Обсуждаем цели проекта, анализируем конкурентов и составляем подробное техническое задание."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Прототипирование и Дизайн",
                        "text": "Принимаем решение об используемых технологиях и дизайнерской состовляющей."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Верстка и Программирование",
                        "text": "Переносим дизайн в код, настраиваем CMS/фреймворк и настраиваем необходимый функционал. Пока разработчики делают продукт, можно посмотреть за ходом выполнения по задачам в CRM системе (Битрикс 24). Окончательными работами этого этапа является тестирование."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Сдача и поддержка проекта",
                        "text": "Вам передают работающий сайт. Если будут выявлены ошибки или нарушения, мы их исправляем. Мелкие правки можем внести в течении 2-х недель после сдачи проекта. О доработках договариваться отдельно, за них оплата по часам.В случае разработки на Next.js, мы обновляем пакеты от критических уязвимостей в течении 2-х лет (У таких проектов своя специфика работы)."
                    }
                ]
            }
        ]
    };


    return (
        <script
            type="application/ld+json"
        >
            {JSON.stringify(JSONSchema)}
        </script>
    )
}