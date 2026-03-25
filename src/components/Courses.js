import Card from "./Card";

const courses = [
	{
		id: 1,
		name: "Tajwid",
		description:
			"Learn the rules of correct Quranic recitation — pronunciation of letters, their characteristics, and the traditional methods passed down through generations of scholars.",
	},
	{
		id: 2,
		name: "Tafsir",
		description:
			"Deepen your understanding of Quranic verses through expert commentary, exploring historical context, linguistic nuances, and the theological meaning of each passage.",
	},
	{
		id: 3,
		name: "Memorisation",
		description:
			"Commit the words of Allah to heart with our structured memorisation program, guided by qualified teachers who support you at every stage of your journey.",
	},
];

function Courses() {
	return (
		<section id="courses" className="bg-gray-50 dark:bg-accentBgSubtle-dark py-20 px-4">
			<div className="max-w-6xl mx-auto">

				{/* Section header */}
				<div className="text-center mb-14">
					<span className="text-xs font-semibold tracking-[0.2em] uppercase text-accentSolid dark:text-accentText-dark">
						What We Offer
					</span>
					<h2 className="font-heading mt-3 text-3xl md:text-4xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark">
						Our Courses
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
						Structured, free Islamic education designed for every level of learner.
					</p>
					<div className="mt-5 flex items-center justify-center gap-3">
						<div className="h-px w-10 bg-accentBorder dark:bg-accentBorder-dark" />
						<div className="w-2 h-2 rounded-full bg-accentSolid dark:bg-accentSolid-dark" />
						<div className="h-px w-10 bg-accentBorder dark:bg-accentBorder-dark" />
					</div>
				</div>

				{/* Cards */}
				<div className="grid gap-8 md:grid-cols-3">
					{courses.map((course, index) => (
						<Card
							key={course.id}
							name={course.name}
							description={course.description}
							index={index}
						/>
					))}
				</div>

				{/* Bottom CTA */}
				<p className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
					All courses are completely free.{" "}
					<a href="#newsletter" className="text-accentSolid dark:text-accentText-dark font-semibold hover:underline underline-offset-2">
						Subscribe for updates →
					</a>
				</p>
			</div>
		</section>
	);
}

export default Courses;
