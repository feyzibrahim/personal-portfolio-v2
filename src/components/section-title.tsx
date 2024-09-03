interface Props {
	title: string;
}

export default function SectionTitle({ title }: Props) {
	return (
		<div className="flex items-center gap-2 py-10">
			<h1 className="text-3xl font-bold text-nowrap">
				<span className="text-primary">#</span>
				{title}
			</h1>
			<div className="w-full lg:w-1/2 h-[1px] bg-primary"></div>
		</div>
	);
}
