import Card from "./Card";

const courses = [
	{
		id: 1,
		name: "Tajwid",
		description:
			"In the context of the recitation of the Quran, tajwīd is a set of rules for the correct pronunciation of the letters with all their qualities and applying the various traditional methods of recitation.",
	},
	{
		id: 2,
		name: "Tafsir",
		description:
			"Our Tafsir section offers video commentaries in French and Arabic to deepen your understanding of Quranic verses, presented by renowned scholars covering historical context, linguistic nuances, and theological implications.",
	},
	{
		id: 3,
		name: "Memorisation",
		description:
			"Our Quran memorisation program provides structured lessons and guidance to help you commit the words of Allah to heart, with support from experienced teachers at every step of your journey.",
	},
];

function Courses() {
	return (
		<section id='courses' className='bg-accentBase dark:bg-accentBase-dark py-16 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark'>
						Our Courses
					</h2>
					<p className='mt-3 text-accentText dark:text-accentText-dark text-lg max-w-xl mx-auto'>
						Free, structured Islamic education for every level.
					</p>
					<div className='mt-4 mx-auto w-16 h-1 rounded-full bg-accentSolid dark:bg-accentSolid-dark'></div>
				</div>
				<div className='grid gap-6 md:grid-cols-3'>
					{courses.map((course) => (
						<Card
							key={course.id}
							name={course.name}
							description={course.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Courses;
