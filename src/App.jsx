import Header from "./components/Header";
import About from "./components/About";
import ProjectsSection from "./components/ProjectSection";
import Contact from "./components/Contact";
const App = () => {
	return (
		<>
			<div className="main">
				<Header />
				<About />
				<ProjectsSection />
				<Contact />
			</div>
		</>
	);
};

export default App;
