export default function DailyFlowDiagram() {
	return (
		<section id="dailyflow-diagram" className="relative py-12 md:py-16">
			<div className="mx-auto max-w-[1440px] px-6">
				<h2 className="mb-8 text-center font-bangers text-4xl text-white md:text-5xl">
					DAILY FLOW
				</h2>

				{/* Row 1 */}
				<div className="mx-auto flex max-w-[1100px] flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-4">
					<Card
						title="Countdown starts"
						body={
							<>
								Fixed start time (e.g., 20:00 UTC) with an initial timer (e.g.,
								60 min).
							</>
						}
					/>
					<Arrow />
					<Card
						title="Users interact"
						body={
							<>
								Buy <span className="font-bold">$TICK</span> or pay micro-fee in
								SOL to extend the timer.
							</>
						}
					/>
					<Arrow />
					<Card
						title="Random extension"
						body={
							<>
								+30s to +3 min, but <span className="font-bold">decreases</span>{" "}
								with each interaction.
							</>
						}
					/>
				</div>

				{/* Mobile-only separator */}
				<div className="my-6 flex items-center gap-3 lg:hidden">
					<div className="h-[1px] flex-1 bg-white/20" />
					<span className="font-bangers text-sm uppercase tracking-wide text-white/60">
						Mechanics
					</span>
					<div className="h-[1px] flex-1 bg-white/20" />
				</div>

				{/* Row 2 */}
				<div className="mx-auto mt-6 flex max-w-[1100px] flex-col items-stretch gap-6 lg:mt-4 lg:flex-row lg:items-center lg:gap-4">
					<Card
						title="Anti–infinite-bomb"
						body={
							<ul className="list-disc pl-5">
								<li>
									Timer cannot exceed a{" "}
									<span className="font-bold">max cap</span> (e.g., 90 min
									total).
								</li>
								<li>
									Extension amount <span className="font-bold">decreases</span>{" "}
									over time.
								</li>
							</ul>
						}
					/>
					<Arrow />
					<Card
						title="Explosion at 0"
						body={
							<>
								When timer hits 0 → <span className="font-bold">explosion</span>
								.<br />
								Last interacting wallet{" "}
								<span className="font-bold">wins the jackpot</span>.
							</>
						}
					/>
					<Arrow />
					<Card
						title="New round"
						body={<>A new round starts the next day.</>}
					/>
				</div>
			</div>
		</section>
	);
}

function Card({ title, body }: { title: string; body: React.ReactNode }) {
	return (
		<div className="flex-1 rounded-2xl border border-white/15 bg-white/5 p-5 text-left text-white shadow-[0_6px_28px_rgba(0,0,0,0.25)] backdrop-blur-sm">
			<h3 className="mb-2 font-bangers text-xl tracking-wide text-white md:text-2xl">
				{title}
			</h3>
			<div className="font-dmsans text-sm leading-6 text-white/90 md:text-base">
				{body}
			</div>
		</div>
	);
}

function Arrow() {
	return (
		<div className="flex justify-center lg:min-w-[44px]">
			<svg
				className="h-6 w-6 text-white/70 lg:h-8 lg:w-8"
				viewBox="0 0 24 24"
				fill="none"
				aria-hidden="true"
			>
				{/* Mobile: down arrow */}
				<path
					className="lg:hidden"
					d="M12 4v14m0 0l-5-5m5 5l5-5"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				{/* Desktop: right arrow */}
				<path
					className="hidden lg:block"
					d="M4 12h14m0 0l-5-5m5 5l-5 5"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
}
