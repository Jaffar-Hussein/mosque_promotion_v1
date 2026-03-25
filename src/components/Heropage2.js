import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YOUTUBE_URL = "https://www.youtube.com/embed/JFsznAyAEMY";

function Heropage2() {
	const [videoSrc, setVideoSrc] = useState(YOUTUBE_URL);

	return (
		<AnimatePresence>
			<section
				id='home'
				className='bg-accentBgSubtle dark:bg-accentBgSubtle-dark pb-16 pt-8 px-4'
			>
				<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
					<motion.div
						className='flex flex-col gap-6'
						initial={{ x: "-100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
					>
						<h1 className='text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight'>
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-accentTextContrast via-accentText to-accentTextContrast dark:from-accentTextContrast-dark dark:via-accentText-dark dark:to-accentTextContrast-dark'>
								Discover The Beauty of Islam
							</span>
						</h1>
						<p className='text-lg text-accentText dark:text-accentText-dark leading-8 max-w-lg'>
							Join our Islamic Learning Website today and dive into a wealth of
							knowledge about the faith. Enhance your understanding, deepen your
							faith, and connect with a community of like-minded individuals.
						</p>
						<div className='flex flex-wrap gap-4'>
							<button
								className='inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg
								text-white bg-accentSolid border border-accentLine hover:bg-accentSolidHover
								focus:ring-2 focus:outline-none focus:ring-accentBorder
								dark:bg-accentSolid-dark dark:border-accentLine-dark dark:hover:bg-accentSolidHover-dark dark:focus:ring-accentBorder-dark
								transition-colors duration-200'
								onClick={() => setVideoSrc(YOUTUBE_URL + "?autoplay=1")}
							>
								<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
								</svg>
								Watch Our Video
							</button>
							<a
								href='#courses'
								className='inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg
								text-accentTextContrast dark:text-accentTextContrast-dark
								border border-accentBorder dark:border-accentBorder-dark
								hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark
								focus:ring-2 focus:outline-none focus:ring-accentBorder
								transition-colors duration-200'
							>
								Explore Courses
							</a>
						</div>
					</motion.div>

					<motion.div
						className='w-full'
						initial={{ x: "100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", duration: 0.9, bounce: 0.3 }}
					>
						<iframe
							title='Introduction to Islamic Education'
							className='w-full aspect-video rounded-xl shadow-lg dark:shadow-accentSolid-dark'
							src={videoSrc}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</motion.div>
				</div>
			</section>
		</AnimatePresence>
	);
}

export default Heropage2;
