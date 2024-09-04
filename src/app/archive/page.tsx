import { ExternalLink, Figma, Github, HardDrive } from "lucide-react";
import Link from "next/link";

export default function Archive() {
	const projects = [
		{
			id: 1,
			year: "2024",
			title: "Recurring",
			made_at: "Brototype",
			built_with: "Next, Node, Mongodb, Ts, Microservice, Clean Architecture",
			link: "https://recurring.site/",
			github: "https://github.com/feyzibrahim/recurring",
			figma: "https://www.figma.com/community/file/1327219082669006024/recurring-saas-company-management-system",
		},
		{
			id: 2,
			year: "2024",
			title: "Weather App",
			made_at: "Brototype",
			built_with: "Vue",
			link: "https://weather-app-vue-8j3s.onrender.com/",
			github: "https://github.com/feyzibrahim/weather-app-vue",
		},
		{
			id: 3,
			year: "2023",
			title: "Accounts Manager",
			made_at: "-",
			built_with: "Electron, Js, SQLite",
			github: "https://github.com/feyzibrahim/accounts-manager",
		},
		{
			id: 4,
			year: "2023",
			title: "Audio Troll App",
			made_at: "-",
			built_with: "Flutter",
			github: "https://github.com/feyzibrahim/flutter_audio_app",
		},
		{
			id: 5,
			year: "2023",
			title: "Book Share Hub",
			made_at: "-",
			built_with: "React, Node, MongoDB, Js, TailwindCSS, Redux",
			link: "https://exiphones.shop/",
			github: "https://github.com/feyzibrahim/ex-iphone",
			figma: "https://www.figma.com/community/file/1288476919033677670/ex-iphone-e-commerce-website-template",
		},
		{
			id: 6,
			year: "2023",
			title: "Business Manager",
			made_at: "-",
			built_with: "Flutter, Dart, Firebase",
			github: "https://github.com/feyzibrahim/flutter_business_manager",
		},
		{
			id: 7,
			year: "2023",
			title: "DiSign",
			made_at: "-",
			built_with: "Flutter, Dart, Firebase",
			github: "https://github.com/feyzibrahim/kotlin_DiSign",
		},
		{
			id: 8,
			year: "2023",
			title: "Enlarge Text",
			made_at: "-",
			built_with: "Flutter",
			github: "https://github.com/feyzibrahim/kotlin_EnlargeText",
		},
		{
			id: 9,
			year: "2023",
			title: "ex.iphones",
			made_at: "Brototype",
			built_with: "React, Node, MongoDB, Js, TailwindCSS, Redux",
			github: "https://github.com/feyzibrahim/book-share-hub",
		},
		{
			id: 10,
			year: "2023",
			title: "FundFolio Clone",
			made_at: "Brototype",
			built_with: "HTML, CSS",
			link: "https://feyzibrahim.github.io/brototype-week1-task2-fundfolio/",
			github: "https://github.com/feyzibrahim/brototype-week1-task2-fundfolio",
		},
		{
			id: 11,
			year: "2023",
			title: "Netflix Clone",
			made_at: "Brototype",
			built_with: "React, TMDB Api",
			link: "https://brototype-neftlix-clone.onrender.com/",
			github: "https://github.com/feyzibrahim/brototype-week12-netflix",
		},
		{
			id: 12,
			year: "2023",
			title: "OLX Clone",
			made_at: "Brototype",
			built_with: "React",
			link: "https://brototype-olx-clone.onrender.com/",
			github: "https://github.com/feyzibrahim/brototype-week12-olx",
		},
		{
			id: 13,
			year: "2023",
			title: "Password Manager",
			made_at: "-",
			built_with: "Flutter, Dart, SQLite",
			github: "https://github.com/feyzibrahim/flutter_password_manager",
		},
		{
			id: 14,
			year: "2023",
			title: "Project Parallel",
			made_at: "-",
			built_with: "React Native, Node, MongoDB, Js, TailwindCSS, Redux",
			github: "https://github.com/feyzibrahim/project-parallel",
		},
		{
			id: 15,
			year: "2023",
			title: "Recurring Clone",
			made_at: "Brototype",
			built_with: "HTML, CSS",
			link: "https://feyzibrahim.github.io/brototype-week1-task1-recurring/",
			github: "https://github.com/feyzibrahim/brototype-week1-task1-recurring",
		},
		{
			id: 16,
			year: "2023",
			title: "Simple Note",
			made_at: "Brototype",
			built_with: "HTML, CSS",
			github: "https://github.com/feyzibrahim/brototype-week2-task1-simplenote",
		},
		{
			id: 17,
			year: "2023",
			title: "Square Launcher",
			made_at: "-",
			built_with: "Flutter",
			github: "https://github.com/feyzibrahim/flutter_square_launcher",
		},
		{
			id: 18,
			year: "2023",
			title: "Todo App",
			made_at: "Brototype",
			built_with: "React, TailwindCSS, Js",
			link: "https://feyzibrahim.github.io/brototype-week11-todo-app/",
			github: "https://github.com/feyzibrahim/brototype-week11-todo-app",
		},
		{
			id: 19,
			year: "2023",
			title: "e-campus",
			made_at: "Lissah College, Kaithapoyil",
			built_with: "React, Node, MongoDB, Express",
			link: "https://ecampus.onrender.com/",
			github: "https://github.com/feyzibrahim/cms-project",
		},
		{
			id: 20,
			year: "2022",
			title: "Infinite Run",
			made_at: "-",
			built_with: "C#, Unity, Blender",
			link: "https://play.google.com/store/apps/details?id=com.FeyzIbrahim.InifiniteRun",
		},
		{
			id: 21,
			year: "2022",
			title: "Pro Rider",
			made_at: "-",
			built_with: "C#, Unity",
			link: "https://play.google.com/store/apps/details?id=com.feyzibrahim.theprorider",
		},
		{
			id: 22,
			year: "2021",
			title: "Space Travel",
			made_at: "-",
			built_with: "C#, Unity",
			link: "https://feyz-ibrahim.itch.io/space-travel",
		},
	];

	return (
		<div className="px-5 lg:px-32 pt-40">
			<h1 className="text-7xl font-bold mb-5">Archive</h1>
			<p className="text-primary">A big list of things I&apos;ve worked on</p>

			<div className="py-14 overflow-x-auto text-nowrap">
				<table className="table-auto w-full">
					<thead>
						<tr>
							<th className="text-left p-3">Year</th>
							<th className="text-left p-3">Title</th>
							<th className="text-left p-3">Made at</th>
							<th className="text-left p-3">Built With</th>
							<th className="text-left p-3">Link</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project) => (
							<tr
								key={project.id}
								className="hover:bg-background-secondary hover:rounded"
							>
								<td className="p-3">{project.year}</td>
								<td className="p-3">{project.title}</td>
								<td className="p-3 text-foreground-secondary">
									{project.made_at}
								</td>
								<td className="p-3 text-xs text-foreground-secondary">
									{project.built_with}
								</td>
								<td className="p-3 flex gap-2">
									{project.link && (
										<Link target="_blank" href={project.link}>
											<ExternalLink className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
										</Link>
									)}
									{project.github && (
										<Link target="_blank" href={project.github}>
											<Github className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
										</Link>
									)}
									{project.figma && (
										<Link target="_blank" href={project.figma}>
											<Figma className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
										</Link>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
