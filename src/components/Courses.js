import Card from "./Card";

const courses = [
	{
		id: 1,
		name: "Tajwid",
		description:
			"Learn the rules of correct Quranic recitation — pronunciation of letters, characteristics, and the traditional methods passed down through generations of scholars.",
	},
	{
		id: 2,
		name: "Tafsir",
		description:
			"Deepen your understanding of Quranic verses through expert commentary, exploring historical context, linguistic nuances, and theological meaning of each passage.",
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
		<section id="courses" className="bg-gray-50 dark:bg-accentBase-dark py-20 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Section header */}
				<div className="text-center mb-14">
					<span className="text-sm font-semibold tracking-widest text-accentSolid dark:text-accentText-dark uppercase">
						What We Offer
					</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-accentTextContrast dark:text-accentTextContrast-dark">
						Our Courses
					</h2>
					<p className="mt-4 text-gray-500 dark:text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
						Structured, free Islamic education designed for every level of learner.
					</p>
					<div className="mt-5 mx-auto w-12 h-1 rounded-full bg-accentSolid dark:bg-accentSolid-dark" />
				</div>

				{/* Cards grid */}
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
				<div className="mt-12 text-center">
					<p className="text-gray-500 dark:text-gray-400 text-sm">
						All courses are completely free.{" "}
						<a href="#contact" className="text-accentSolid dark:text-accentText-dark font-semibold hover:underline underline-offset-2">
							Get in touch to enrol →
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Courses;
