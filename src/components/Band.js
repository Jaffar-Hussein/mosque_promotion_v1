function Band() {
	return (
		<div className=' h-48 relative'>
			<div className='absolute inset-0 grid'>
				<div className=' bg-accentBgSubtle dark:bg-accentBgSubtle-dark '></div>
				<div className=' bg-accentBase dark:bg-accentBase-dark'></div>
			</div>
			<div className='h-full flex w-3/4 gap-9 p-5 mx-auto'>
				<div
					className='
				bg-accentBg dark:bg-accentBg-dark rounded-xl dark:text-accentText-dark 
				text-accentText  hover:shadow-inner hover:scale-110 ease-in-out duration-300 
				hover:shadow-accentBgActive dark:hover:accentBgActive-dark/10
				m-auto  isolate h-full w-full'
				>
					lorem15
				</div>
				<div
					className='
					bg-accentBg dark:bg-accentBg-dark rounded-xl dark:text-accentText-dark 
					text-accentText  hover:shadow-inner hover:scale-110 ease-in-out duration-300 
					hover:shadow-accentBgActive dark:hover:accentBgActive-dark/10
					m-auto  isolate h-full w-full'
				>
					lorem15
				</div>
				<div className='
				bg-accentBg dark:bg-accentBg-dark rounded-xl dark:text-accentText-dark 
				text-accentText  hover:shadow-inner hover:scale-110 ease-in-out duration-300 
				hover:shadow-accentBgActive dark:hover:accentBgActive-dark/10
				m-auto  isolate h-full w-full
				'>
					lorem15
				</div>
			</div>
		</div>
	);
}
export default Band;
