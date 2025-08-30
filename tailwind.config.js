// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				// l’étincelle se déplace de gauche à droite
				sparkMove: {
					"0%": { transform: "translateX(0) scale(1)", opacity: "1" },
					"80%": { transform: "translateX(260%) scale(0.9)", opacity: "1" },
					"100%": { transform: "translateX(280%) scale(0.6)", opacity: "0" },
				},
				// petit glow “boom”
				boom: {
					"0%": { transform: "scale(0.4)", opacity: "0.0" },
					"60%": { transform: "scale(1)", opacity: "0.5" },
					"100%": { transform: "scale(1.2)", opacity: "0" },
				},
				// flicker léger de la flamme
				flicker: {
					"0%, 100%": { transform: "translateY(0)", opacity: "0.9" },
					"50%": { transform: "translateY(-1px)", opacity: "1" },
				},
			},
			animation: {
				sparkMove: "sparkMove 0.8s linear forwards",
				boom: "boom 0.6s ease-out forwards",
				flicker: "flicker 0.6s ease-in-out infinite",
				fadeIn: "fadeIn 0.2s ease-out",
			},
		},
	},
	plugins: [],
};
