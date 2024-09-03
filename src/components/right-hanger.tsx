import Link from "next/link";

export default function RightHanger() {
	return (
		<div className="fixed -right-5 bottom-0 hidden lg:flex flex-col-reverse items-center gap-5">
			<div className="h-56 w-[1px] bg-foreground-secondary"></div>
			<Link target="_blank" href="mailto:faizashrafkk@gmail.com">
				<p className="rotate-90 -translate-y-14 text-xs text-foreground-secondary hover:text-primary hover:-translate-y-16 duration-300">
					faizashrafkk@gmail.com
				</p>
			</Link>
		</div>
	);
}
