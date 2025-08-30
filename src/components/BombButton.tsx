// src/components/BombButton.tsx
import clsx from "clsx";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Common = {
	children: React.ReactNode;
	className?: string;
	variant?: "pink" | "dark" | "telegram";
};
type ButtonProps =
	| ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement> & Common)
	| ({ as: "a"; href: string } & AnchorHTMLAttributes<HTMLAnchorElement> &
			Common);

export default function BombButton(props: ButtonProps) {
	const { children, className, variant = "pink", as, ...rest } = props as any;

	const base =
		"relative inline-flex items-center justify-center rounded-lg px-5 py-3 " +
		"font-bangers uppercase tracking-wide select-none overflow-hidden " +
		"transition active:scale-[0.98]";

	const palette =
		variant === "pink"
			? "bg-[#D88C8C] text-[#1C244B] hover:brightness-105"
			: variant === "dark"
				? "bg-black text-white hover:opacity-90"
				: "bg-[#229ED9] text-white hover:brightness-110"; // telegram

	const Comp: any = as === "a" ? "a" : "button";

	return (
		<Comp {...rest} className={clsx(base, palette, "group", className)}>
			{/* mèche (ligne) */}
			<span
				className="pointer-events-none absolute left-3 top-1.5 h-[3px] w-8 origin-left rounded-full 
                   bg-gradient-to-r from-yellow-300 via-orange-400 to-transparent opacity-0 
                   transition-all duration-700 group-hover:opacity-100 group-hover:w-[70%]"
			/>
			{/* étincelle */}
			<span
				className="pointer-events-none absolute left-3 top-1 h-2 w-2 rounded-full bg-yellow-300 
                   shadow-[0_0_10px_rgba(255,200,0,0.9)] opacity-0 group-hover:opacity-100 
                   group-hover:animate-sparkMove"
			/>
			{/* petite flamme au départ */}
			<span
				className="pointer-events-none absolute left-2 top-0.5 h-2 w-2 rounded-full bg-orange-500 
                   shadow-[0_0_8px_rgba(255,140,0,0.9)] opacity-0 group-hover:opacity-100 
                   group-hover:animate-flicker"
			/>
			{/* boom de glow au relâchement */}
			<span
				className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-[radial-gradient(circle_at_center,rgba(255,220,120,0.25),transparent_60%)] 
                   opacity-0 group-active:opacity-100 group-active:animate-boom"
			/>

			<span className="relative z-10">{children}</span>
		</Comp>
	);
}
