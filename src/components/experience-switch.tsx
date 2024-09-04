"use client";

import { useState } from "react";

export default function ExperienceSwitch() {
	const [activeCompany, setActiveCompany] = useState(0);

	const companies = [
		{
			id: 0,
			title: "Basys.ai",
			position: "Software Engineer",
			duration: "May 2024 - Present",
			points: [
				"Developed a web application from inception to automate the Prior Authorization System in the US.",
				"Integrated ChatGPT and Claude.AI into the project alongside an in-house AI system.",
				"Automated the process of switching between different GPT models, reducing testing time by up to 80% for the AI team.",
				"Implemented machine learning algorithms to optimize decision-making processes within the Prior Authorization System, resulting in improved accuracy and efficiency.",
				"Implemented FHIR (Fast Healthcare Interoperability Resources) standards to ensure secure and efficient exchange of healthcare information, enabling seamless integration with other healthcare systems and enhancing data interoperability within the Prior Authorization System.",
			],
		},
		{
			id: 1,
			title: "Brototype",
			position: "MERN stack developer",
			duration: "Jun 2023 - Apr 2024",
			points: [
				"Developed a full-stack e-commerce platform using MVC architecture with features like product ordering, payment integration, a wallet system, and admin controls.",
				"Implemented role-based authentication to ensure secure and personalized user access based on roles.",
				"Created a microservices-based office management application using clean architecture, simplifying tasks such as employee, project, client, and deal management.",
				"Employed advanced architecture techniques like Micro-Service and Clean Architecture to build a scalable and maintainable system for managing office operations.",
			],
		},
	];

	const getHighlighterStyle = () => {
		const basePosition = 0; // Adjust this value to match the spacing between items
		return {
			top: `${basePosition + activeCompany * 40}px`, // Adjust 40px based on item height
		};
	};

	return (
		<div className="relative flex flex-col lg:flex-row lg:w-2/3 lg:mx-auto lg:px-5">
			<div className="absolute w-[2px] bg-foreground-secondary h-20"></div>
			<div
				className="absolute w-[2px] h-10 duration-300 bg-primary"
				style={getHighlighterStyle()}
			></div>
			<div className="mb-5 lg:mb-0">
				{companies.map((company) => (
					<div
						key={company.id}
						className={`px-5 w-full lg:w-40 py-2 hover:bg-background-secondary hover:text-primary cursor-pointer duration-300 ${
							activeCompany === company.id
								? `text-primary`
								: `text-foreground-secondary`
						}`}
						onClick={() => setActiveCompany(company.id)}
					>
						{company.title}
					</div>
				))}
			</div>
			<div className="px-5 space-y-2">
				<h4 className="text-xl font-bold">
					{companies[activeCompany].position}{" "}
					<span className="text-primary">
						@ {companies[activeCompany].title}
					</span>
				</h4>
				<p className="text-foreground-secondary">
					{companies[activeCompany].duration}
				</p>
				<ul className="space-y-3 pl-5 list-disc">
					{companies[activeCompany].points.map((point, index) => (
						<li key={index} className="text-sm text-foreground-secondary">
							{point}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
