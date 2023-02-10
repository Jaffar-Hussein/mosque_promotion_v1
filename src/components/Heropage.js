import Navbar from "./Navbar"

function Heropage(){
    return (
        <div className="bg-accentBgSubtle h-fit font-sans dark:bg-accentBgSubtle-dark">
        <Navbar/>
        {/* Hero page content  */}
        <div className=" flex flex-col md:grid grid-cols-2 gap-4 p-12 mt-2 mx-5 justify-center">
            <div className="grid md:justify-items-start gap-3">
                <h1 className="max-w-2xl md:mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-accentTextContrast dark:text-accentTextContrast-dark ">Discover The</h1>
                <h1 className="max-w-2xl mb-4 text-4xl text-accentTextContrast font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-accentTextContrast-dark">Beauty of Islam</h1>

                <p className="max-w-2xl mb-6 font-medium text-start text-accentText dark:text-accentText-dark ">Join our Islamic Learning Website today and dive into a wealth of knowledge about the faith. Enhance your understanding, deepen your faith and connect with a community of like-minded individuals. Start today !</p>
                <a href="#" className="items-center text-decoration-white justify-center px-5 py-3  text-center  border rounded bg-accentSolid border-accentBorder  hover:bg-accentSolidHover focus:ring-2 focus:ring-accentBorderHover dark:bg-accentSolid-dark border-accentBorder-dark  dark:hover:bg-accentSolidHover-dark  focus:ring-accentBorderHover-dark ring-offset-2
                ">
                <p className="text-white">Watch Our Video</p>
            </a> 
            </div>
            <div className="flex justify-center">
            {/* https://www.youtube.com/watch?v=JFsznAyAEMY&t=2427s */}
                <iframe className="aspect-video rounded-lg shadow-accentSolid dark:shadow-accentSolid-dark shadow-lg m-3" src="https://www.youtube.com/embed/JFsznAyAEMY"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        {/* <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
        </div>                
    </div>
</section> */}

        </div>
    )
}

export default Heropage;