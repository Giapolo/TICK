import { useCallback, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { SiTelegram } from "react-icons/si";
import logo from "../assets/logo.jpg";

const navItems: { label: string; id: string }[] = [
	{ label: "ABOUT", id: "about" },
	{ label: "ROADMAP", id: "roadmap" },
	{ label: "TOKENOMICS", id: "tokenomics" },
	{ label: "BUY TICK", id: "buy" },
	{ label: "UPDATES", id: "updates" },
	{ label: "WHITEPAPER", id: "whitepaper" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToId = useCallback((id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
			setIsOpen(false);
		}
	}, []);

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<div className="mx-auto mt-4 max-w-[1440px] px-6">
				<div className="flex h-16 items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-6 backdrop-blur-md antialiased">
					{/* Logo */}
					<img src={logo} alt="Tick logo" className="h-10 w-10 rounded-full" />

					{/* Icônes Réseaux (mobile) */}
					<div className="flex items-center gap-4 lg:hidden">
						<a
							href="https://x.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 transition hover:text-white"
							aria-label="Open X"
						>
							<RxCross2 size={20} />
						</a>
						<a
							href="https://t.me"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 transition hover:text-white"
							aria-label="Open Telegram"
						>
							<SiTelegram size={20} />
						</a>
					</div>

					{/* Navbar Desktop */}
					<nav className="hidden lg:flex items-center gap-8 font-bangers font-normal uppercase tracking-[0.08em] text-white/85 text-[15px]">
						{navItems.map((item) => (
							<button
								key={item.id}
								type="button"
								onClick={() => scrollToId(item.id)}
								className="transition hover:text-white"
								aria-label={`Go to ${item.label} section`}
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Zone droite (Desktop) */}
					<div className="hidden lg:flex items-center gap-4">
						<a
							href="https://x.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 transition hover:text-white"
							aria-label="Open X"
						>
							<RxCross2 size={20} />
						</a>
						<a
							href="https://t.me"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 transition hover:text-white"
							aria-label="Open Telegram"
						>
							<SiTelegram size={20} />
						</a>

						<button
							type="button"
							onClick={() => scrollToId("buy")}
							className="rounded-md bg-[#D88C8C] px-4 py-2 font-bangers text-sm font-normal tracking-[0.03em] text-[#1C244B] transition hover:bg-[#c67878]"
							aria-label="Buy now"
						>
							BUY NOW
						</button>

						<span className="font-bangers text-sm font-medium italic text-white/75">
							$TICK 0.004127
						</span>
					</div>

					{/* Burger Menu Button (Mobile) */}
					<button
						type="button"
						className="text-white lg:hidden"
						onClick={() => setIsOpen((v) => !v)}
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
					>
						{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
					</button>
				</div>
			</div>

			{/* ✅ Mobile Menu : panneau étroit à droite, caché quand fermé */}
			<div
				id="mobile-menu"
				className={`absolute right-0 top-[72px] z-40 w-[150px] max-w-[70vw] 
    border-t border-white/10 bg-[#0C0F1A] px-4 pt-2 shadow-xl lg:hidden rounded-lg
    ${isOpen ? "block animate-slideDown" : "hidden"}`}
			>
				<div className="reveal-grid open">
					<div className="overflow-hidden">
						<nav className="pb-3 pt-1 font-bangers text-[15px] font-normal uppercase tracking-[0.08em] text-white/85">
							<ul className="space-y-2">
								{navItems.map((item) => (
									<li key={item.id}>
										<button
											type="button"
											onClick={() => scrollToId(item.id)}
											className="block w-full rounded-md px-2 py-2 text-right transition hover:bg-white/10 active:bg-white/15"
											aria-label={`Go to ${item.label} section`}
										>
											{item.label}
										</button>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}
