import Card from "./Card";
import { courses } from "../data/courseData";

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
							slug={course.slug}
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
