import conceptImg from "../assets/tick_camping.png";

export default function Concept() {
	return (
		<section id="about" className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Titre (mobile au-dessus, desktop dans la colonne droite) */}
				<h2 className="mb-8 text-center font-bangers text-4xl text-white md:text-5xl lg:hidden">
					CONCEPT OVERVIEW
				</h2>

				<div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
					{/* Image à gauche */}
					<div className="relative mx-auto w-full max-w-[520px] lg:col-span-6 lg:mx-0">
						{/* halo flou derrière l'image pour rappeler l'effet Figma */}
						<div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-white/5 blur-2xl" />
						<img
							src={conceptImg}
							alt="Tick by the campfire"
							className="w-full rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
							loading="lazy"
						/>
					</div>

					{/* Texte à droite */}
					<div className="lg:col-span-6">
						<h2 className="mb-6 hidden font-bangers text-5xl text-white lg:block xl:text-6xl">
							CONCEPT OVERVIEW
						</h2>

						<div className="mx-auto max-w-[680px] text-center lg:mx-0 lg:text-left">
							<p className="font-dmsans text-xl font-semibold leading-9 text-white md:text-2xl">
								TimeBomb (TICK) is a Solana–based daily game/ memecoin hybrid.
							</p>

							<p className="mt-6 font-dmsans text-xl font-semibold leading-9 text-white md:text-2xl">
								Each day, a visible on-chain countdown starts at a fixed hour.
							</p>

							<p className="mt-6 font-dmsans text-xl font-semibold leading-9 text-white md:text-2xl">
								Every transaction towards the smart contract delays the
								explosion, but with built-in mechanics to ensure the bomb always
								explodes once per day.
							</p>

							<p className="mt-6 font-dmsans text-xl font-semibold leading-9 text-white md:text-2xl">
								The last wallet to interact before the explosion wins the daily
								jackpot.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
