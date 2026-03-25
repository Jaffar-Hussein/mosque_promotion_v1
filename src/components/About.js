import quran from "../assets/quran.svg";

const stats = [
	{ value: "100%", label: "Free Forever" },
	{ value: "3+", label: "Courses" },
	{ value: "∞", label: "Community" },
];

function About() {
	return (
		<section id="about" className="bg-accentBgSubtle dark:bg-accentBgSubtle-dark py-20 px-4">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

				{/* Image column */}
				<div className="flex justify-center relative">
					{/* Decorative ring behind image */}
					<div aria-hidden="true" className="absolute w-72 h-72 rounded-full bg-accentBgActive dark:bg-accentBgActive-dark opacity-60 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
					<img
						src={quran}
						alt="Open Quran"
						className="relative h-[50vh] max-h-80 w-auto drop-shadow-2xl"
					/>
				</div>

				{/* Text column */}
				<div className="flex flex-col gap-6">
					<span className="text-sm font-semibold tracking-widest text-accentSolid dark:text-accentText-dark uppercase">
						Our Mission
					</span>
					<h2 className="text-3xl md:text-4xl font-extrabold text-accentTextContrast dark:text-accentTextContrast-dark leading-tight">
						Education for Every Muslim, Everywhere
					</h2>
					<p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
						At our Islamic Education platform, we believe quality Islamic learning
						should be accessible to everyone — regardless of background or
						financial means. Our mission is to spread the teachings of Islam and
						help individuals deepen their faith.
					</p>
					<p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
						Whether you're a complete beginner or looking to expand your knowledge,
						our courses and supportive community are here to guide you at every
						step of your journey.
					</p>

					{/* Stats */}
					<div className="grid grid-cols-3 gap-4 pt-4 border-t border-accentLine dark:border-accentLine-dark">
						{stats.map(({ value, label }) => (
							<div key={label} className="text-center">
								<p className="text-2xl font-extrabold text-accentTextContrast dark:text-accentTextContrast-dark">
									{value}
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
									{label}
								</p>
							</div>
						))}
					</div>

					<a
						href="#courses"
						className="inline-flex items-center gap-2 self-start font-semibold text-accentSolid dark:text-accentText-dark hover:text-accentSolidHover dark:hover:text-accentTextContrast-dark underline underline-offset-4 decoration-accentBorder transition-colors duration-200"
					>
						Browse our courses
						<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
