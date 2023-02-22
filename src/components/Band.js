function Band() {
	return (
		<div className=' h-content md:h-48 relative'>
			<div className='hidden md:grid absolute inset-0 '>
				<div className='bg-accentBase  md:bg-accentBgSubtle dark:bg-accentBgSubtle-dark '></div>
				<div className=' bg-accentBase dark:bg-accentBase-dark'></div>
			</div>
			<div className='h-full flex flex-col md:flex-row w-3/4 gap-9 p-3 md:p-5 mx-auto transition-colors ease-in-out delay-150 '>
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

						<p className=''>Upto date lessons and resources</p>
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
								d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
							/>
						</svg>

						<p>Experienced Instructors</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Band;
