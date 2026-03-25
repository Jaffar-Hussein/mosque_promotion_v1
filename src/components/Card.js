function Card({ description, name }) {
	return (
		<div className='max-w-sm p-6 bg-accentBg dark:bg-accentBg-dark border border-accentBorder dark:border-accentBorder-dark rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4'>
			<h5 className='text-2xl font-bold tracking-tight text-accentTextContrast dark:text-accentTextContrast-dark'>
				{name}
			</h5>
			<p className='font-normal text-accentText dark:text-accentText-dark leading-relaxed flex-1'>
				{description}
			</p>
			<a
				href='#courses'
				className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg self-start
				bg-accentSolid border border-accentLine hover:bg-accentSolidHover focus:ring-2 focus:outline-none focus:ring-accentBorder
				dark:bg-accentSolid-dark dark:border-accentLine-dark dark:hover:bg-accentSolidHover-dark dark:focus:ring-accentBorder-dark
				transition-colors duration-200'
			>
				Learn more
				<svg
					aria-hidden='true'
					className='w-4 h-4'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'
					></path>
				</svg>
			</a>
		</div>
	);
}
export default Card;
