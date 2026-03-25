function Card({ description, name, index }) {
	const num = String(index + 1).padStart(2, "0");

	return (
		<div className="group relative flex flex-col bg-white dark:bg-accentBg-dark rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-accentLine-dark transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
			{/* Gold + green top accent bar */}
			<div className="h-1.5 w-full bg-gradient-to-r from-accentSolid via-accentBorderHover to-gold" />

			<div className="flex flex-col gap-4 p-6 flex-1">
				{/* Header row */}
				<div className="flex items-start justify-between gap-3">
					<h3 className="font-heading text-2xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark leading-snug">
						{name}
					</h3>
					<span className="shrink-0 text-4xl font-black text-accentBgActive dark:text-accentBgActive-dark select-none font-heading leading-none">
						{num}
					</span>
				</div>

				{/* Description */}
				<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 line-clamp-4">
					{description}
				</p>

				{/* Footer */}
				<div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100 dark:border-accentLine-dark">
					<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accentText dark:text-accentText-dark bg-accentBg dark:bg-accentBgHover-dark px-3 py-1 rounded-full">
						<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
						</svg>
						Free
					</span>
					<a
						href="#newsletter"
						className="inline-flex items-center gap-1.5 text-sm font-semibold text-accentSolid dark:text-accentText-dark hover:text-accentSolidHover transition-colors duration-200 group/link"
					>
						Enrol Now
						<svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
