function Verse() {
	return (
		<section className='relative bg-accentTextContrast dark:bg-accentBg-dark overflow-hidden py-20 px-4'>
			{/* Geometric pattern overlay */}
			<div
				aria-hidden='true'
				className='absolute inset-0 pattern-islamic-dark opacity-100'
			/>

			{/* Soft glow blobs */}
			<div aria-hidden='true' className='pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accentSolid/20 blur-3xl' />
			<div aria-hidden='true' className='pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl' />

			<div className='relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6'>
				{/* Label */}
				<span className='text-gold text-xs font-semibold tracking-[0.25em] uppercase'>
					The First Revelation
				</span>

				{/* Decorative top ornament */}
				<div className='flex items-center gap-3 text-gold/50'>
					<div className='h-px w-16 bg-gold/40' />
					<svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
						<path d='M7 0L8.5 5.5H14L9.5 8.5L11 14L7 11L3 14L4.5 8.5L0 5.5H5.5L7 0Z' fill='currentColor' className='text-gold/60' />
					</svg>
					<div className='h-px w-16 bg-gold/40' />
				</div>

				{/* Arabic verse — Surah Al-Alaq 96:1 */}
				<p
					dir='rtl'
					lang='ar'
					className='font-heading text-5xl md:text-6xl xl:text-7xl text-gold leading-loose tracking-wide'
					style={{ fontFeatureSettings: '"calt", "liga"' }}
				>
					اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
				</p>

				{/* Translation */}
				<p className='font-heading text-xl md:text-2xl text-accentTextContrast-dark/90 italic leading-relaxed'>
					"Recite in the name of your Lord who created"
				</p>

				{/* Reference */}
				<p className='text-accentBorderHover dark:text-accentBorderHover-dark text-sm font-medium tracking-wide'>
					— Surah Al-ʿAlaq, 96:1
				</p>

				{/* Decorative bottom ornament */}
				<div className='flex items-center gap-3 text-gold/50 mt-2'>
					<div className='h-px w-16 bg-gold/40' />
					<svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
						<path d='M7 0L8.5 5.5H14L9.5 8.5L11 14L7 11L3 14L4.5 8.5L0 5.5H5.5L7 0Z' fill='currentColor' className='text-gold/60' />
					</svg>
					<div className='h-px w-16 bg-gold/40' />
				</div>

				{/* Supporting text */}
				<p className='text-accentBorderHover dark:text-accentText-dark text-base max-w-xl leading-relaxed mt-2'>
					The very first word revealed to the Prophet ﷺ was a command to read
					and learn. Begin your own journey of knowledge today.
				</p>

				<a
					href='#courses'
					className='mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
					bg-gold hover:bg-gold-dark text-accentTextContrast
					shadow-lg shadow-gold/30 hover:shadow-gold/50
					transition-all duration-200'
				>
					Start Learning
					<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
						<path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
					</svg>
				</a>
			</div>
		</section>
	);
}

export default Verse;
