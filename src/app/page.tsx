"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SNAKE_SIZE = 10;
const FOOD_SIZE = 10;
const CANVAS_SIZE = 400;
const INIT_SIZE = 5; // Initial snake size
const INIT_POSITION = Array.from({ length: INIT_SIZE }, (_, i) => ({
	x: CANVAS_SIZE / 4 - i * SNAKE_SIZE,
	y: CANVAS_SIZE / 4,
}));
const SPEED = 10; // Adjust this for smoother/faster movement

const getRandomPosition = () => ({
	x: Math.floor((Math.random() * CANVAS_SIZE) / SNAKE_SIZE) * SNAKE_SIZE,
	y: Math.floor((Math.random() * CANVAS_SIZE) / SNAKE_SIZE) * SNAKE_SIZE,
});

export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [snake, setSnake] = useState(INIT_POSITION);
	const [food, setFood] = useState(getRandomPosition());
	const [direction, setDirection] = useState({ x: 1, y: 0 });
	const [isGameOver, setIsGameOver] = useState(false);
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [points, setPoints] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const handleKeyPress = (e: KeyboardEvent) => {
		switch (e.key) {
			case "ArrowUp":
				if (direction.y !== 1) setDirection({ x: 0, y: -1 });
				break;
			case "ArrowDown":
				if (direction.y !== -1) setDirection({ x: 0, y: 1 });
				break;
			case "ArrowLeft":
				if (direction.x !== 1) setDirection({ x: -1, y: 0 });
				break;
			case "ArrowRight":
				if (direction.x !== -1) setDirection({ x: 1, y: 0 });
				break;
		}
	};

	const moveSnake = () => {
		const newSnake = [...snake];
		const head = {
			x: snake[0].x + direction.x * SNAKE_SIZE,
			y: snake[0].y + direction.y * SNAKE_SIZE,
		};
		newSnake.unshift(head);

		// Check for collision with food
		if (head.x === food.x && head.y === food.y) {
			setFood(getRandomPosition());
			setPoints(points + 1);
			if (points + 1 > highScore) {
				setHighScore(points + 1);
			}
		} else {
			newSnake.pop();
		}

		// Check for collision with walls or itself
		if (
			head.x < 0 ||
			head.y < 0 ||
			head.x >= CANVAS_SIZE ||
			head.y >= CANVAS_SIZE ||
			newSnake
				.slice(1)
				.some((segment) => segment.x === head.x && segment.y === head.y)
		) {
			setIsGameOver(true);
			setIsGameStarted(false);
		} else {
			setSnake(newSnake);
		}
	};

	const startGame = () => {
		setSnake(INIT_POSITION);
		setFood(getRandomPosition());
		setDirection({ x: 1, y: 0 });
		setPoints(0);
		setIsGameOver(false);
		setIsGameStarted(true);
	};

	const restartGame = () => {
		startGame();
	};

	useEffect(() => {
		let intervalId: NodeJS.Timeout;
		if (isGameStarted && !isGameOver) {
			intervalId = setInterval(moveSnake, 1000 / SPEED);
		}
		return () => clearInterval(intervalId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [snake, direction, isGameStarted, isGameOver]);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [direction]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const ctx = canvas.getContext("2d");
			if (ctx) {
				ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

				// Draw the snake
				snake.forEach((segment, index) => {
					const opacity = 1 - index / snake.length;
					ctx.fillStyle = `rgba(121, 166, 23, ${opacity})`;
					ctx.fillRect(segment.x, segment.y, SNAKE_SIZE, SNAKE_SIZE);
				});

				// Draw the food as a stack of three circles with different sizes
				const baseRadius = FOOD_SIZE / 2;
				const centerX = food.x + baseRadius;
				const centerY = food.y + baseRadius;

				const circles = [
					{ radius: baseRadius, opacity: 1 },
					{ radius: baseRadius * 1.6, opacity: 0.5 },
					{ radius: baseRadius * 2.2, opacity: 0.25 },
				];

				circles.forEach((circle, index) => {
					ctx.beginPath();
					ctx.arc(centerX, centerY, circle.radius, 0, 2 * Math.PI);
					ctx.fillStyle = `rgba(121, 166, 23, ${circle.opacity})`;
					ctx.fill();
				});
			}
		}
	}, [snake, food]);

	return (
		<div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 bg-background h-screen">
			<div className="w-full absolute h-10 bg-primary flex items-center justify-center text-white">
				Site is under construction
			</div>
			<div className="px-5 lg:pl-20 pt-20 lg:pt-40 space-y-5">
				<p className="text-primary">Hello there, I&apos;m</p>
				<h1 className="text-3xl lg:text-7xl font-bold mb-4 text-foreground">
					Feyz Ibrahim.
				</h1>
				<h1 className="text-3xl lg:text-6xl font-bold mb-4 text-foreground-secondary">
					Software Engineer
				</h1>
				<h3>
					I&apos;m a software engineer specializing in building (and designing)
					exceptional web, server and mobile apps. Currently, I&apos;m focused
					on building advanced, medical-centered products at{" "}
					<Link
						className="text-primary hover:underline"
						href="https://www.basys.ai/"
						target="_blank"
					>
						basys.ai
					</Link>
					.
				</h3>
				<p className="text-foreground-secondary">
					Checkout old{" "}
					<Link
						className="text-primary hover:underline"
						href="https://v1-feyz-ibrahim.vercel.app/"
						target="_blank"
					>
						website
					</Link>{" "}
					for more info.
				</p>
			</div>
			<div className="h-full lg:flex items-center justify-center hidden">
				<div>
					<p className="text-center mb-1">
						While you wait, enjoy this snake game!
					</p>
					<p className="text-xs mb-2 text-center text-foreground-secondary">
						(Use arrows)
					</p>

					<div className="bg-background-secondary rounded-lg relative w-fit">
						<canvas
							ref={canvasRef}
							width={CANVAS_SIZE}
							height={CANVAS_SIZE}
						/>
						<div className="absolute inset-0 flex flex-col items-center justify-center">
							{!isGameStarted && !isGameOver && (
								<button
									onClick={startGame}
									className="bg-background text-foreground px-4 py-2 rounded mb-4"
								>
									Start Game
								</button>
							)}
							{isGameOver && (
								<>
									<h2 className="text-red-500 mb-4">Game Over!</h2>
									<button
										onClick={restartGame}
										className="bg-background text-foreground px-4 py-2 rounded"
									>
										Restart Game
									</button>
								</>
							)}
						</div>
					</div>

					<div className="flex justify-between w-64 mt-4">
						<div>Points: {points}</div>
						<div>High Score: {highScore}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
