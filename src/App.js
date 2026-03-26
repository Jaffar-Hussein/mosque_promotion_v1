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
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
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
				<ScrollToTop />
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/course/:slug" element={<CoursePage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>

				<footer id="contact" className="bg-accentTextContrast dark:bg-gray-950">
					<div className="max-w-6xl mx-auto px-4 pt-14 pb-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

						{/* Brand */}
						<div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
							<Logomosque3 className="h-14 w-auto brightness-0 invert" />
							<p className="text-sm text-gray-400 leading-relaxed max-w-xs">
								Free, expert-led Islamic education for Muslims everywhere.
								Learn at your own pace, from anywhere in the world.
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

						{/* Contact */}
						<div className="flex flex-col gap-3">
							<p className="text-white font-semibold text-xs uppercase tracking-widest mb-2">
								Contact Us
							</p>
							<a
								href="mailto:info@islamiceducation.org"
								className="flex items-start gap-2.5 text-gray-400 hover:text-white text-sm transition-colors duration-150 group"
							>
								<svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-600 group-hover:text-accentSolid transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
								</svg>
								info@islamiceducation.org
							</a>
							<div className="flex items-start gap-2.5 text-gray-400 text-sm">
								<svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Mon – Fri, 9 am – 5 pm GMT
							</div>
							{/* Social links */}
							<div className="flex items-center gap-3 pt-2">
								<button type="button" aria-label="YouTube" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-accentSolid flex items-center justify-center transition-colors duration-200">
									<svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
									</svg>
								</button>
								<button type="button" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-accentSolid flex items-center justify-center transition-colors duration-200">
									<svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
									</svg>
								</button>
								<button type="button" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-accentSolid flex items-center justify-center transition-colors duration-200">
									<svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-800 px-4 py-5">
						<p className="text-center text-gray-600 text-xs">
							&copy; {new Date().getFullYear()} Islamic Education. All rights reserved.
						</p>
					</div>
				</footer>

				<BackToTop />
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
