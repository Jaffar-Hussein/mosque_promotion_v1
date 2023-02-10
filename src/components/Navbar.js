import logo from '../assets/m.svg'
import logo_dark from '../assets/logo.svg'
function Navbar(){
    console.log(localStorage.getItem('color-theme'));
    return (
        <>
        <nav className="container mx-auto p-6 ">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <img src={logo} alt="logo" className='hidden dark:inline'></img>
                        <img src={logo_dark} alt="logo" className='inline dark:hidden'></img>

                    </div>
                    {/* Colour Toggler */}
                    <div className='md:hidden stroke-2 text-lg'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

                    </div>
                    <div className="hidden md:flex float-right space-x-12  ">
                        <a href="#" className="text-accentTextContrast dark:text-accentTextContrast-dark font-medium hover:text-accentText dark:hover:text-accentText-dark">Home</a>
                        <a href="#" className="text-accentTextContrast dark:text-accentTextContrast-dark font-medium hover:text-accentText dark:hover:text-accentText-dark">About us</a>
                        <a href="#" className="text-accentTextContrast dark:text-accentTextContrast-dark font-medium hover:text-accentText dark:hover:text-accentText-dark">Courses</a>
                        <a href="#" className="text-accentTextContrast dark:text-accentTextContrast-dark font-medium hover:text-accentText dark:hover:text-accentText-dark">Contact Us</a>
                        <div className="flex">
                        <input type="checkbox" id="dark-mode-toggle" className="hidden"  onChange={()=>document.documentElement.classList.toggle('dark')}/>
                        <label htmlFor="dark-mode-toggle" className="w-full h-full transition-transform bg-gray-800 dark:bg-white rounded-full p-1 flex justify-between cursor-pointer">
                            <span className="inline dark:hidden">🌞</span>
                            <span className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 block float-right dark:float-left"></span>
                            <span className="hidden dark:inline">🌛</span>
                        </label>
                    </div>
                    </div>
                </div>
                {/* Rest of Nav */}
            </div>
        </nav>
        </>
    )
}
export default Navbar;


