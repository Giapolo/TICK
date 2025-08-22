import { useState } from "react";
import tickRocket from "../assets/tick_rocket.png"; // ✅ image importée

const ADDR = "8xJ4Fh92kLmQpYt3nR7sDzXwP9aBcD5EfGhi1j2kLmNo";

function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className="flex flex-col items-center justify-center gap-1 py-4">
			<div className="font-bangers text-3xl leading-none text-white md:text-4xl">
				{value}
			</div>
			<div className="text-xs font-medium tracking-wide text-white/70 md:text-sm">
				{label}
			</div>
		</div>
	);
}

export default function Hero() {
	const [copied, setCopied] = useState(false);

	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(ADDR);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1500);
		} catch {
			setCopied(false);
		}
	}

	return (
		<section
			id="hero"
			className="relative pb-10 pt-28 md:pb-16 md:pt-36 lg:pt-40"
			aria-label="Hero"
		>
			<div className="mx-auto max-w-[1440px] px-6">
				<div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
					{/* Left / Text */}
					<div className="lg:col-span-7">
						<h1 className="font-bangers text-[40px] leading-[0.95] text-white drop-shadow md:text-[64px] lg:text-[76px]">
							$TICK — THE FUSE IS LIT.
						</h1>

						<p className="mt-3 text-center font-dmsans text-sm text-white/80 md:text-base lg:text-left">
							Communautary memecoin on Solana
						</p>

						{/* CTA Buttons */}
						<div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
							<a
								href="#buy"
								className="rounded-lg bg-[#D88C8C] px-6 py-3 font-bangers text-lg tracking-wide text-[#1C244B] transition hover:bg-[#c67878]"
								aria-label="Buy $TICK"
							>
								Buy $TICK
							</a>
							<a
								href="https://t.me"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg bg-[#D88C8C] px-6 py-3 font-bangers text-lg tracking-wide text-[#1C244B] transition hover:bg-[#c67878]"
								aria-label="Join Telegram"
							>
								Join Telegram
							</a>
						</div>

						{/* Body copy */}
						<div className="mx-auto mt-8 max-w-2xl text-center lg:mx-0 lg:text-left">
							<p className="font-dmsans text-xl font-semibold leading-8 text-white md:text-2xl">
								Meet $TICK — a bomb with a ticking fuse. <br />
								Trade, vibe, keep it moving.
							</p>
							<p className="mt-6 font-dmsans text-xl font-semibold leading-8 text-white md:text-2xl">
								When it blows, the last person to make a transaction bags the
								blast reward in $TICK.
							</p>
							<p className="mt-6 font-dmsans text-xl font-semibold leading-8 text-white md:text-2xl">
								Think you can be the last?{" "}
								<span role="img" aria-label="boom">
									💥
								</span>
							</p>
						</div>

						{/* Soon on SOL (mobile) */}
						<p className="mt-10 text-center font-bangers text-2xl text-white md:text-3xl lg:hidden">
							Soon on SOL — Live soon{" "}
							<span role="img" aria-label="rocket">
								🚀
							</span>
						</p>
					</div>

					{/* Right / Image + Stats */}
					<div className="flex w-full flex-col items-center lg:col-span-5 lg:items-start">
						{/* Illustration */}
						<img
							src={tickRocket}
							alt="Tick character and rocket"
							className="h-auto w-[280px] max-w-full md:w-[340px] lg:w-[420px]"
							loading="eager"
						/>

						{/* Stats bar — centré + largeur contrainte en mobile */}
						<div className="mt-8 w-full max-w-[360px] rounded-2xl border border-white/10 bg-white/20 p-2 backdrop-blur-sm lg:max-w-none">
							<div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-y-0 md:divide-x">
								<Stat value="1B" label="Total Supply" />
								<Stat value="50M" label="Community Airdrops" />
								<Stat value="0.5%" label="Automatic Burn" />
							</div>
						</div>

						{/* Address + CTA — même largeur que le bandeau + wrap texte */}
						<div className="mt-6 w-full max-w-[360px] space-y-4 text-center lg:max-w-none lg:text-left">
							<p className="font-dmsans text-sm tracking-wide text-white/85 break-all">
								Address : <span className="select-all">{ADDR}</span>
							</p>

							<div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
								<button
									type="button"
									onClick={handleCopy}
									className="rounded-lg bg-[#E1A2A2] px-5 py-2.5 font-bangers text-base tracking-wide text-[#1C244B] transition hover:bg-[#d48f8f]"
								>
									{copied ? "Copied!" : "Copy"}
								</button>

								<a
									href="https://solscan.io"
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-lg bg-[#E1A2A2] px-5 py-2.5 font-bangers text-base tracking-wide text-[#1C244B] transition hover:bg-[#d48f8f]"
								>
									See on Solscan
								</a>
							</div>
						</div>

						{/* Soon on SOL (desktop) */}
						<p className="mt-10 hidden text-center font-bangers text-3xl text-white lg:block">
							Soon on SOL — Live soon{" "}
							<span role="img" aria-label="rocket">
								🚀
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
