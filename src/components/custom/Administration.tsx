"use client";
import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

const Administration: FC = () => {
	const { t } = useTranslations();

	const administrationMembers = [
		{
			nameKey: "administration.members.cm.name",
			roleKey: "administration.members.cm.role",
			image: "/administration/cm.png",
			alt: "Shri. Devendra Fadnavis",
		},
		{
			nameKey: "administration.members.dgp.name",
			roleKey: "administration.members.dgp.role",
			image: "/administration/dgp.png",
			alt: "Smt. Rashmi Shukla",
		},
		{
			nameKey: "administration.members.dig.name",
			roleKey: "administration.members.dig.role",
			image: "/administration/dgp-2.png",
			alt: "Shri. Dattatray Karale",
		},
		{
			nameKey: "administration.members.sp.name",
			roleKey: "administration.members.sp.role",
			image: "/administration/ips.png",
			alt: "Shri. Balasaheb Patil",
		},
	];

	return (
		<div className="bg-[#0D132D] ">
			{/* Main Title */}
			<div className="text-center mb-12">
				<h1 className="text-white text-4xl font-serif font-bold">{t("administration.title")}</h1>
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
							<h3 className="text-white text-xl font-serif font-bold mb-2 uppercase">{t(member.nameKey)}</h3>
							<p className="text-white/90 text-sm font-sans uppercase ">{t(member.roleKey)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Administration;
