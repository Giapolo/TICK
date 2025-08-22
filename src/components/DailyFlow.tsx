export default function DailyFlow() {
	return (
		<section id="dailyflow" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Titre aligné gauche */}
				<h2 className="mb-8 font-bangers text-4xl text-white md:text-5xl">
					DAILY FLOW
				</h2>

				{/* Liste alignée gauche */}
				<ol className="max-w-[1100px] list-decimal space-y-4 pl-6 font-dmsans text-base leading-8 text-white md:text-lg">
					<li>
						Countdown starts at fixed time (e.g., 20:00 UTC) with initial timer
						(e.g., 60 min).
					</li>
					<li>
						Users interact with the contract (buy TICK or pay micro-fee in SOL)
						to extend the timer.
					</li>
					<li>
						Extension is random (+30s to +3 min) but decreases with each
						interaction.
					</li>
					<li>
						Built-in anti-infinite-bomb mechanics:
						<ul className="mt-2 list-disc pl-6 space-y-1">
							<li>Timer cannot exceed a max cap (e.g., 90 min total).</li>
							<li>Extension amount decreases with each interaction.</li>
						</ul>
					</li>
					<li>
						When timer hits 0 → explosion event → last interacting wallet wins
						jackpot.
					</li>
					<li>New round starts the next day.</li>
				</ol>
			</div>

			{/* Bandeau full-width */}
			<div className="mt-18 w-full border-t border-white/15 bg-white/10 backdrop-blur-md">
				<div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3">
					{/* Boutons groupés à gauche */}
					<div className="flex flex-wrap gap-3 sm:gap-4">
						<a
							href="#buy"
							className="rounded-md bg-[#D88C8C] px-4 py-2 text-center font-bangers text-sm uppercase tracking-wide text-[#1C244B] transition hover:bg-[#c67878]"
						>
							Buy $TICK
						</a>
						<a
							href="https://t.me"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-md bg-[#D88C8C] px-4 py-2 text-center font-bangers text-sm uppercase tracking-wide text-[#1C244B] transition hover:bg-[#c67878]"
						>
							Join Telegram
						</a>
						<a
							href="https://x.com"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-md bg-[#D88C8C] px-4 py-2 text-center font-bangers text-sm uppercase tracking-wide text-[#1C244B] transition hover:bg-[#c67878]"
						>
							Join X
						</a>
						<a
							href="https://solscan.io"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-md bg-[#D88C8C] px-4 py-2 text-center font-bangers text-sm uppercase tracking-wide text-[#1C244B] transition hover:bg-[#c67878]"
						>
							Solscan
						</a>
					</div>

					{/* Prix aligné à droite */}
					<span className="font-dmsans text-sm font-medium italic text-white/75 whitespace-nowrap">
						$TICK 0.004127
					</span>
				</div>
			</div>
		</section>
	);
}
