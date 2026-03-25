import "./App.css";
import About from "./components/About";
import Band from "./components/Band";
import Heropage2 from "./components/Heropage2";
import Courses from "./components/Courses";
import { ToastProvider } from "@radix-ui/react-toast";
import Navbar from "./components/Navbar";

function App() {
	return (
		<ToastProvider>
			<div className='App relative bg-accentBase dark:bg-accentBase-dark'>
				<Navbar />
				<Heropage2 />
				<Band />
				<About />
				<Courses />
				<footer id='contact' className='bg-accentBgSubtle dark:bg-accentBgSubtle-dark border-t border-accentLine dark:border-accentLine-dark py-10 px-4'>
					<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
						<div className='text-center md:text-left'>
							<p className='text-lg font-bold text-accentTextContrast dark:text-accentTextContrast-dark'>Islamic Education</p>
							<p className='text-sm text-accentText dark:text-accentText-dark mt-1'>Free online Quran courses for everyone.</p>
						</div>
						<nav className='flex flex-wrap justify-center gap-6 text-sm text-accentText dark:text-accentText-dark'>
							<a href='#home' className='hover:text-accentTextContrast dark:hover:text-accentTextContrast-dark transition-colors'>Home</a>
							<a href='#about' className='hover:text-accentTextContrast dark:hover:text-accentTextContrast-dark transition-colors'>About</a>
							<a href='#courses' className='hover:text-accentTextContrast dark:hover:text-accentTextContrast-dark transition-colors'>Courses</a>
						</nav>
						<p className='text-xs text-accentText dark:text-accentText-dark'>
							&copy; {new Date().getFullYear()} Islamic Education. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</ToastProvider>
	);
}

export default App;
