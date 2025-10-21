import picture from "/src/assets/bnw.png";

const About = () => {
	return (
		<div
			className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-8 py-12"
			id="about">
			<div className="text-xl text-center md:text-left max-w-lg lg:w-3/5">
				<p className="mb-6">
					Web developer from Höganäs, Sweden. I'm a naturally curious person, easily fascinated by
					how things work. When a new piece of tech catches my eye, I'm the type to dive in
					headfirst and not come up for air until I've figured it out.
				</p>

				<p>
					My journey started with the holy trinity (HTML, CSS, & JavaScript), and now I'm building
					fullstack applications with tools like React, Node.js, and Express. I'm also getting
					comfortable with SQL databases and cloud services like AWS. I'm just out here trying to
					build great digital experiences.
				</p>
			</div>

			<img
				src={picture}
				alt="A photo of Ludwig"
				className="w-80 h-80 md:w-90 md:h-90 
                           rounded-3xl object-cover shadow-xl"
			/>
		</div>
	);
};

export default About;
