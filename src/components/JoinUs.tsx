import { SiTelegram } from "react-icons/si";
import XLogo from "../assets/X.png"; // ton logo X

export default function JoinUs() {
	return (
		<section className="py-16 text-center text-white">
			<h2 className="mb-2 font-bangers text-3xl uppercase tracking-wide">
				Join the Community
			</h2>
			<p className="mb-6 text-lg text-gray-300">
				Connect, share, and grow with us.
			</p>
			<div className="flex justify-center gap-6">
				{/* Telegram */}
				<a
					href="https://t.me/tickonsol"
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white
                    transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_rgba(34,158,217,0.7)]"
				>
					<SiTelegram size={22} />
				</a>

				{/* X (logo importé) */}
				<a
					href="https://x.com/TickOnSol"
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black
                    transition-transform duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
				>
					<img src={XLogo} alt="X logo" className="h-6 w-6" />
				</a>
			</div>
		</section>
	);
}
