"use client";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SNAKE_SIZE = 10;
const FOOD_SIZE = 10;
const CANVAS_WIDTH = 200; // New canvas width
const CANVAS_HEIGHT = 320; // New canvas height
const INIT_SIZE = 5; // Initial snake size
const INIT_POSITION = Array.from({ length: INIT_SIZE }, (_, i) => ({
	x: CANVAS_WIDTH / 4 - i * SNAKE_SIZE,
	y: CANVAS_HEIGHT / 4,
}));
const SPEED = 10; // Adjust this for smoother/faster movement

const getRandomPosition = () => ({
	x: Math.floor((Math.random() * CANVAS_WIDTH) / SNAKE_SIZE) * SNAKE_SIZE,
	y: Math.floor((Math.random() * CANVAS_HEIGHT) / SNAKE_SIZE) * SNAKE_SIZE,
});

export default function SnakeGame() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [snake, setSnake] = useState(INIT_POSITION);
	const [food, setFood] = useState(getRandomPosition());
	const [direction, setDirection] = useState({ x: 1, y: 0 });
	const [isGameOver, setIsGameOver] = useState(false);
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [points, setPoints] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const handleKeyPress = (e: KeyboardEvent) => {
		if (
			isGameStarted &&
			["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
		) {
			e.preventDefault();
		}

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
			head.x >= CANVAS_WIDTH ||
			head.y >= CANVAS_HEIGHT ||
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
				ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

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
		<div className="w-full">
			<div className="p-5 rounded-lg w-full flex gap-5 neumorphism">
				<div className="rounded-md w-fit relative neumorphism">
					<canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
					<div className="absolute inset-0 flex flex-col items-center justify-end">
						{!isGameStarted && !isGameOver && (
							<button
								onClick={startGame}
								className="text-foreground px-4 py-2 rounded mb-4 neumorphism"
							>
								Play
							</button>
						)}
						{isGameOver && (
							<>
								<p className="text-red-500 mb-4">Game Over!</p>
								<button
									onClick={restartGame}
									className="text-foreground px-4 py-2 rounded neumorphism mb-4"
								>
									Restart Game
								</button>
							</>
						)}
					</div>
				</div>
				<div className="text-xs w-full space-y-5">
					<div className="bg-background p-3 rounded-md neumorphism">
						<h2>{`// Use keyboard `}</h2>
						<h2>{`// arrows to play`}</h2>
						<div className="flex flex-col gap-2 items-center pt-5">
							<div className="bg-black px-3 py-1 rounded-md">
								<ArrowUp className="w-3 h-5" />
							</div>
							<div className="flex gap-2">
								<div className="bg-black px-3 py-1 rounded-md">
									<ArrowLeft className="w-3 h-5" />
								</div>
								<div className="bg-black px-3 py-1 rounded-md">
									<ArrowDown className="w-3 h-5" />
								</div>
								<div className="bg-black px-3 py-1 rounded-md">
									<ArrowRight className="w-3 h-5" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<p className="text-foreground mb-4">Score: {points}</p>
						<p>High Score: {highScore}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
