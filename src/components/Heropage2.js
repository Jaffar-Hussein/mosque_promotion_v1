import Navbar from "./Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Heropage2() {
	const youtube_link = "https://www.youtube.com/embed/JFsznAyAEMY";
	const [link, setLink] = useState(youtube_link);
	return (
		<AnimatePresence>
			<div
				className='bg-accentBgSubtle h-fit font-sans dark:bg-accentBgSubtle-dark pb-7'
				// initial={{ opacity: 0 }}
				// whileInView={{ opacity: 1 }}
				// initial={{x : '-100vw'}}
				// animate={{x:0}}
				// transition={{ type:'spring',duration:1,bounce:0.3}}
			>
				<Navbar /> {/* Hero page content  */}
				<div className='grid md:grid-cols-2 gap-3 mx-2 md:mx-9  py-6 sm:px-1.5'>
					<motion.div
						className='grid md:justify-items-start gap-3 '
						initial={{ x: "-100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", duration: 3, bounce: 0.3 }}
					>
						<h1 className='max-w-2xl md:mb-4 text-4xl leading-10 sm:max-md:leading-5 font-extrabold tracking-widest  md:text-5xl xl:text-6xl text-left '>
							<span
								className=' bg-clip-text text-transparent  bg-gradient-to-r
						 from-accentTextContrast via-accentText to-accentTextContrast dark:from-accentTextContrast-dark dark:via-accentText-dark dark:to-accentTextContrast-dark'
							>
								Discover The Beauty of Islam
							</span>
						</h1>
						{/* <h1 className='max-w-2xl md:mb-4 text-4xl text-accentTextContrast font-extrabold tracking-widest leading-none md:text-5xl xl:text-6xl dark:text-accentTextContrast-dark'>
							Beauty of Islam
						</h1> */}

						<p className=' max-w-2xl mb-6 font-medium text-base text-start text-accentText dark:text-accentText-dark leading-loose antialiased '>
							Join our Islamic Learning Website today and dive into a wealth of
							knowledge about the faith. Enhance your understanding, deepen your
							faith and connect with a community of like-minded individuals.
							Start today !
						</p>
						<a
							href='#'
							className=' w-75 md:w-fit md:inline-flex font-medium text-accentTextContrast tracking-wider
                items-center text-decoration-none  px-5 py-3    ring-offset-2  border  rounded dark:text-accentTextContrast-dark
                bg-accentSolid border-accentLine  hover:bg-accentSolidHover focus:ring-2 focus:ring-accentBorder
                dark:bg-accentSolid-dark dark:border-accentLine-dark dark:hover:bg-accentSolidHover-dark  dark:focus:ring-2 dark:focus:ring-accentBgHover-dark

                '
							onClick={() => setLink(youtube_link + "?autoplay=1")}
						>
							<span>Watch Our Video</span>
							
						</a>
					</motion.div>
					<motion.div
						className='mx-auto w-full md:w-[95%]'
						initial={{ x: "100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", duration: 4, bounce: 0.3 }}
					>
						<iframe
							title='youtube-video'
							className=' w-full aspect-video  rounded-md md:rounded-lg md:shadow-accentSolid md:dark:shadow-accentSolid-dark shadow-lg '
							src={link}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
	);
}

export default Heropage2;
