import quran from "../assets/quran.svg";
function About() {
	return (
		<div className='bg-accentBgSubtle dark:bg-accentBgSubtle-dark h-[80vh] grid px-2 md:grid-cols-2 md:content-center'>
			<div>
				<img src={quran} alt='quran' className='hidden md:block ' />
			</div>
			<div
				className='text-justify dark:text-accentText-dark 
				text-accentText '
			>
				<p className='text-xl max-w-prose'>
					At our Islamic Education Website, we believe in providing quality
					education to everyone, regardless of their background or financial
					status. Our mission is to spread the teachings of Islam to as many
					people as possible and to help individuals deepen their faith and
					understanding of the religion.
				</p>
				<p className='text-xl max-w-prose'>
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
