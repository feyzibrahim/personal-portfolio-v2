import LeftHanger from "@/components/left-hanger";
import Navbar from "@/components/navbar";
import RightHanger from "@/components/right-hanger";
import SnakeGame from "@/components/snake-game";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<div className="w-full h-10 bg-background-secondary flex items-center gap-2 justify-center text-white">
				<Settings className="w-4 h-4 animate-spin" />
				<p className="text-xs">Development in progress</p>
			</div>
			<Navbar />
			<LeftHanger />
			<RightHanger />

			{/* Landing Session */}
			<div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 bg-background h-screen px-5 lg:px-32">
				<div className="space-y-5 flex flex-col justify-center">
					<p className="text-primary">Hello there, I&apos;m</p>
					<h1 className="text-3xl lg:text-7xl font-bold mb-4 text-foreground">
						Feyz Ibrahim.
					</h1>
					<h1 className="text-3xl lg:text-6xl font-bold mb-4 text-foreground-secondary">
						Software Engineer
					</h1>
					<h3>
						I&apos;m a software engineer specializing in building (and
						designing) exceptional web, server and mobile apps. Currently,
						I&apos;m focused on building advanced, medical-centered products
						at{" "}
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
					<SnakeGame />
				</div>
			</div>
		</div>
	);
}
