"use client";

import { FC, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
	id: number;
	title: string;
	subtitle: string;
	image: string;
}

const slides: CarouselSlide[] = [
	{
		id: 1,
		title: "HONORING",
		subtitle: "OUR VETS",
		image: "/police_logo.png",
	},
	{
		id: 2,
		title: "SERVING",
		subtitle: "OUR COMMUNITY",
		image: "/globe.svg",
	},
	{
		id: 3,
		title: "PROTECTING",
		subtitle: "OUR FUTURE",
		image: "/window.svg",
	},
];

const SliderCarousel: FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

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
					<h1 className="text-6xl font-serif font-bold tracking-wider">{slides[currentSlide].title}</h1>
					<h2 className="text-5xl font-serif font-bold tracking-wider">{slides[currentSlide].subtitle}</h2>
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-6 bottom-20 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
			>
				<ChevronLeft className="w-6 h-6 text-white" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-6 bottom-20 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
			>
				<ChevronRight className="w-6 h-6 text-white" />
			</button>

			{/* Pagination Dots */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`h-3 rounded-full transition-all duration-500 ${index === currentSlide ? "w-12 bg-transparent border-2 border-white" : "w-3 bg-white/40 hover:bg-white/60"}`}
					/>
				))}
			</div>
		</div>
	);
};

export default SliderCarousel;
