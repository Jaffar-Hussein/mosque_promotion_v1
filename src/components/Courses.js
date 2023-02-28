import Card from "./Card";
function Courses() {
	const courses = [
		{
			id: 1,
			name: "Tajwid",
			description:
				"In the context of the recitation of the Quran, tajwīd is a set of rules for the correct pronunciation of the letters with all their qualities and applying the various traditional methods of recitation.",
		},
		{
			id: 2,

			name: "Tajwid",
			description:
				"In the context of the recitation of the Quran, tajwīd is a set of rules for the correct pronunciation of the letters with all their qualities and applying the various traditional methods of recitation.",
		},
		{
			id: 3,

			name: "Tajwid",
			description:
				"In the context of the recitation of the Quran, tajwīd is a set of rules for the correct pronunciation of the letters with all their qualities and applying the various traditional methods of recitation.",
		},
	];
	return (
		<div
			className='min-h-[50vh]  bg-accentBase dark:bg-accentBase-dark
        '
		>
			<p className='text-4xl text-accentTextContrast dark:text-accentTextContrast-dark'>
				Courses
			</p>
			{/* <div className=" flex flex-no-wrap gap-3 nap-x  snap-mandatory overflow-x-scroll scrolling-touch items-start mb-8 md:grid md:grid-cols-3 md:p-5  md:gap-3 mx-auto justify-items-center"> */}
			<div className='relative w-full flex gap-6 snap-x snap-proximity overflow-x-auto p-14 scrolling-touch  md:grid md:grid-cols-3 md:gap-3 mx-auto justify-items-center md:overflow-hidden md:p-5 md:snap-none '>
				{courses.map((course) => {
					return (
						<div class='snap-center shrink-0 md:w-12 md:flex-grow-0 md:snap-none'>
							<Card
								key={course.id}
								name={course.name}
								description={course.description}
								className='shrink-0'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;
