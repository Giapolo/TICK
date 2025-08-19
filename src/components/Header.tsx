export default function Header() {
	return (
		<header className="py-4 px-6 flex justify-between items-center">
			<h1 className="text-xl font-bold">$TICK</h1>
			<nav className="flex gap-6 text-sm">
				<a href="#concept">Concept</a>
				<a href="#dailyflow">Daily Flow</a>
				<a href="#tokenomics">Tokenomics</a>
				<a href="#mechanics">Mechanics</a>
				<a href="#roadmap">Roadmap</a>
			</nav>
		</header>
	);
}
