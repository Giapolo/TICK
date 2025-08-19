export default function Hero() {
	return (
		<section id="hero" className="py-20 text-center">
			<h2 className="text-5xl font-extrabold mb-6">$TICK — The Fuse is Lit</h2>
			<p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
				A Solana experiment where the bomb ticks… and rewards explode.
			</p>
			<div className="flex justify-center gap-4">
				<button
					type="button"
					className="px-6 py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition"
				>
					Buy $TICK
				</button>
				<button
					type="button"
					className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
				>
					Join Community
				</button>
			</div>
		</section>
	);
}
