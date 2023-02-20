import Navbar from "./Navbar";
import { useState } from "react";
function Heropage2() {
	const youtube_link = "https://www.youtube.com/embed/JFsznAyAEMY";
	const [link, setLink] = useState(youtube_link);
	return (
		<div className='bg-accentBgSubtle h-fit font-sans dark:bg-accentBgSubtle-dark pb-7'>
			<Navbar /> {/* Hero page content  */}
			<div className='grid md:grid-cols-2 gap-3 mx-9 mt-6 py-6'>
				<div className='grid md:justify-items-start gap-3'>
					<h1 className='max-w-2xl md:mb-4 text-4xl font-extrabold tracking-widest leading-none md:text-5xl xl:text-6xl text-accentTextContrast dark:text-accentTextContrast-dark '>
						Discover The
					</h1>
					<h1 className='max-w-2xl md:mb-4 text-4xl text-accentTextContrast font-extrabold tracking-widest leading-none md:text-5xl xl:text-6xl dark:text-accentTextContrast-dark'>
						Beauty of Islam
					</h1>

					<p className='max-w-2xl mb-6 font-medium text-start text-accentText dark:text-accentText-dark leading-loose antialiased '>
						Join our Islamic Learning Website today and dive into a wealth of
						knowledge about the faith. Enhance your understanding, deepen your
						faith and connect with a community of like-minded individuals. Start
						today !
					</p>
					<a
						href='#'
						className='w-75 md:initial
                items-center text-decoration-white justify-center px-5 py-3  text-center ring-offset-2  border  rounded
                bg-accentSolid border-accentLine  hover:bg-accentSolidHover focus:ring-2 focus:ring-accentBorder
                dark:bg-accentSolid-dark dark:border-accentLine-dark dark:hover:bg-accentSolidHover-dark  dark:focus:ring-2 dark:focus:ring-accentBgHover-dark

                '
						onClick={() => setLink(youtube_link + "?autoplay=1")}
					>
						Watch Our Video
					</a>
				</div>
				<div className='mx-auto w-full md:w-[95%]'>
					<iframe
						className=' w-full aspect-video rounded-lg shadow-accentSolid dark:shadow-accentSolid-dark shadow-lg '
						src={link}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default Heropage2;
