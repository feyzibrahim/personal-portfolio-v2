import { Figma, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="px-5 lg:px-40 border-t border-foreground-secondary pt-10">
			<div className="flex flex-col lg:flex-row gap-5 justify-between">
				<div>
					<div className="flex items-center">
						<Image src="/logo.png" alt="logo" width={25} height={25} />
						<p>Feyz Ibrahim</p>
					</div>
					<p className="text-sm text-foreground-secondary">Software Engineer</p>
				</div>
				<div className="flex justify-center gap-5">
					<Link target="_blank" href="https://github.com/feyzibrahim">
						<Github className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
					</Link>
					<Link target="_blank" href="https://www.figma.com/@feyzibrahim">
						<Figma className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
					</Link>
					<Link
						target="_blank"
						href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
					>
						<Youtube className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
					</Link>
					<Link
						target="_blank"
						href="https://www.linkedin.com/in/feyz-ibrahim-861883194/"
					>
						<Linkedin className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
					</Link>
					<Link target="_blank" href="https://www.instagram.com/fe_y_z_">
						<Instagram className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
					</Link>
					<Link target="_blank" href="https://twitter.com/fe_y_z_">
						<Twitter className="w-5 h-5 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
					</Link>
				</div>
			</div>
			<p className="text-center text-sm text-foreground-secondary py-10">
				&copy; 2024 Feyz Ibrahim. All rights reserved.
			</p>
		</footer>
	);
}
