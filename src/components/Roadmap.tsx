// src/components/Roadmap.tsx
import roadmapImg from "../assets/tick_leaderboard.png";

type Phase = {
	title: string;
	items: string[];
};

const PHASES: Phase[] = [
	{
		title: "Planned",
		items: [
			"Automated bot posts at key moments (5 min / 1 min / 10 sec before explosion). [Twitter]",
			"Real-time timer alerts. [Telegram]",
			"Live-tweet winner announcements. [Twitter]",
		],
	},
	{
		title: "In Progress",
		items: [
			"Meme campaigns (“Don’t let it blow while you’re asleep!”). [Twitter]",
			"Community betting & watch parties. [Telegram]",
			"Twitch/YouTube integration for live streaming of the final seconds. [Cross-Platform]",
			"Meme contests themed around “defusing the bomb.” [Cross-Platform]",
			"Weekend events with 2 bombs/day. [Cross-Platform]",
		],
	},
	{
		title: "Exploration",
		items: [
			"NFT “Defusers” that grant advantages (extra seconds, double rewards). [Sustainability]",
			"Seasonal leaderboards with TICK prizes. [Sustainability]",
			"Partnerships with other Solana projects for co-branded bombs. [Partnerships]",
			"Progressive jackpot for special event days. [Special]",
		],
	},
];

function PhaseColumn({ phase }: { phase: Phase }) {
	return (
		<div className="space-y-4">
			{/* En-tête plein largeur */}
			<div className="w-full rounded-md bg-[#1C244B] px-4 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
				<h3 className="font-bangers text-lg tracking-wide text-white md:text-xl">
					{phase.title}
				</h3>
			</div>

			{/* Cartes */}
			<div className="space-y-3">
				{phase.items.map((text) => (
					<div
						key={text}
						className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-left shadow-[0_4px_14px_rgba(0,0,0,0.25)] backdrop-blur-sm"
					>
						<p className="font-dmsans text-sm leading-6 text-white/90 md:text-base">
							{text}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Roadmap() {
	return (
		<section id="roadmap" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Titre */}
				<h2 className="mb-10 text-center font-bangers text-4xl text-white md:mb-12 md:text-5xl">
					ROADMAP
				</h2>

				{/* Desktop : 3 colonnes */}
				<div className="hidden gap-8 lg:grid lg:grid-cols-3">
					{PHASES.map((p) => (
						<PhaseColumn key={p.title} phase={p} />
					))}
				</div>

				{/* Mobile / Tablet : accordéons */}
				<div className="lg:hidden">
					<div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
						{PHASES.map((p, idx) => (
							<details key={p.title} open={idx === 0} className="group">
								<summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
									<span className="font-bangers text-lg tracking-wide text-white">
										{p.title}
									</span>
									<span className="font-dmsans text-white/70 transition group-open:rotate-180">
										▾
									</span>
								</summary>
								<div className="space-y-3 px-4 pb-4">
									{p.items.map((text) => (
										<div
											key={text}
											className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
										>
											<p className="font-dmsans text-[15px] leading-6 text-white/90">
												{text}
											</p>
										</div>
									))}
								</div>
							</details>
						))}
					</div>
				</div>

				{/* Illustration bas */}
				<div className="mt-12 flex flex-col items-center gap-6">
					<img
						src={roadmapImg}
						alt="Roadmap mascot"
						className="h-auto w-[220px] md:w-[260px] lg:w-[300px]"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
