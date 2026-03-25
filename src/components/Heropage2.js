import { useState } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "JFsznAyAEMY";
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

function VideoPlayer() {
	const [playing, setPlaying] = useState(false);

	if (playing) {
		return (
			<iframe
				title="Introduction to Islamic Education"
				className="w-full aspect-video rounded-2xl shadow-2xl"
				src={`${EMBED_URL}?autoplay=1&rel=0&modestbranding=1`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			/>
		);
	}

	return (
		<button
			aria-label="Play introduction video"
			onClick={() => setPlaying(true)}
			className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl focus:outline-none focus:ring-4 focus:ring-accentBorder"
		>
			<img
				src={THUMBNAIL_URL}
				alt="Video thumbnail — Introduction to Islamic Education"
				className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
			{/* Play button */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="bg-white/95 dark:bg-gray-900/95 rounded-full w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
					<svg className="w-8 h-8 text-accentSolid ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M8 5v14l11-7z" />
					</svg>
				</div>
			</div>
			{/* Badge */}
			<div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
				Watch Introduction
			</div>
		</button>
	);
}

function Heropage2() {
	return (
		<section
			id="home"
			className="relative bg-gradient-to-br from-accentBgSubtle via-accentBase to-accentBg dark:from-accentBase-dark dark:via-accentBgSubtle-dark dark:to-accentBg-dark overflow-hidden"
		>
			{/* Decorative circle blurs */}
			<div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accentBgActive dark:bg-accentBgActive-dark opacity-40 blur-3xl" />
			<div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accentBgActive dark:bg-accentBgActive-dark opacity-30 blur-3xl" />

			<div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

				{/* Text column */}
				<motion.div
					className="flex flex-col gap-7"
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					{/* Badge */}
					<span className="inline-flex items-center gap-2 self-start bg-accentBg dark:bg-accentBg-dark border border-accentBorder dark:border-accentBorder-dark text-accentText dark:text-accentText-dark text-sm font-medium px-4 py-1.5 rounded-full">
						<span className="w-2 h-2 rounded-full bg-accentSolid dark:bg-accentSolid-dark animate-pulse" />
						Free Islamic Education
					</span>

					<h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-accentTextContrast dark:text-accentTextContrast-dark">
						Discover The{" "}
						<span className="relative">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-accentSolid to-accentText dark:from-accentSolid-dark dark:to-accentText-dark">
								Beauty
							</span>
						</span>{" "}
						of Islam
					</h1>

					<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
						Join thousands of learners deepening their faith through our free,
						expert-led courses in Tajwid, Tafsir, and Quran Memorisation.
						Start learning today — at your own pace, from anywhere.
					</p>

					<div className="flex flex-wrap gap-4 pt-1">
						<a
							href="#courses"
							className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white rounded-xl
							bg-accentSolid hover:bg-accentSolidHover
							shadow-lg shadow-accentSolid/30 hover:shadow-accentSolid/50
							focus:ring-2 focus:outline-none focus:ring-accentBorder
							transition-all duration-200"
						>
							Explore Courses
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
							</svg>
						</a>
						<a
							href="#about"
							className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold rounded-xl
							text-accentTextContrast dark:text-accentTextContrast-dark
							border-2 border-accentBorder dark:border-accentBorder-dark
							hover:bg-accentBgHover dark:hover:bg-accentBgHover-dark
							focus:ring-2 focus:outline-none focus:ring-accentBorder
							transition-all duration-200"
						>
							Learn More
						</a>
					</div>

					{/* Trust badges */}
					<div className="flex flex-wrap gap-6 pt-2 text-sm text-gray-500 dark:text-gray-400">
						{["100% Free", "Expert Scholars", "Join Anytime"].map((item) => (
							<span key={item} className="flex items-center gap-1.5">
								<svg className="w-4 h-4 text-accentSolid dark:text-accentSolid-dark" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								{item}
							</span>
						))}
					</div>
				</motion.div>

				{/* Video column */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
				>
					<VideoPlayer />
				</motion.div>
			</div>
		</section>
	);
}

export default Heropage2;
