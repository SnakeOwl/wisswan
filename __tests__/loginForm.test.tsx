import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginFormWrapper from '@/app/(guest)/login/_components/LoginFormWrapper';



vi.mock('@/app/(guest)/login/_requests/loginRequest', () => ({
    __esModule: true,
    default: vi.fn(async () => {
        // Возвращаем ровно то, что ожидает твой useEffect (success: true)
        return { success: true };
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
    render(<LoginFormWrapper />);
    const user = userEvent.setup()
    // ==== DEBUG ====
    // screen.debug() // Выведет весь DOM компонента
    // console.log('компонент:', document.body.textContent) // Проверим, есть ли вообще какой-то контент
    // ---- DEBUG ----


    // Заполняем email
    const testEmail = 'test@ggmail.com';

    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    await user.type(emailInput, testEmail);

    // Проверяем значение через свойство value
    expect(emailInput.value).toBe(testEmail);

    // Отправляем форму
    const continueButton = screen.getByRole('button', { name: /Выслать код/i });
    await user.click(continueButton);


    // Проверяем второй этап
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBe(5); // 5 инпутов для кода
});