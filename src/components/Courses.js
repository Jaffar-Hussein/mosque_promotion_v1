import Card from "./Card";
import CourseSVG from "../assets/course2.svg";
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

			name: "Tafsir",
			description:
				"Notre section de tafsir en français et en arabe propose des vidéos de commentaires pour approfondir votre compréhension des versets coraniques. Les vidéos sont présentées par des érudits renommés et couvrent le contexte historique, les nuances linguistiques et les implications théologiques de chaque verset.",
		},
		
		{
			id: 4,

			name: "Memorisation",
			description:
				"Notre application Musulmane du Coran utilise uniquement des vidéos publicitaires discrètes pour offrir une expérience utilisateur agréable. Les publicités sont soigneusement sélectionnées pour vous offrir des contenus pertinents et intéressants.",
		},
	];
	return (
		<div
			className='w-screen  bg-accentBase dark:bg-accentBase-dark space-y-3 relative
        '
		>
			<p className='text-4xl text-accentTextContrast dark:text-accentTextContrast-dark pt-5 '>
				Courses
			</p>
			<div className='w-full p-5 flex flex-col gap-5 items-center md:grid  md:grid-cols-3 md-p-2 md:gap-3 md:justify-items-center '>
				{courses.map((course) => {
					return (
						<div>
							<Card
								key={course.id}
								name={course.name}
								description={course.description}
								className='z-20'
							/>
						</div>
					);
				})}
			</div>
			<img
				src={CourseSVG}
				className='hidden dark:hidden md:absolute md:flex md:right-0 h-[100%]  md:top-0 md:z-10 fill-accentBase-dark dark:fill-accentBase'
			/>
			<img
				src={CourseSVG}
				className='hidden dark:hidden md:absolute md:flex md:left-0 md:rotate-180 h-[100%]  md:top-0 md:z-10 fill-accentBase-dark dark:fill-accentBase'
			/>
		</div>
	);
}
export default Courses;
