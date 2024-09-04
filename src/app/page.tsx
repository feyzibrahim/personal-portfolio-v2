import ExperienceSwitch from "@/components/experience-switch";
import FeaturedProjects from "@/components/featured-projects";
import LeftHanger from "@/components/left-hanger";
import Navbar from "@/components/navbar";
import OtherNoteworthyProjects from "@/components/other-noteworthy-projects";
import RightHanger from "@/components/right-hanger";
import SectionTitle from "@/components/section-title";
import SnakeGame from "@/components/snake-game";
import { Settings } from "lucide-react";
import Image from "next/image";
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

			{/* Landing Section */}
			<div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-5 bg-background lg:h-screen px-5 lg:px-32">
				<div className="lg:space-y-5 flex flex-col pt-20 lg:pt-0 lg:justify-center col-span-3">
					<p className="text-primary">Hello there, I&apos;m</p>
					<h1 className="text-3xl lg:text-7xl font-bold mb-4 text-foreground">
						Feyz Ibrahim.
					</h1>
					<h1 className="text-3xl lg:text-6xl font-bold mb-4 text-foreground-secondary">
						Software Engineer.
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
				<div className="h-full lg:flex items-center justify-center hidden  col-span-2">
					<SnakeGame />
				</div>
			</div>

			{/* Quote Section */}
			<div className="flex flex-col gap-2 items-center py-10 px-5">
				<div className="relative w-fit border-2 border-primary px-10 py-3">
					<p className="text-4xl absolute -top-3 left-5 bg-background">
						<span className="text-4xl">&quot;</span>
					</p>
					<p>With great power comes great electricity bill</p>
					<p className="text-4xl absolute -bottom-7 right-5 bg-background">
						<span className="text-4xl">&quot;</span>
					</p>
				</div>
				<p>- Sun Tzu</p>
			</div>

			{/* About Me */}
			<div className="lg:h-screen px-5 lg:px-32 ">
				<SectionTitle title="About Me" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="space-y-5">
						<p>
							I am a dedicated Full Stack Developer with a strong foundation
							in building dynamic and responsive web applications. My
							expertise spans the MERN stack, and I am passionate about
							creating intuitive user experiences and efficient backend
							solutions.
						</p>
						<p>
							In addition to my work in web development, I have a deep
							interest in game development, where I explore creative ideas
							using the Unity engine. This hobby allows me to blend my
							technical skills with my creative side, and I also share my
							journey and insights through video content on{" "}
							<Link
								href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
								className="text-primary"
								target="_blank"
							>
								YouTube
							</Link>
							.
						</p>
						<p>
							Currently, I work as a Software Engineer at{" "}
							<Link
								href="https://basys.ai"
								target="_blank"
								className="text-primary"
							>
								basys.ai
							</Link>
							, where I contribute to cutting-edge projects that make a real
							impact. While I am not actively seeking new job opportunities,
							I am always open to connecting with like-minded professionals
							and exploring potential collaborations.
						</p>
						<p>
							Feel free to explore my projects in the Portfolio section, and
							don&apos;t hesitate to reach out if you have any opportunities
							or collaborations in mind.
						</p>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src="/feyze-pic.jpeg"
							alt="My Picture"
							width={756}
							height={847}
							className="w-2/3 rounded-md hover:-translate-y-2 duration-300"
						/>
					</div>
				</div>
			</div>

			{/* Experience */}
			<div className="lg:h-screen px-5 lg:px-32 pt-16">
				<SectionTitle title="Experience" isCenter />
				<ExperienceSwitch />
			</div>

			{/* Featured Projects */}
			<div className="px-5 lg:px-40">
				<SectionTitle title="Projects" />
				<FeaturedProjects />
			</div>

			{/* Other Noteworthy Projects */}
			<div className="px-5 lg:px-40 pb-20">
				<SectionTitle title="Other Noteworthy Projects" isCenter />
				<Link href="/archive">
					<p className="text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300 text-center -mt-5">
						view the archive
					</p>
				</Link>
				<OtherNoteworthyProjects />
			</div>
		</div>
	);
}
