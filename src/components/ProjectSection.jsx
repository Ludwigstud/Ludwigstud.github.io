import React from "react";
import { myProjects } from "../data/projectInfo.js";
import Project from "./Project.jsx";
import TerminalHeader from "./TerminalHeader.jsx";



const ProjectsSection = () => {
	return (
		<section
			id="projects"
			className="py-20 px-4">
			<TerminalHeader title="ls my-projects/" />

			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{myProjects.map((project) => (
					<Project
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
