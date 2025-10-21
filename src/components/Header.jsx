import React from "react";

const ScrambleText = ({ text }) => {
	return (
		<>
			{text.split("").map((letter, index) => (
				<span
					key={index}
					className="inline-block transition-transform duration-300 ease-in-out
                               group-hover:odd:translate-y-[-0.1em]  
                               group-hover:even:translate-y-[0.1em]">
					{letter === " " ? "\u00A0" : letter}
				</span>
			))}
		</>
	);
};

const Header = () => {
	const name = "LUDWIG";

	return (
		<div className="flex flex-col items-center w-full px-4 py-6 ">
			<nav>
				<ul
					className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-4 
                               text-cyan-100 font-thin 
                               text-lg md:text-xl">
					<li>
						<a
							href="#about"
							className="hover:text-white group">
							<ScrambleText text="ABOUT" />
						</a>
					</li>
					<li className="hidden sm:block">♦</li>
					<li>
						<a
							href="#projects"
							className="hover:text-white group">
							<ScrambleText text="PROJECTS" />
						</a>
					</li>
					<li className="hidden sm:block">♦</li>
					<li>
						<a
							href="#contact"
							className="hover:text-white group">
							<ScrambleText text="CONTACT" />
						</a>
					</li>
				</ul>
			</nav>

			<div className="Name my-10">
				<h1
					className="font-bold text-center 
                               text-[clamp(1.5rem,20vw,17rem)]
                               group">
					<ScrambleText text={name} />
				</h1>
			</div>
		</div>
	);
};

export default Header;
