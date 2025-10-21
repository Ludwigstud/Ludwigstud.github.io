import React from "react";

const Project = ({ project }) => {
	const { title, description, tags, demourl, githuburl } = project;

	return (
		<div className="project border border-neutral-700 bg-black rounded-lg p-6 flex flex-col h-full shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:rotate-1">
			<h4 className="text-xl font-bold text-white mb-2">{title}</h4>

			<p className="text-neutral-400 text-sm mb-4">{description}</p>

			<div className="flex flex-wrap gap-2 mb-4">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="bg-neutral-700 text-neutral-300 text-xs font-medium px-3 py-1 rounded-full">
						{tag}
					</span>
				))}
			</div>

			<div className="flex gap-4 mt-auto">
				{demourl && (
					<a
						href={demourl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 text-center bg-neutral-800 text-neutral-300 py-2 rounded-md border border-neutral-700 hover:bg-neutral-700 transition-colors">
						DEMO
					</a>
				)}

				{githuburl && (
					<a
						href={githuburl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 text-center bg-neutral-800 text-neutral-300 py-2 rounded-md border border-neutral-700 hover:bg-neutral-700 transition-colors">
						GITHUB
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
