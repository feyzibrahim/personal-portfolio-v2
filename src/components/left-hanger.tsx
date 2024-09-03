import { Figma, Github, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Link from "next/link";

export default function LeftHanger() {
	return (
		<div className="fixed left-10 top-0 flex flex-col items-center gap-5">
			<div className="h-56 w-[1px] bg-foreground-secondary"></div>
			<Link target="_blank" href="https://github.com/feyzibrahim">
				<Github className="w-4 h-4 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
			</Link>
			<Link target="_blank" href="https://www.figma.com/@feyzibrahim">
				<Figma className="w-4 h-4 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
			</Link>
			<Link
				target="_blank"
				href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
			>
				<Youtube className="w-4 h-4 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
			</Link>
			<Link
				target="_blank"
				href="https://www.linkedin.com/in/feyz-ibrahim-861883194/"
			>
				<Linkedin className="w-4 h-4 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
			</Link>
			<Link target="_blank" href="https://www.instagram.com/fe_y_z_">
				<Instagram className="w-4 h-4 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
			</Link>
			<Link target="_blank" href="https://twitter.com/fe_y_z_">
				<X className="w-4 h-4 text-foreground-secondary hover:text-primary hover:-translate-y-1 duration-300" />
			</Link>
		</div>
	);
}
