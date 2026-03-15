import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HackForm from '@/app/(auth)/dashboard/hacks/_components/HackForm';
import '@testing-library/jest-dom/vitest'



// editorjs использует эти свойсва для проверки цвета тем.
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Устаревший метод
        removeListener: vi.fn(), // Устаревший метод
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});


vi.mock('@/libs/Fetch', () => ({
    // Оставляем оригинальные Get и Post, если они нужны, или мокаем всё
    Get: vi.fn(() => Promise.resolve([])),
    Post: vi.fn(() => Promise.resolve({ bounded: [], new_domains: [] })),

    // Мокаем именно ту функцию Fetch, которая нужна компоненту
    Fetch: vi.fn((url: string) => {
        if (url === 'feed/domains') {
            return Promise.resolve([
                { id: 1, name: "PHP", published: true },
                { id: 2, name: "C++", published: true }
            ]);
        }
        return Promise.resolve([]);
    }),
}));


// В тестовой среде нету роутера next/navigation
// Мокаем навигацию Next.js
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}));



test('Компонент: Тестирование переходов этапов логина.', async () => {
    const { container } = render(<HackForm />);

    const user = userEvent.setup()

    // ==== DEBUG ====
    // screen.debug() // Выведет весь DOM компонента
    // console.log('компонент:', document.body.textContent) // Проверим, есть ли вообще какой-то контент
    // ---- DEBUG ----

    // Заполнение заголовка формы
    const titleText = "Заголовок нового хака";
    const titleInput = screen.getByLabelText(/Заголовок/i) as HTMLTextAreaElement;
    await user.type(titleInput, titleText);
    expect(titleInput.value).toBe(titleText);



    const containerBlock = container.querySelector('#DomainSelector_domains_container');
    // попытка добавить свой домен из инпута. НЕАВТОРИЗИРОВАННО
    const newDomainPureInput = container.querySelector('#DomainSelector_domains_pure_input') as HTMLInputElement;
    const newDomainText = "Новый домен";
    await user.type(newDomainPureInput, newDomainText);

    expect(containerBlock).toBeInTheDocument();
    expect(newDomainPureInput.value).toBe(newDomainText);

    // ==== галочка появляется только когда в input есть текст
    const checkButton = container.querySelector('#DomainSelector_domains_pure_input_button');
    expect(checkButton).toBeInTheDocument();
    await user.click(checkButton!);

    // 1. Проверяем, что инпут очистился (как в коде: setInputText(''))
    expect(newDomainPureInput.value).toBe('');

    // 2. Ищем новую кнопку внутри контейнера по тексту
    // Используем findByText, так как обновление стейта асинхронно
    const addedDomainButton = await screen.findByText(newDomainText);

    // 3. Убеждаемся, что она находится именно внутри нужного контейнера
    expect(containerBlock).toContainElement(addedDomainButton);

    // 4. (Опционально) Проверяем, что галочка исчезла
    expect(container.querySelector('#DomainSelector_domains_pure_input_button')).not.toBeInTheDocument();


    // ==== попытка добавить свой домен из предоставленных доменов. НЕАВТОРИЗИРОВАННО
    // 1. Находим оба контейнера
    const matchesContainer = container.querySelector('#DomainSelector_domains_matches_container');

    // 2. Находим первую доступную кнопку в списке совпадений
    // (Предположим, там есть хотя бы один домен из initialMatches)
    const firstMatchButton = matchesContainer?.querySelector('button');
    const domainName = firstMatchButton?.textContent;

    if (!firstMatchButton || !domainName) {
        throw new Error('Кнопки в контейнере совпадений не найдены');
    }

    // 3. Кликаем по ней
    await user.click(firstMatchButton);

    // 4. Проверяем, что кнопка с этим текстом появилась в основном контейнере
    // Используем findByText, так как обновление списка — асинхронное событие в React
    const addedButton = await screen.findByText(domainName);

    // 5. Убеждаемся, что она именно внутри DomainSelector_domains_container
    expect(containerBlock).toContainElement(addedButton);
});