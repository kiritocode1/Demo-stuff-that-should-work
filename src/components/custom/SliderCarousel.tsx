"use client";

import { FC, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Roboto_Serif } from "next/font/google";
import { useTranslations } from "@/hooks/useTranslations";

interface CarouselSlide {
	id: number;
	titleKey: string;
	subtitleKey: string;
	image: string;
}

const robotoSerif = Roboto_Serif({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const SliderCarousel: FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { t } = useTranslations();

	const slides: CarouselSlide[] = [
		{
			id: 1,
			titleKey: "carousel.slides.slide1.title",
			subtitleKey: "carousel.slides.slide1.subtitle",
			image: "/carousel/1.png",
		},
		{
			id: 2,
			titleKey: "carousel.slides.slide2.title",
			subtitleKey: "carousel.slides.slide2.subtitle",
			image: "/carousel/2.png",
		},
		{
			id: 3,
			titleKey: "carousel.slides.slide3.title",
			subtitleKey: "carousel.slides.slide3.subtitle",
			image: "/carousel/3.png",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);

		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div className="relative w-full h-[600px] overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${slides[currentSlide].image})`,
					backgroundSize: "cover",
				}}
			/>

			{/* Hard Tint Overlay */}
			<div
				className="absolute inset-0"
				style={{
					background: `linear-gradient(transparent, #0D132D)`,
				}}
			/>

			{/* Content */}
			<div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
				<div className="text-center space-y-4 animate-fade-in">
					<h1 className={`text-6xl ${robotoSerif.className} font-bold tracking-wider`}>{t(slides[currentSlide].titleKey)}</h1>
					<h2 className={`text-5xl ${robotoSerif.className} font-bold tracking-wider`}>{t(slides[currentSlide].subtitleKey)}</h2>
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-6 bottom-32 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
			>
				<ChevronLeft className="w-6 h-6 text-white" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-6 bottom-32 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
			>
				<ChevronRight className="w-6 h-6 text-white" />
			</button>

			{/* Pagination Dots */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`h-3 rounded-full transition-all duration-500 ${index === currentSlide ? "w-20 bg-transparent border-2 border-white" : "w-6 bg-white/40 hover:bg-white/60"}`}
					/>
				))}
			</div>
		</div>
	);
};

export default SliderCarousel;
