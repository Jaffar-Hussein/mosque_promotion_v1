import { motion, useReducedMotion } from "framer-motion";

const highlights = [
	{
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
			</svg>
		),
		title: "Tajwid",
		desc: "Master the rules of Quranic recitation with expert guidance.",
	},
	{
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
			</svg>
		),
		title: "Tafsir",
		desc: "Understand the deep meaning and context of Quranic verses.",
	},
	{
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
			</svg>
		),
		title: "Memorisation",
		desc: "Commit the Quran to heart with structured, teacher-led programmes.",
	},
];

function CourseHighlights() {
	return (
		<div className="flex flex-col gap-4">
			{highlights.map((h) => (
				<div
					key={h.title}
					className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 dark:bg-accentBg-dark/70 backdrop-blur-sm border border-accentLine/60 dark:border-accentLine-dark shadow-sm hover:shadow-md transition-shadow duration-200"
				>
					<div className="shrink-0 w-11 h-11 rounded-xl bg-accentBg dark:bg-accentBgHover-dark flex items-center justify-center text-accentSolid dark:text-accentText-dark">
						{h.icon}
					</div>
					<div>
						<p className="font-heading font-bold text-accentTextContrast dark:text-accentTextContrast-dark leading-snug">
							{h.title}
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
							{h.desc}
						</p>
					</div>
					<a
						href="#courses"
						aria-label={`Learn more about ${h.title}`}
						className="ml-auto shrink-0 self-center text-accentSolid dark:text-accentText-dark hover:text-accentSolidHover transition-colors"
					>
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</a>
				</div>
			))}
		</div>
	);
}

function Heropage2() {
	const reduceMotion = useReducedMotion();

	const fadeSlideLeft = reduceMotion
		? { initial: {}, animate: {}, transition: {} }
		: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, ease: "easeOut" } };

	const fadeSlideRight = reduceMotion
		? { initial: {}, animate: {}, transition: {} }
		: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, ease: "easeOut", delay: 0.15 } };

	return (
		<section
			id="home"
			className="relative bg-gradient-to-br from-accentBgSubtle via-accentBase to-accentBg dark:from-accentBase-dark dark:via-accentBgSubtle-dark dark:to-accentBg-dark overflow-hidden"
		>
			{/* Islamic geometric pattern */}
			<div aria-hidden="true" className="absolute inset-0 pattern-islamic opacity-60 dark:hidden" />
			<div aria-hidden="true" className="absolute inset-0 pattern-islamic-dark opacity-100 hidden dark:block" />

			{/* Soft glow blobs */}
			<div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accentBgActive dark:bg-accentBgActive-dark opacity-50 blur-3xl" />
			<div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gold/10 opacity-60 blur-3xl" />

			<div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

				{/* Text column */}
				<motion.div
					className="flex flex-col gap-7"
					initial={fadeSlideLeft.initial}
					animate={fadeSlideLeft.animate}
					transition={fadeSlideLeft.transition}
				>
					{/* Badge */}
					<span className="inline-flex items-center gap-2 self-start bg-white/80 dark:bg-accentBg-dark/80 border border-accentBorder dark:border-accentBorder-dark text-accentText dark:text-accentText-dark text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
						<span className="w-2 h-2 rounded-full bg-accentSolid dark:bg-accentSolid-dark animate-pulse" />
						Free Islamic Education
					</span>

					<h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-accentTextContrast dark:text-accentTextContrast-dark">
						Discover The{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-accentSolid to-accentText dark:from-accentSolid-dark dark:to-accentText-dark">
							Beauty
						</span>{" "}
						of Islam
					</h1>

					<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
						Join thousands of learners deepening their faith through our free,
						expert-led courses in Tajwid, Tafsir, and Quran Memorisation —
						at your own pace, from anywhere in the world.
					</p>

					<div className="flex flex-wrap gap-4 pt-1">
						<a
							href="#courses"
							className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-white rounded-xl
							bg-accentSolid hover:bg-accentSolidHover
							shadow-lg shadow-accentSolid/30 hover:shadow-accentSolid/50
							focus:ring-2 focus:outline-none focus:ring-accentBorder
							transition-all duration-200"
						>
							Explore Courses
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
							</svg>
						</a>
						<a
							href="#about"
							className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl
							text-accentTextContrast dark:text-accentTextContrast-dark
							border-2 border-accentBorder dark:border-accentBorder-dark
							bg-white/60 dark:bg-transparent
							hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark
							focus:ring-2 focus:outline-none focus:ring-accentBorder
							transition-all duration-200 backdrop-blur-sm"
						>
							Learn More
						</a>
					</div>

					{/* Trust badges */}
					<div className="flex flex-wrap gap-6 pt-2 text-sm text-gray-500 dark:text-gray-400 border-t border-accentLine/50 dark:border-accentLine-dark/50 pt-6">
						{["100% Free", "Expert Scholars", "Join Anytime"].map((item) => (
							<span key={item} className="flex items-center gap-1.5">
								<svg className="w-4 h-4 text-accentSolid dark:text-accentSolid-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								{item}
							</span>
						))}
					</div>
				</motion.div>

				{/* Video column */}
				<motion.div
					initial={fadeSlideRight.initial}
					animate={fadeSlideRight.animate}
					transition={fadeSlideRight.transition}
				>
					<CourseHighlights />
				</motion.div>
			</div>
		</section>
	);
}

export default Heropage2;
