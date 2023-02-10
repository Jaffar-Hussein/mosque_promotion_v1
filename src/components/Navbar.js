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
                    <div className="float-right space-x-12  flex">
                        <a href="#" className="text-accentTextContrast hover:text-accentText">Home</a>
                        <a href="#" className="text-accentTextContrast hover:text-accentText">About us</a>
                        <a href="#" className="text-accentTextContrast hover:text-accentText">Courses</a>
                        <a href="#" className="text-accentTextContrast hover:text-accentText">Contact Us</a>
                    </div>
                </div>
                {/* Rest of Nav */}
            </div>
        </nav>
        </>
    )
}
export default Navbar;