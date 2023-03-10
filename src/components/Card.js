function Card({description,name}) {
	return (
		<div class='max-w-sm  p-6 aspect-1/3 bg-accentBg dark:bg-accentBg-dark border border-accentBorder dark:border-accent-accentBorder-dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<a href='#'>
				<h5 class='mb-2 text-2xl font-bold tracking-tight text-accentTextContrast dark:text-accentTextContrast-dark '>
					{name}
				</h5>
			</a>
			<p class='mb-3 font-normal text-accentText dark:text-accentText-dark dark:text-gray-400'>
				{description}
			</p>
			<a
				href='#'
				class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
                bg-accentSolid border-accentLine  hover:bg-accentSolidHover  focus:ring-accentBorder
                dark:bg-accentSolid-dark dark:border-accentLine-dark dark:hover:bg-accentSolidHover-dark  dark:focus:ring-2 dark:focus:ring-accentBgHover-dark

                '
			>
				Read more
				<svg
					aria-hidden='true'
					class='w-4 h-4 ml-2 -mr-1'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clip-rule='evenodd'
					></path>
				</svg>
			</a>
		</div>
	);
}
export default Card;