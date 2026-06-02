"use client"

import ContentDividerV1 from '@/app/_components/dividers/ContentDividerV1';
import React, { useRef, useEffect } from 'react';


interface CircleProps {
    size?: number;        // Размер canvas (квадрат)
    circleColor?: string; // Цвет круга
    lineColor?: string;   // Цвет диагонали
    lineWidth?: number;   // Толщина линии диагонали
}

export default function CircleCalculator() {

    return (
        <section>
            <ContentDividerV1 className='my-4'>
                <h2 className="text-2xl">Калькулятор</h2>
            </ContentDividerV1>

            <InteractiveCircle
                size={400}
            />
        </section>
    )
}


const InteractiveCircle: React.FC<CircleProps> = ({
    size = 300,
    circleColor = '#000',
    lineColor = '#ef4444',
    lineWidth = 4,
}) => {
    // Типизируем ref для canvas элемента
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Получаем 2D контекст для рисования
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Вычисляем центр и радиус
        const center = size >> 1;
        const radius = center - 2; // Небольшой отступ от краев

        // Очищаем canvas перед каждым рендером
        ctx.clearRect(0, 0, size, size);

        // 1. Рисуем круг
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = circleColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // 2. Диагональ
        ctx.beginPath();
        ctx.moveTo(0, center);
        ctx.lineTo(size, center);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round'; // Скругленные края линии
        ctx.stroke();

        // 3. Подписываем диагональ
        let textX = center - 24; // поправка чтобы текст был по центру
        let textY = center - 10;
        ctx.font = "16px Arial";
        ctx.fillText("Диагональ", textX, textY)

    }, [size, circleColor, lineColor, lineWidth]);

    return (
        <canvas
            ref={canvasRef}
            width={size}
            height={size}
            style={{ display: 'block', margin: 'auto' }}
        />
    );
};
