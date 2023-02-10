import logo from '../assets/logo.svg'
function Navbar(){
    return (
        <>
        <nav className="container mx-auto p-6 bg-accentBgSubtle">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center justify-between w-full">
                    <div className="text-accentTextContrast">
                        <img src={logo} alt="logo"></img>
                    </div>
                    {/* Colour Toggler */}
             
                    <div className="hidden md:flex float-right space-x-12  ">
                        <a href="#" className="text-accentTextContrast font-medium hover:text-accentText">Home</a>
                        <a href="#" className="text-accentTextContrast font-medium hover:text-accentText">About us</a>
                        <a href="#" className="text-accentTextContrast font-medium hover:text-accentText">Courses</a>
                        <a href="#" className="text-accentTextContrast font-medium hover:text-accentText">Contact Us</a>
                        <div className="w-14 h-8">
                        {/* <input type="checkbox" id="dark-mode-toggle" className="hidden" onChange="document.documentElement.classList.toggle('dark')" /> */}
                        <input type="checkbox" id="dark-mode-toggle" className="hidden"  />
                        <label htmlFor="dark-mode-toggle" className="w-full h-full bg-gray-800 dark:bg-white rounded-full p-1 flex justify-between cursor-pointer">
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