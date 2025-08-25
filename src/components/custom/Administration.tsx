import { FC } from "react";
import Image from "next/image";

const Administration: FC = () => {
	const administrationMembers = [
		{
			name: "Shri. Devendra Fadnavis",
			role: "Hon'ble Chief Minister, Maharashtra State",
			image: "/administration/cm.png",
			alt: "Shri. Devendra Fadnavis",
		},
		{
			name: "Smt. Rashmi Shukla (IPS)",
			role: "DGP, Maharashtra State",
			image: "/administration/dgp.png",
			alt: "Smt. Rashmi Shukla",
		},
		{
			name: "Shri. Dattatray Karale (IPS)",
			role: "Sp. Inspector General of Police, Nashik Range",
			image: "/administration/dgp-2.png",
			alt: "Shri. Dattatray Karale",
		},
		{
			name: "Shri. Balasaheb Patil (IPS)",
			role: "Superintendent of Police, Nashik Rural",
			image: "/administration/ips.png",
			alt: "Shri. Balasaheb Patil",
		},
	];

	return (
		<div className="bg-[#0D132D] min-h-screen ">
			{/* Main Title */}
			<div className="text-center mb-12">
				<h1 className="text-white text-4xl font-serif font-bold">The Administration</h1>
			</div>

			{/* Four Panel Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
				{administrationMembers.map((member, index) => (
					<div
						key={index}
						className="bg-[#0D132D] border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300"
					>
						{/* Image Section */}
						<div className="h-64 w-full relative overflow-hidden">
							<Image
								src={member.image}
								alt={member.alt}
								fill
								className="object-cover"
							/>
						</div>

						{/* Text Section */}
						<div className="p-6 text-center">
							<h3 className="text-white text-xl font-serif font-bold mb-2 uppercase">{member.name}</h3>
							<p className="text-white/90 text-sm font-sans uppercase ">{member.role}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Administration;
