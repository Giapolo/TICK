import bg from "../assets/background.png";

export default function Background() {
	return (
		<div className="absolute inset-0 -z-10 pointer-events-none">
			{/* Couche 1 */}
			<img
				src={bg}
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
				loading="eager"
			/>
			{/* Couche 2 retournée 180° */}
			<img
				src={bg}
				alt=""
				className="absolute inset-0 h-full w-full object-cover rotate-180 opacity-55 mix-blend-soft-light"
				loading="eager"
			/>
		</div>
	);
}
