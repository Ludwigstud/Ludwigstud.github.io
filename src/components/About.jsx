import picture from "/src/assets/bnw.png";

const About = () => {
	return (
		<div
			className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-8 py-12"
			id="about">
			<div className="text-xl text-center md:text-left max-w-lg lg:w-3/5">
				<p className="mb-6">
					I'm Ludwig, a developer from Höganäs. I'm a persistent problem-solver by nature and I
					enjoy the challenge of architecting a complex idea into a reliable, working application.
				</p>

				<p>
					My go-to technologies for building robust applications are React, Node.js, Express, and
					both SQL and NoSQL databases, along with cloud platforms like AWS. While this is my
					current stack, I'm a fast learner and always ready to adopt new tools to fit the project.
				</p>
			</div>

			<img
				src={picture}
				alt="A photo of Ludwig"
				className="w-80 h-80 md:w-90 md:h-90 
                           rounded-xl object-cover shadow-xl"
			/>
		</div>
	);
};

export default About;
