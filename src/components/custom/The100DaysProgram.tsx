const The100DaysProgram = () => {
	return (
		<div className="bg-slate-900 py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-[63%_auto] gap-8 items-center">
					{/* Left side - Image with fade effect */}
					<figure className="relative">
						<div
							className="w-full h-[500px] bg-cover bg-center rounded-lg"
							style={{
								backgroundImage: `url('/100_days.png')`,
								maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
								WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
							}}
						></div>
					</figure>

					{/* Right side - Content */}
					<div className="text-white">
						<h2 className="text-4xl font-bold mb-6 font-serif uppercase italic">THE 100 Days Police Program</h2>
						<p className="text-lg mb-8 leading-relaxed">
							The Nasik Police Department is committed to ensuring public safety, reducing crime rates, strengthening community relations, enhancing emergency response capabilities, and
							creating a secure environment for all citizens through our comprehensive 100-day initiative.
						</p>
						<div className="inline-block">
							<button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-slate-900 transition-colors">READ MORE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default The100DaysProgram;
