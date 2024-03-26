import { useEffect, useRef } from 'react';
import style from './BubblesEffect.module.css'


export const BubblesEffect = ({ bannerRect }) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const CANVAS_WIDTH = bannerRect.width;
        const CANVAS_HEIGHT = bannerRect.height;
        const MIN = 0;
        const MAX = CANVAS_WIDTH;
        const ctx = canvasRef.current.getContext('2d');

        canvasRef.current.width = CANVAS_WIDTH;
        canvasRef.current.height = CANVAS_HEIGHT;

        function clamp(number, min = MIN, max = MAX) {
            return Math.max(min, Math.min(number, max));
        }

        function random(factor) {
            return clamp(Math.floor(Math.random() * factor));
        }

        function degreeToRadian(deg) {
            return deg * (Math.PI / 180);
        }

        class Circle {
            xi = CANVAS_WIDTH / 2;
            yi = CANVAS_HEIGHT / 2;
            x = CANVAS_WIDTH / 2;
            y = CANVAS_HEIGHT / 2;
            width = 10;
            r = random(CANVAS_WIDTH);
            deg = 0;
            bgColor = randomColor();

            constructor() {
                this.deg = clamp(Math.floor(Math.random() * 360));
            }

            draw() {
                ctx.beginPath();
                ctx.fillStyle = this.bgColor;
                ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        let circles = [];

        for (let i = 0; i < 50; i++) {
            circles.push(new Circle());
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }

        function animate() {
            clearCanvas();

            circles.forEach((e) => {
                if (
                    e.x <= 0 ||
                    e.x >= CANVAS_WIDTH ||
                    e.y <= 0 ||
                    e.y >= CANVAS_HEIGHT
                ) {
                    e.xi = e.x > CANVAS_WIDTH / 2 ? e.x - 1 : e.x + 1;
                    e.yi = e.y > CANVAS_HEIGHT / 2 ? e.y - 1 : e.y + 1;
                    e.x = 0;
                    e.y = 0;
                    e.deg = (e.deg + 60) % 360;
                    e.r = 0;
                }

                e.x = e.xi + e.r * Math.cos(degreeToRadian(e.deg));
                e.y = e.yi + e.r * Math.sin(degreeToRadian(e.deg));
                e.r = e.r + 1;
                e.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

    }, [bannerRect]);

    const randomColor = () => {
        const colors = ['rgba(255, 45, 45, 0.3)', 'rgba(0, 0, 0, 0.3)', 'rgba(155, 155, 155, 0.3)']; // Red and Black
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <canvas ref={canvasRef} className={style.canvas}></canvas>
    );
}