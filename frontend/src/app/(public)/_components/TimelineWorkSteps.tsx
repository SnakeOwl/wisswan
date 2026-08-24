import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

export default function TimelineWorkSteps() {
  const data = [
    {
      title: "Этап 1",
      content: (
        <div key={1}>
          <h4>Оценка задач</h4>
          <div className="list-decimal list-inline mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <p className="mb-2">
              Обсуждаем цели проекта, анализируем конкурентов и составляем подробное техническое задание:
            </p>
            
            <ol className="list-decimal list-inline">
              <li>Составляем техзадание (хотябы на словах)</li>
              <li>Анализируем рынок конкурентов (интернет маркетинг)</li>
              <li>Создаём <Link href={'https://yandex.ru/adv/edu/materials/semanticheskoe-yadro'} className="link" target="_blank" rel="noindex noreferrer" >семантическое ядро</Link> для SEO.</li>
              <li>Используя семантическое ядро строим базовое представление о структуре сайта</li>
            </ol>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/storage/example_seo_core_1.png"
              overrideSrc="/images/storage/example_seo_core_1.png"
              alt="Скрин сайта Яндекс Вордстат"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/tehzadanie.png"
              overrideSrc="/images/storage/tehzadanie.png"
              alt="Скрин примера технического задания"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/figma.png"
              overrideSrc="/images/storage/figma.png"
              alt="Скрин примера создания логотипов в Figma"
              width={356}
              height={250}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Этап 2",
      content: (
        <div key={2}>
          <h4>Планирование разработки</h4>
          <ol className="list-decimal list-inline mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <p className="mb-2">
              Принимаем решение об используемых технологиях и дизайнерской состовляющей:
            </p>

            <li>Принимаем решение об используемых технологиях</li>
            <li>Принимаем решение над дизайнерской частью (вёрстка будет по макету или используем готовые компоненты)</li>
            <li>Определяемся с доменом и серверами</li>
          </ol>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/storage/timeline/aceternity_ui_screen.png"
              overrideSrc="/images/storage/timeline/aceternity_ui_screen.png"
              alt="Скрин сайта Aceternity UI"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/laravel_site_screen.png"
              overrideSrc="/images/storage/timeline/laravel_site_screen.png"
              alt="Скрин сайта Laravel"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/nextjs_site_screen.png"
              overrideSrc="/images/storage/timeline/nextjs_site_screen.png"
              alt="Скрин сайта Nextjs"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/npm_site_screen.png"
              overrideSrc="/images/storage/timeline/npm_site_screen.png"
              alt="Скрин сайта npm"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/shadcn_screen.png"
              overrideSrc="/images/storage/timeline/shadcn_screen.png"
              alt="Скрин сайта shadcn UI"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/tailwind_screen.png"
              overrideSrc="/images/storage/timeline/tailwind_screen.png"
              alt="Скрин сайта Tailwind"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/wordpress_site_screen.png"
              overrideSrc="/images/storage/timeline/wordpress_site_screen.png"
              alt="Скрин сайта Wordpress"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/1c_bitrix_site_screen.png"
              overrideSrc="/images/storage/timeline/1c_bitrix_site_screen.png"
              alt="Скрин сайта 1С-Битрикс"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Этап 3",
      content: (
        <div key={3}>
          <h4>Верстка и программирование</h4>
          <p className="list-decimal list-inline mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Переносим дизайн в код, настраиваем CMS/фреймворк и настраиваем необходимый функционал. Пока разработчики делают продукт, можно посмотреть за ходом выполнения по задачам в CRM системе (Битрикс 24). 
            <br />Окончательными работами этого этапа является тестирование.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/storage/timeline/SCRUM_process.png"
              overrideSrc="/images/storage/timeline/SCRUM_process.png"
              alt="Картинка SCRUM методологии"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/github_site_screen.png"
              overrideSrc="/images/storage/timeline/github_site_screen.png"
              alt="Скрин сайта github"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/kanban_screen.png"
              overrideSrc="/images/storage/timeline/kanban_screen.png"
              alt="Кандбан"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/storage/timeline/example_adaptive.png"
              overrideSrc="/images/storage/timeline/example_adaptive.png"
              alt="Процесс создания адаптивного дизайна"
              width={356}
              height={240}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }, {
      title: "Этап 4",
      content: (
        <div key={4}>
          <h4>Сдача и поддержка проекта</h4>
          <p className="list-decimal list-inline mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Вам передают работающий сайт. Мы будем бесплатно чинить сбои в работе в течении 1 года, если с ним больше никто не работал. Если будут выявлены ошибки или нарушения, мы их исправляем. Мелкие правки можем внести в течении месяца после сдачи проекта. О трудозатратных доработках договариваться отдельно, за них оплата по часам.
          </p>
        </div>
      ),
    },
  ];


  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        data={data}
        h2Label="Этапы разработки"
      />
    </div>
  );
}
