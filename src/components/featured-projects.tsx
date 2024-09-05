import { ExternalLink, Figma, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
	const featuredProjects = [
		{
			id: 1,
			name: "Recurring",
			description:
				"A web application that enables companies to manage their internal operations efficiently. The front-end, built with Next.js, ensures a responsive user experience. The backend uses a Microservices architecture for scalability and flexibility. The application adheres to Clean Architecture principles, making it maintainable and adaptable to changing business needs.",
			stack: ["Microservices", "Clean Architecture", "Next", "Node", "ShadCN"],
			img: "/projects/recurring.png",
			link: "https://recurring.site/",
			github: "https://github.com/feyzibrahim/recurring",
			figma: "https://www.figma.com/community/file/1327219082669006024/recurring-saas-company-management-system?fuid=1154789768829042785",
		},
		{
			id: 2,
			name: "ex.iphones",
			description:
				"A full-fledged e-commerce web application using the MERN stack. It encompasses all key aspects of e-commerce, including payments, orders, products, and wallets. The app follows the MVC architecture for organized code structure and uses Tailwind CSS for styling. Payment integration is handled through Razorpay, and role-based authentication ensures ease of use for both admins and users.",
			stack: ["React", "Node", "MongoDB", "Redux", "TailwindCSS"],
			img: "/projects/exIphone.png",
			link: "https://exiphones.shop/",
			github: "https://github.com/feyzibrahim/ex-iphone",
			figma: "https://www.figma.com/community/file/1288476919033677670/ex-iphone-e-commerce-website-template",
		},
		{
			id: 3,
			name: "e-campus",
			description:
				"E-Campus is a MERN stack project developed as my final year college project. It enables colleges to manage their operations digitally. Additionally, I created an Android app to complement the web application, allowing students to monitor their progress seamlessly.",
			stack: ["React", "Node", "MongoDB", "Express"],
			img: "/projects/ecampus.png",
			link: "https://exiphones.shop/",
			github: "https://github.com/feyzibrahim/ex-iphone",
			figma: "https://www.figma.com/community/file/1288476919033677670/ex-iphone-e-commerce-website-template",
		},
	];

	return (
		<div className="space-y-12 lg:space-y-24 pb-24 w-full overflow-clip">
			{featuredProjects.map((project, index) => (
				<div
					key={project.id}
					className={`flex flex-col gap-3 ${
						index % 2 === 0 ? `lg:flex-row-reverse` : `lg:flex-row `
					}`}
				>
					<Image
						src={project.img}
						alt={project.name}
						width={1348}
						height={646}
						className="rounded-md col-span-2 lg:w-2/3 -z-10"
					/>
					<div
						className={`flex flex-col justify-center items-center ${
							index % 2 === 0 ? `lg:items-start` : `lg:items-end`
						} `}
					>
						<p className="text-primary text-sm">Featured Project</p>
						<Link target="_blank" href={project.link}>
							<h2 className="text-3xl font-bold hover:text-primary duration-300">
								{project.name}
							</h2>
						</Link>
						<div className="shadow-lg my-5 lg:w-[150%] right-0 bg-background-secondary p-4 rounded-md">
							{project.description}
						</div>
						<div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end gap-3 text-xs text-nowrap">
							{project.stack.map((stack, index) => (
								<p key={index}>{stack}</p>
							))}
						</div>
						<div className="mt-2 flex gap-3">
							<Link target="_blank" href={project.link}>
								<ExternalLink className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
							</Link>
							<Link target="_blank" href={project.github}>
								<Github className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
							</Link>
							<Link target="_blank" href={project.figma}>
								<Figma className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
