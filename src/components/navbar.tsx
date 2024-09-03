import { AlignJustify } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="w-full absolute px-5 lg:px-32 py-5 flex justify-between">
			<div className="flex items-center">
				<Image src="/logo.png" alt="logo" width={25} height={25} />
				<p>Feyz Ibrahim</p>
			</div>
			<div className="hidden lg:flex gap-5 text-sm">
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<span className="text-primary">#</span>about-me
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<span className="text-primary">#</span>experience
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<span className="text-primary">#</span>projects
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<span className="text-primary">#</span>contacts
				</p>
			</div>
			<div className="lg:hidden">
				<AlignJustify />
			</div>
		</nav>
	);
}
