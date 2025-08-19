export default function Roadmap() {
	return (
		<section id="roadmap" className="py-20 text-center">
			<h2 className="text-3xl font-bold mb-8">Roadmap</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
				<div className="p-6 rounded-xl bg-white/5">
					<h3 className="text-xl font-semibold mb-4">Now</h3>
					<ul className="space-y-2 text-left text-white/70">
						<li>Automated bot posts (Twitter)</li>
						<li>Real-time timer alerts (Telegram)</li>
						<li>Live-tweet winner announcements</li>
					</ul>
				</div>
				<div className="p-6 rounded-xl bg-white/5">
					<h3 className="text-xl font-semibold mb-4">Next</h3>
					<ul className="space-y-2 text-left text-white/70">
						<li>Meme campaigns (Twitter)</li>
						<li>Community betting & watch parties (Telegram)</li>
						<li>Twitch/YouTube integration</li>
						<li>Meme contests "Defuse the bomb"</li>
						<li>Weekend events (2 bombs/day)</li>
					</ul>
				</div>
				<div className="p-6 rounded-xl bg-white/5">
					<h3 className="text-xl font-semibold mb-4">Later</h3>
					<ul className="space-y-2 text-left text-white/70">
						<li>NFT Defusers (advantages)</li>
						<li>Seasonal leaderboards (TICK prizes)</li>
						<li>Partnerships with Solana projects</li>
						<li>Progressive jackpots</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
