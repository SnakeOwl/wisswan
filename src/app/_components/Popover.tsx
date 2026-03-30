import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Button from './buttons/Button';

export const Popover = ({
    label,
    children,
    TriggerClassName = '',
    PopoverClassName = 'w-48 p-1'
}: {
    label: React.ReactNode,
    children: React.ReactNode
    TriggerClassName?: string
    PopoverClassName?: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    // Теперь по умолчанию true (сверху)
    const [isTop, setIsTop] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);


    useLayoutEffect(() => {
        if (isOpen && popoverRef.current && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const popoverHeight = popoverRef.current.offsetHeight;

            const spaceAbove = rect.top; // Расстояние от верха кнопки до края экрана
            const spaceBelow = window.innerHeight - rect.bottom;

            // Если сверху места меньше, чем высота облачка + запас, 
            // И при этом снизу места больше, чем сверху — прыгаем вниз
            if (spaceAbove < popoverHeight + 20 && spaceBelow > spaceAbove) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        }
    }, [isOpen]);

    // Закрытие по нажатию Esc
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);


    return (
        <div className="relative inline-block" ref={containerRef}>
            <Button
                className={TriggerClassName}
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}
            </Button>

            {isOpen && (
                <div
                    ref={popoverRef}
                    className={`
                        absolute left-1/2 -translate-x-1/2 z-50
                        border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 rounded-md
                        ${isTop ? 'bottom-full mb-2' : 'top-full mt-2'}
                    `}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
