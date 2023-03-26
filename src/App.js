import "./App.css";
import About from "./components/About";
import Band from "./components/Band";
import Heropage2 from "./components/Heropage2";
import Courses from "./components/Courses";
import { ToastProvider } from "@radix-ui/react-toast";
import Navbar from "./components/Navbar";
// import Hexagoncards from './components/Hexagoncards';
function App() {
	return (
		<ToastProvider>
			<div className='App  bg-accentBase dark:bg-accentBase-dark'>
				{/* <div className="sticky top-0 z-50"> */}
				<Navbar />
				{/* </div> */}

				<Heropage2 />
				<Band />
				{/* <Hexagoncards/> */}
				<About />
				<Courses />
				{/* <Subscription/> */}
			</div>
		</ToastProvider>
	);
}

export default App;
