import { FaXTwitter } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi2";
import { SiTelegram } from "react-icons/si";
import logo from "../assets/logo.jpg";

export default function Footer() {
	return (
		<footer className="relative bg-white/10 py-12 text-white md:py-14">
			<div className="mx-auto max-w-[1440px] px-6">
				{/* Logo */}
				<div className="flex justify-center">
					<img
						src={logo}
						alt="TICK logo"
						className="h-16 w-16 rounded-full object-cover"
						loading="lazy"
					/>
				</div>

				{/* Socials */}
				<div className="mt-6 flex items-center justify-center gap-8">
					<a
						href="https://t.me/tickonsol"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open Telegram"
						className="transition hover:opacity-90"
					>
						<SiTelegram size={28} />
					</a>
					<a
						href="https://x.com/TickOnSol"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open X"
						className="transition hover:opacity-90"
					>
						<FaXTwitter size={28} />
					</a>
				</div>

				{/* Mobile: list-style tiles with chevrons */}
				<nav aria-label="Legal" className="mt-8 md:hidden">
					<ul className="space-y-3">
						<li>
							<a
								href="/terms"
								className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.25)] backdrop-blur-sm"
								aria-label="Terms of Service"
							>
								<span className="font-bangers text-lg italic uppercase tracking-wide">
									Terms of Service
								</span>
								<HiChevronRight size={22} className="text-white/80" />
							</a>
						</li>
						<li>
							<a
								href="/privacy"
								className="flex w-full items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.25)] backdrop-blur-sm"
								aria-label="Privacy Policy"
							>
								<span className="font-bangers text-lg italic uppercase tracking-wide">
									Privacy Policy
								</span>
								<HiChevronRight size={22} className="text-white/80" />
							</a>
						</li>
					</ul>
				</nav>

				{/* Desktop: 2 links centered */}
				<nav
					aria-label="Legal"
					className="mt-8 hidden items-center justify-center gap-8 md:flex"
				>
					<a
						href="/terms"
						className="font-bangers text-lg italic uppercase tracking-wide hover:opacity-90 md:text-xl"
					>
						Terms of Service
					</a>
					<a
						href="/privacy"
						className="font-bangers text-lg italic uppercase tracking-wide hover:opacity-90 md:text-xl"
					>
						Privacy Policy
					</a>
				</nav>

				{/* Copyright */}
				<p className="mt-8 text-center font-bangers text-sm italic uppercase tracking-wide text-white/90 md:text-base">
					© BOMBTICK.IO 2025
				</p>
			</div>
		</footer>
	);
}
