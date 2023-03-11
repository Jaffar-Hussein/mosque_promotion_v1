function Subscription() {
	return (
		<div className='h-96 w-screen relative bg-accentBorderHover mt-8 z-0 overflow-hidden'>
			<div className="flex flex-col h-full justify-evenly p-5">

            <p className=' text-4xl tracking-wide  font-light'>
				Subsribe to our Newsletter
			</p>
            <form>
				<input type='text' className='w-[40rem] text-xl leading-4 focus-visible:ring-0 h-24 bg-initial border-4 border-accentLine-special focus:outline-none focus:ring focus:border-accentLine' />
				<button type='submit' class='text-accentTextContrast text-xl leading-4 w-64 h-24 border-spacing-4 bg-accentLine-special tracking-wide '>
					Subscribe
				</button>
			</form>

            </div>

			
			<div
				className=' rounded-full w-60 h-60 absolute  top-20 -left-36
            -z-30 bg-gradient-to-r from-accentBg-dark to-accentText '
			></div>
			
			<div className='rounded-full w-60 h-60 absolute top-20 -right-36 z-30 bg-gradient-to-r from-accentText to-accentBg-dark'></div>
			<div className=' h-96 opacity-10  absolute  top-[50%] left-[50%] bg-accentBgSubtle -rotate-45 z-10'></div>
		</div>
	);
}
export default Subscription;
