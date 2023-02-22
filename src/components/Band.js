function Band() {
	return (
		<div className=' h-48 relative'>
			<div className='absolute inset-0 grid'>
				<div className=' bg-accentBgSubtle dark:bg-accentBgSubtle-dark '></div>
				<div className=' bg-accentBase dark:bg-accentBase-dark'></div>
			</div>
			<div className='h-full flex w-3/4 gap-9 p-5 mx-auto transition-colors ease-in-out delay-150'>
				<div
					className='
				bg-accentBg dark:bg-accentBg-dark rounded-xl dark:text-accentText-dark 
				text-accentText  hover:shadow-inner hover:scale-110 ease-in-out duration-300 
				hover:shadow-accentBgActive dark:hover:accentBgActive-dark/10
				m-auto  isolate h-full w-full'
				>
					<div className='flex h-full flex-col content-center items-center my-auto space-y-4 p-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-20 h-20 stroke-accentTextContrast  dark:stroke-accentTextContrast-dark' 
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>

						<p>The program is free and online</p>
					</div>
				</div>
				<div
					className='
					bg-accentBg dark:bg-accentBg-dark rounded-xl dark:text-accentText-dark 
					text-accentText  hover:shadow-inner hover:scale-110 ease-in-out duration-300 
					hover:shadow-accentBgActive dark:hover:accentBgActive-dark/10
					m-auto  isolate h-full w-full'
				>
					<div className='flex h-fill flex-col content-center items-center my-auto space-y-4 p-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-20 h-20 stroke-accentTextContrast dark:stroke-accentTextContrast-dark'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
							/>
						</svg>

						<p className="">The program is free and online</p>
					</div>
				</div>
				<div
					className='
				bg-accentBg dark:bg-accentBg-dark rounded-xl dark:text-accentText-dark 
				text-accentText  hover:shadow-inner hover:scale-110 ease-in-out duration-300 
				hover:shadow-accentBgActive dark:hover:accentBgActive-dark/10
				m-auto  isolate h-full w-full
				'
				>
					<div className='flex h-full flex-col content-center items-center my-auto space-y-4 p-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-20 h-20 stroke-accentTextContrast dark:stroke-accentTextContrast-dark'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>

						<p>The program is free and online</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Band;
