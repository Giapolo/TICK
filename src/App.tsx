import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Background from "./components/Background";
import Concept from "./components/Concept";
import DailyFlow from "./components/DailyFlow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Mechanics from "./components/Mechanics";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Whitepaper from "./components/Whitepaper";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// ✅ Page légale
import Terms from "./pages/Terms";

function Landing() {
	return (
		<div className="relative min-h-screen overflow-hidden text-white">
			<Background />
			<Header />
			<Hero />
			<Concept />
			<DailyFlow />
			<Roadmap />
			<Mechanics />
			<Tokenomics />
			<Whitepaper />
			<JoinUs />
			<Footer />
		</div>
	);
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
			</Routes>
		</Router>
	);
}
