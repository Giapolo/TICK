// src/components/Tokenomics.tsx
import donutsLeft from "../assets/donuts_left.png";

export default function Tokenomics() {
	return (
		<section id="tokenomics" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Titre principal */}
				<h2 className="mb-12 text-center font-bangers text-4xl text-white md:text-5xl">
					TOKENOMICS
				</h2>

				{/* Layout grid : gauche images / droite texte */}
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-24">
					{/* Colonne gauche : image */}
					<div className="flex justify-center lg:col-span-6">
						<img
							src={donutsLeft}
							alt="Total Supply Donut"
							className="w-full max-w-[520px] sm:max-w-[420px] lg:max-w-[720px]"
							loading="lazy"
						/>
					</div>

					{/* Colonne droite : texte */}
					<div className="lg:col-span-6 mt-20">
						{/* Distribution */}
						<div>
							<h4 className="font-dmsans text-xl font-extrabold text-white md:text-2xl lg:text-3xl">
								Distribution :
							</h4>
							<div className="mt-3 space-y-2 font-dmsans text-base text-white md:space-y-3 md:text-lg lg:text-xl">
								<p>
									– 40% Liquidity Pool (Raydium) at launch, LP locked 30 days.
								</p>
								<p>– 30% Game rewards/jackpot funding.</p>
								<p>– 20% Marketing &amp; community events.</p>
								<p>– 10% Team/Dev (locked 1 month).</p>
							</div>
						</div>

						{/* Game Economy */}
						<div className="mt-8 md:mt-10">
							<h4 className="font-dmsans text-xl font-extrabold text-white md:text-2xl lg:text-3xl">
								Game Economy :
							</h4>
							<div className="mt-3 space-y-2 font-dmsans text-base text-white md:space-y-3 md:text-lg lg:text-xl">
								<p>
									– Micro-fee per interaction: 0.005 SOL or equivalent in TICK.
								</p>
								<p>– 50% of daily fees → jackpot.</p>
								<p>– 30% → community treasury.</p>
								<p>– 20% → TICK burn (deflationary).</p>
								<p>– Optional: extra TICK prize for the winner.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
