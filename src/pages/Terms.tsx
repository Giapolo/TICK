// src/pages/Terms.tsx
export default function Terms() {
	return (
		<section className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[900px] px-6">
				<h1 className="mb-8 font-bangers text-4xl text-white md:text-5xl">
					Terms & Conditions
				</h1>
				<div className="space-y-6 font-dmsans text-white/90">
					<p>
						These Terms govern the use of the TimeBomb (TICK) website, token,
						and related services. By interacting with TICK, you agree to these
						Terms.
					</p>

					<h2 className="font-bold text-white">1. No Financial Advice</h2>
					<p>
						TICK is a meme-token and gamified experience on Solana. It should
						not be considered an investment. You are solely responsible for your
						decisions.
					</p>

					<h2 className="font-bold text-white">2. Eligibility</h2>
					<p>
						You must ensure that using TICK is legal in your jurisdiction. We
						are not responsible for any restrictions or penalties you may face.
					</p>

					<h2 className="font-bold text-white">3. Risks</h2>
					<p>
						Interacting with smart contracts carries risks (bugs, hacks, loss of
						funds). By participating, you accept full responsibility.
					</p>

					<h2 className="font-bold text-white">4. Limitation of Liability</h2>
					<p>
						The team behind TICK is not liable for financial loss, missed
						opportunities, or damages arising from use of the token, website, or
						game.
					</p>

					<h2 className="font-bold text-white">5. Updates</h2>
					<p>
						These Terms may be updated at any time. Continued participation
						means acceptance of the latest version.
					</p>
				</div>
			</div>
		</section>
	);
}
