"use client"
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Button from './buttons/Button';

export const Popover = ({
    label,
    children,
    TriggerClassName = '',
    popoverClassname = ''
}: {
    label: React.ReactNode,
    children: React.ReactNode
    TriggerClassName?: string
    popoverClassname?: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
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
                popoverRef.current.classList.remove('bottom-full', 'mb-2');
                popoverRef.current.classList.add('top-full', 'mt-2');
            } else {
                popoverRef.current.classList.remove('top-full', 'mt-2');
                popoverRef.current.classList.add('bottom-full', 'mb-2');
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
                    className={` ${popoverClassname}
                        absolute left-1/2 -translate-x-1/2 z-50
                        border border-neutral-200 rounded-md
                    `}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
