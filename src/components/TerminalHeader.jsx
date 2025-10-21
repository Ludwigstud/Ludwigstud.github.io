const TerminalHeader = ({ title }) => {
	return (
		<div
			className="w-full max-w-2xl mx-auto bg-black rounded-lg 
                        border border-neutral-800 shadow-lg overflow-hidden mb-12 text-xl">
			<div className="p-4 flex items-center font-mono text-white">
				<span className="text-neutral-400 mr-2">{">"}</span>

				<p className="tracking-wider text-neutral-200">{title}</p>

				<span className="ml-1 w-2 text-white animate-blink">_</span>
			</div>
		</div>
	);
};
export default TerminalHeader;
