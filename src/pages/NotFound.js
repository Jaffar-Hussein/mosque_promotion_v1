import { Link } from "react-router-dom";
import { courses } from "../data/courseData";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white dark:bg-accentBase-dark flex flex-col items-center justify-center px-4 py-24 text-center">
			{/* Decorative number */}
			<div
				aria-hidden="true"
				className="font-heading font-black text-[9rem] leading-none text-accentBg dark:text-accentBg-dark select-none"
			>
				404
			</div>

			<h1 className="font-heading text-3xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark mt-2 mb-3">
				Page Not Found
			</h1>
			<p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed mb-8">
				The page you're looking for doesn't exist or the link may be incorrect.
				Head back home or explore one of our courses below.
			</p>

			<div className="flex flex-wrap gap-3 justify-center mb-14">
				<Link
					to="/"
					className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-accentSolid hover:bg-accentSolidHover shadow-lg shadow-accentSolid/30 transition-all duration-200 text-sm"
				>
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
					</svg>
					Back to Home
				</Link>
				<a
					href="/#courses"
					className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-accentTextContrast dark:text-accentTextContrast-dark border-2 border-accentBorder dark:border-accentBorder-dark hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark transition-all duration-200 text-sm"
				>
					Browse Courses
				</a>
			</div>

			{/* Course suggestions */}
			<div className="w-full max-w-sm">
				<p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold mb-4">
					Available Courses
				</p>
				<div className="flex flex-col gap-3">
					{courses.map((c) => (
						<Link
							key={c.slug}
							to={`/course/${c.slug}`}
							className="group flex items-center gap-3 p-4 rounded-xl border border-accentLine dark:border-accentLine-dark bg-accentBg/40 dark:bg-accentBg-dark/40 hover:border-accentBorderHover dark:hover:border-accentBorderHover-dark hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark transition-all duration-200 text-left"
						>
							<div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${c.color} shrink-0`} />
							<div className="flex-1 min-w-0">
								<span className="font-semibold text-sm text-accentTextContrast dark:text-accentTextContrast-dark block">{c.name}</span>
								<span className="text-xs text-gray-400 dark:text-gray-500 block truncate">{c.tagline}</span>
							</div>
							<svg
								className="w-4 h-4 text-accentSolid dark:text-accentText-dark shrink-0 group-hover:translate-x-0.5 transition-transform"
								fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
							>
								<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
							</svg>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
