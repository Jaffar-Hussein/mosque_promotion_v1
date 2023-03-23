import quran from "../assets/quran.svg";
function About() {
	return (
		<div className='bg-accentBgSubtle dark:bg-accentBgSubtle-dark h-content md:h-[80vh] grid px-2 md:grid md:grid-cols-2  md:content-center'>
			<div className="max-h-full mx-auto ">
				<img src={quran} alt='quran' className='h-[60vh]' />
			</div>
			<div
				className='flex flex-col text-justify dark:text-accentText-dark 
				text-accentText space-y-2 px-2'
			> 
				<p className='text-base'>
					At our Islamic Education Website, we believe in providing quality
					education to everyone, regardless of their background or financial
					status. Our mission is to spread the teachings of Islam to as many
					people as possible and to help individuals deepen their faith and
					understanding of the religion.
				</p>
				<p className='text-base'>
					Whether you're a beginner or looking to expand your existing
					knowledge, our diverse range of courses, from the basics of Islam to
					advanced topics, will cater to your needs. Our supportive community
					also provides an opportunity for you to connect with other learners,
					exchange ideas, and grow together in your understanding of the
					religion.
				</p>
                <a class="underline decoration-pink-500 text-justify dark:text-accentText-dark 
				text-accentText">Read More</a> 
			</div>
		</div>
	);
}

export default About;
