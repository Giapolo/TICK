/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			/* ✅ on garde fadeIn et on ajoute slideDown/slideUp */
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0, transform: "scale(0.95)" },
					"100%": { opacity: 1, transform: "scale(1)" },
				},
				slideDown: {
					"0%": { opacity: "0", transform: "translateY(-8px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideUp: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(-8px)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.2s ease-out",
				slideDown: "slideDown 200ms ease-out forwards",
				slideUp: "slideUp 150ms ease-in forwards",
			},
		},
	},
	plugins: [],
};
