// src/components/Tokenomics.tsx
import donutsLeft from "../assets/donuts_left.png";
import donutsRight from "../assets/donuts_right.png";

export default function Tokenomics() {
	return (
		<section id="tokenomics" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6 text-center">
				{/* Titre principal */}
				<h2 className="mb-12 font-bangers text-4xl text-white md:text-5xl">
					TOKENOMICS
				</h2>

				{/* ✅ Donuts : mobile en colonne centrée ; desktop décalés et tailles définies */}
				<div className="flex flex-col items-center gap-16 lg:gap-2">
					<img
						src={donutsLeft}
						alt="Total Supply Donut"
						className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[650px] lg:translate-x-20"
						loading="lazy"
					/>
					<img
						src={donutsRight}
						alt="Daily Fee Flow Donut"
						className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[720px] lg:-translate-x-20"
						loading="lazy"
					/>
				</div>

				{/* ⬇️ Bloc texte ajouté, collé sous les donuts (peu de marge) */}
				<div className="mx-auto mt-18 max-w-[1100px] text-center md:mt-18">
					<h3 className="font-bangers text-3xl text-white md:text-5xl">
						TOTAL SUPPLY: 100,000,000 TICK (FIXED)
					</h3>

					{/* Distribution */}
					<div className="mt-6 md:mt-8">
						<h4 className="font-dmsans text-2xl font-extrabold text-white md:text-3xl">
							Distribution :
						</h4>
						<div className="mt-3 space-y-2 font-dmsans text-base text-white md:space-y-3 md:text-xl">
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
						<h4 className="font-dmsans text-2xl font-extrabold text-white md:text-3xl">
							Game Economy :
						</h4>
						<div className="mt-3 space-y-2 font-dmsans text-base text-white md:space-y-3 md:text-xl">
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
		</section>
	);
}
