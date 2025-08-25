"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslations } from "@/hooks/useTranslations";

const GridPicture = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const { t } = useTranslations();

	useEffect(() => {
		if (gridRef.current) {
			const cards = gridRef.current.querySelectorAll(".grid-card");

			cards.forEach((card) => {
				gsap.set(card, { scale: 1 });

				card.addEventListener("mouseenter", () => {
					gsap.to(card, { scale: 1.05, duration: 0.3 });
				});

				card.addEventListener("mouseleave", () => {
					gsap.to(card, { scale: 1, duration: 0.3 });
				});
			});
		}
	}, []);

	return (
		<div className="bg-slate-900 py-16">
			<div className="max-w-7xl mx-auto px-4">
				<div
					ref={gridRef}
					className="grid grid-cols-2 gap-8"
				>
					{/* Left Section */}
					<div className="grid-card relative border border-white rounded-lg overflow-hidden cursor-pointer group">
						<div
							className="w-full h-[400px] bg-cover bg-center relative"
							style={{
								backgroundImage: `url('/grid/1.png')`,
							}}
						>
							<div className="absolute inset-4 border-2 border-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
						<div className="absolute inset-0 flex items-center justify-center">
							<h3 className="text-white text-4xl font-serif relative">
								{t("gridPicture.executiveActions")}
								<span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
							</h3>
						</div>
					</div>

					{/* Right Section */}
					<div className="grid-card relative border border-white rounded-lg overflow-hidden cursor-pointer group">
						<div
							className="w-full h-[400px] bg-cover bg-center relative"
							style={{
								backgroundImage: `url('/grid/2.png')`,
							}}
						>
							<div className="absolute inset-4 border-2 border-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
						<div className="absolute inset-0 flex items-center justify-center">
							<h3 className="text-white text-4xl font-serif relative">
								{t("gridPicture.news")}
								<span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
							</h3>
						</div>
					</div>

					{/* Bottom Left Section */}
					<div className="grid-card relative border border-white rounded-lg overflow-hidden cursor-pointer group">
						<div
							className="w-full h-[400px] bg-cover bg-center relative"
							style={{
								backgroundImage: `url('/grid/3.png')`,
							}}
						>
							<div className="absolute inset-4 border-2 border-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
						<div className="absolute inset-0 flex items-center justify-center">
							<h3 className="text-white text-4xl font-serif relative">
								{t("gridPicture.gallery")}
								<span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
							</h3>
						</div>
					</div>

					{/* Bottom Right Section */}
					<div className="grid-card relative border border-white rounded-lg overflow-hidden cursor-pointer group">
						<div
							className="w-full h-[400px] bg-cover bg-center relative"
							style={{
								backgroundImage: `url('/grid/4.png')`,
							}}
						>
							<div className="absolute inset-4 border-2 border-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
						<div className="absolute inset-0 flex items-center justify-center">
							<h3 className="text-white text-4xl font-serif relative">
								{t("gridPicture.videos")}
								<span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GridPicture;
