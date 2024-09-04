import { ExternalLink, File, Folder, Github } from "lucide-react";
import Link from "next/link";

export default function OtherNoteworthyProjects() {
	const noteWorthyProjects = [
		{
			id: 1,
			name: "Bloggger.com",
			description:
				"For the week 9 task at Brocamp, I developed a MERN stack application. This project provided valuable insights into MERN stack development, with database management being the most challenging aspect. Despite the difficulties, I successfully completed the project within one week and also implemented Redux Toolkit.",
			stack: ["React", "Node", "MongoDB", "Express", "Redux"],
			link: "",
			github: "https://github.com/feyzibrahim/brototype-week3-mern-login-frontend",
		},
		{
			id: 2,
			name: "React Todo App",
			description:
				"For the 11th task at Brocamp, I developed a todo app using React, inspired by Figma. The project features a sleek design, and I take pride in the visual appeal of the todo list.",
			stack: ["React", "TailwindCSS"],
			link: "https://feyzibrahim.github.io/brototype-week11-todo-app/",
			github: "https://github.com/feyzibrahim/brototype-week11-todo-app",
		},
		{
			id: 3,
			name: "Netflix Clone",
			description:
				"For the 12th task at Brocamp, I created a Netflix clone using React. The application dynamically loads films by integrating with the TMDB API.",
			stack: ["React", "TailwindCSS", "TMDB Api"],
			link: "https://brototype-neftlix-clone.onrender.com/",
			github: "https://github.com/feyzibrahim/brototype-week12-netflix",
		},
		{
			id: 4,
			name: "OLX Clone",
			description:
				"For the 12th task at Brocamp, I built an OLX clone using React. The application dynamically loads products by integrating with the FakeStoreAPI.",
			stack: ["React", "TailwindCSS", "FakeStoreAPI"],
			link: "https://brototype-olx-clone.onrender.com/",
			github: "https://github.com/feyzibrahim/brototype-week12-olx",
		},
		{
			id: 5,
			name: "Recurring Clone",
			description:
				"For the first week task at Brocamp, I created a recurring subscriptions tracker website using plain HTML and CSS. This clone, inspired by SlideBean’s initiative, is designed to manage and track all company subscriptions.",
			stack: ["HTML", "CSS"],
			link: "https://brototype-olx-clone.onrender.com/",
			github: "https://github.com/feyzibrahim/brototype-week12-olx",
		},
		{
			id: 6,
			name: "FundFolio Clone",
			description:
				"For the first week task at Brocamp, I developed a clone of Fundfolio using plain HTML and CSS. Fundfolio, a company led by Sharique Shamsudheen, is an option trading platform based in Kerala.",
			stack: ["HTML", "CSS"],
			link: "https://feyzibrahim.github.io/brototype-week1-task2-fundfolio/",
			github: "https://github.com/feyzibrahim/brototype-week1-task2-fundfolio",
		},
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-12">
			{noteWorthyProjects.map((project) => (
				<div
					key={project.id}
					className="bg-background-secondary p-7 rounded-lg flex flex-col justify-between"
				>
					<div>
						<div className="flex justify-between mb-5">
							<Folder className="w-8 h-8 text-primary" />
							<div className="flex gap-3">
								<Link target="_blank" href={project.link}>
									<ExternalLink className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
								</Link>
								<Link target="_blank" href={project.github}>
									<Github className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
								</Link>
							</div>
						</div>
						<Link target="_blank" href={project.link}>
							<h2 className="text-xl font-bold hover:text-primary duration-300 pb-2">
								{project.name}
							</h2>
						</Link>
						<div>
							<p className="text-sm text-foreground-secondary">
								{project.description}
							</p>
						</div>
					</div>
					<div className="flex flex-wrap lg:flex-nowrap gap-5 text-xs pt-5">
						{project.stack.map((tech, index) => (
							<p key={index} className="text-foreground-secondary">
								{tech}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
