// src/components/Mechanics.tsx
import tickMechanics from "../assets/tick_mechanics.png";

export default function Mechanics() {
	return (
		<section id="mechanics" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Titre */}
				<h2 className="mb-8 text-center font-bangers text-4xl text-white md:mb-10 md:text-5xl">
					ANTI-INFINITE POSSIBLE MECHANICS
				</h2>

				{/* Grille : texte gauche / image droite (stack en mobile) */}
				<div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
					{/* Texte (gauche) */}
					<div className="lg:col-span-7">
						<ol className="list-decimal space-y-8 pl-6 font-dmsans text-lg leading-9 text-white md:text-xl">
							<li>
								<p className="font-semibold">Timer Maximum (Hard Cap):</p>
								<ul className="mt-2 list-disc space-y-1 pl-6 text-white/95">
									<li>Example: max 90 minutes from round start.</li>
									<li>Ensures a daily explosion regardless of interactions.</li>
								</ul>
							</li>

							<li>
								<p className="font-semibold">Extension Decay:</p>
								<ul className="mt-2 list-disc space-y-1 pl-6 text-white/95">
									<li>First interactions add +3 min.</li>
									<li>Later interactions add only +5 sec.</li>
									<li>Makes it impossible to sustain the bomb indefinitely.</li>
								</ul>
							</li>

							<li>
								<p className="font-semibold">Fee Inflation:</p>
								<ul className="mt-2 list-disc space-y-1 pl-6 text-white/95">
									<li>Each additional interaction costs slightly more.</li>
									<li>Discourages spam while increasing jackpot size.</li>
								</ul>
							</li>
						</ol>
					</div>

					{/* Image (droite) */}
					<div className="flex items-start justify-center lg:col-span-5">
						<img
							src={tickMechanics}
							alt="Tick mechanics character"
							className="h-auto w-[280px] max-w-full md:w-[360px] lg:w-[460px]"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
