import "./App.css";
import About from "./components/About";
import Band from "./components/Band";
import Heropage2 from "./components/Heropage2";
import Courses from "./components/Courses";
import { ToastProvider } from "@radix-ui/react-toast";
import Navbar from "./components/Navbar";
import { Logomosque3 } from "./components/Svgcomponents";

function App() {
	return (
		<ToastProvider>
			<div className="min-h-screen bg-white dark:bg-accentBase-dark">
				<Navbar />
				<main>
					<Heropage2 />
					<Band />
					<About />
					<Courses />
				</main>

				<footer id="contact" className="bg-accentTextContrast dark:bg-accentBase-dark border-t border-accentLine dark:border-accentLine-dark">
					<div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
						{/* Brand */}
						<div className="flex flex-col gap-4">
							<Logomosque3 className="h-14 w-auto brightness-0 invert" />
							<p className="text-sm text-gray-300 leading-relaxed max-w-xs">
								Free, expert-led Islamic education for Muslims everywhere.
								Learn at your own pace, from anywhere.
							</p>
						</div>

						{/* Links */}
						<div className="flex flex-col gap-3">
							<p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
								Navigation
							</p>
							{[
								{ label: "Home", href: "#home" },
								{ label: "About Us", href: "#about" },
								{ label: "Courses", href: "#courses" },
								{ label: "Contact", href: "#contact" },
							].map(({ label, href }) => (
								<a
									key={label}
									href={href}
									className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
								>
									{label}
								</a>
							))}
						</div>

						{/* Courses */}
						<div className="flex flex-col gap-3">
							<p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
								Courses
							</p>
							{["Tajwid", "Tafsir", "Memorisation"].map((course) => (
								<a
									key={course}
									href="#courses"
									className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
								>
									{course}
								</a>
							))}
						</div>
					</div>

					<div className="border-t border-gray-700 px-4 py-5">
						<p className="text-center text-gray-500 text-xs">
							&copy; {new Date().getFullYear()} Islamic Education. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</ToastProvider>
	);
}

export default App;
