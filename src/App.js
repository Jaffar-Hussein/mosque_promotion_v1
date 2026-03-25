import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Band from "./components/Band";
import Heropage2 from "./components/Heropage2";
import Courses from "./components/Courses";
import Verse from "./components/Verse";
import Newsletter from "./components/Newsletter";
import { ToastProvider } from "@radix-ui/react-toast";
import Navbar from "./components/Navbar";
import { Logomosque3 } from "./components/Svgcomponents";
import CoursePage from "./pages/CoursePage";
import { courses } from "./data/courseData";

function HomePage() {
	return (
		<>
			<Heropage2 />
			<Band />
			<Verse />
			<About />
			<Courses />
			<section id="newsletter">
				<Newsletter />
			</section>
		</>
	);
}

function Layout() {
	return (
		<ToastProvider>
			<div className="min-h-screen bg-white dark:bg-accentBase-dark">
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/course/:slug" element={<CoursePage />} />
					</Routes>
				</main>

				<footer id="contact" className="bg-accentTextContrast dark:bg-gray-950">
					<div className="max-w-6xl mx-auto px-4 pt-14 pb-8 grid md:grid-cols-3 gap-10">
						{/* Brand */}
						<div className="flex flex-col gap-4">
							<Logomosque3 className="h-14 w-auto brightness-0 invert" />
							<p className="text-sm text-gray-400 leading-relaxed max-w-xs">
								Free, expert-led Islamic education for Muslims everywhere.
								Learn at your own pace, from anywhere.
							</p>
						</div>

						{/* Navigation */}
						<div className="flex flex-col gap-3">
							<p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">
								Navigation
							</p>
							{[
								{ label: "Home",       href: "/#home" },
								{ label: "About Us",   href: "/#about" },
								{ label: "Courses",    href: "/#courses" },
								{ label: "Newsletter", href: "/#newsletter" },
							].map(({ label, href }) => (
								<a key={label} href={href} className="text-gray-400 hover:text-white text-sm transition-colors duration-150">
									{label}
								</a>
							))}
						</div>

						{/* Courses */}
						<div className="flex flex-col gap-3">
							<p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">
								Courses
							</p>
							{courses.map((c) => (
								<Link
									key={c.slug}
									to={`/course/${c.slug}`}
									className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
								>
									{c.name}
								</Link>
							))}
						</div>
					</div>

					<div className="border-t border-gray-800 px-4 py-5">
						<p className="text-center text-gray-600 text-xs">
							&copy; {new Date().getFullYear()} Islamic Education. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</ToastProvider>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}

export default App;
