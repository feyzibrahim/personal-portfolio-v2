"use client";

import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// Scroll Down
				setIsVisible(false);
			} else {
				// Scroll Up
				setIsVisible(true);
			}
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	return (
		<nav
			className={`w-full px-5 lg:px-32 py-5 flex justify-between fixed top-0 left-0 transition-transform duration-300 bg-background shadow-md z-50 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<Link href="/">
				<div className="flex items-center hover:cursor-pointer animate-fadeIn">
					<Image src="/logo.png" alt="logo" width={25} height={25} />
					<p>Feyz Ibrahim</p>
				</div>
			</Link>
			<div className="hidden lg:flex gap-5 text-sm animate-fadeIn">
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#about-me">
						<span className="text-primary">#</span>about-me
					</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#experience">
						<span className="text-primary">#</span>experience
					</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#projects">
						<span className="text-primary">#</span>projects
					</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#contact">
						<span className="text-primary">#</span>contacts
					</Link>
				</p>
			</div>
			<div className="lg:hidden">
				<AlignJustify />
			</div>
		</nav>
	);
}
