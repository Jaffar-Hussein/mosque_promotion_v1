import quran from "../assets/quran.svg";

function About() {
	return (
		<section id='about' className='bg-accentBgSubtle dark:bg-accentBgSubtle-dark py-16 px-4'>
			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
				<div className='flex justify-center'>
					<img src={quran} alt='Open Quran' className='h-[55vh] max-h-96 drop-shadow-xl' />
				</div>
				<div className='flex flex-col gap-6 text-accentText dark:text-accentText-dark'>
					<h2 className='text-3xl md:text-4xl font-bold text-accentTextContrast dark:text-accentTextContrast-dark'>
						About Our Mission
					</h2>
					<p className='text-base md:text-lg leading-8'>
						At our Islamic Education Website, we believe in providing quality
						education to everyone, regardless of their background or financial
						status. Our mission is to spread the teachings of Islam to as many
						people as possible and to help individuals deepen their faith and
						understanding of the religion.
					</p>
					<p className='text-base md:text-lg leading-8'>
						Whether you're a beginner or looking to expand your existing
						knowledge, our diverse range of courses — from the basics of Islam to
						advanced topics — will cater to your needs. Our supportive community
						also provides an opportunity for you to connect with other learners,
						exchange ideas, and grow together.
					</p>
					<a
						href='#courses'
						className='inline-flex items-center gap-2 self-start font-semibold text-accentSolid dark:text-accentText-dark hover:underline underline-offset-4 transition-colors duration-200'
					>
						Explore our courses
						<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
							<path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
