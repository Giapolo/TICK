// src/pages/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
	return (
		<section className="relative py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[900px] px-6">
				<h1 className="mb-8 font-bangers text-4xl text-white md:text-5xl">
					Privacy Policy
				</h1>
				<div className="space-y-6 font-dmsans text-white/90">
					<p>
						This Privacy Policy explains how we collect, use, and protect your
						information when you use the TimeBomb (TICK) website and services.
					</p>

					<h2 className="font-bold text-white">1. Information We Collect</h2>
					<p>
						We may collect wallet addresses, on-chain activity related to TICK,
						and limited analytics (such as website visits). We do not collect
						personally identifiable information unless explicitly provided.
					</p>

					<h2 className="font-bold text-white">2. How We Use Information</h2>
					<p>
						Data is used solely to improve the website, ensure fair gameplay,
						and provide community updates. We do not sell or share your
						information with third parties.
					</p>

					<h2 className="font-bold text-white">3. Security</h2>
					<p>
						While we take reasonable measures to protect data, you acknowledge
						that blockchain transactions are public and irreversible.
					</p>

					<h2 className="font-bold text-white">4. Updates</h2>
					<p>
						We may update this Privacy Policy from time to time. Continued use
						of our services means acceptance of the updated terms.
					</p>
				</div>
			</div>
		</section>
	);
}
