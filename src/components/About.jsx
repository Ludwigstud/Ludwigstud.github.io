import picture from "/src/assets/me.jpg";

const About = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-8 py-12" id="about">
			<p className="text-xl text-center md:text-left max-w-lg lg:w-3/5">
				Based in Höganäs, I'm Ludwig, and I spend most of my time building things with code. What
				started with simple web pages has turned into a full-blown passion for the entire
				development process. I love the challenge of taking a concept and bringing it to life, piece
				by piece. I'm currently immersed in the full JavaScript stack—React for the front-end,
				Node.js for the back, and learning the bigger picture with AWS and SQL. Always excited for
				the next problem to solve.
			</p>

			<img
				src={picture}
				alt="A photo of Ludwig"
				className="w-64 h-64 md:w-80 md:h-80 
                           rounded-3xl object-cover shadow-xl"
			/>
		</div>
	);
};

export default About;
