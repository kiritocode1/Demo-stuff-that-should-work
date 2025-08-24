"use client";

import { FC, useState, useRef } from "react";
import { Menu, Search, Building2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NavbarProps {
	title?: string;
}

const MENU_SLIDE_ANIMATION = {
	initial: { x: "-100%" },
	enter: { x: "0" },
	exit: { x: "-100%" },
};

const Curve: FC = () => {
	const initialPath = `M100 0 L200 0 L200 ${typeof window !== "undefined" ? window.innerHeight : 1000} L100 ${typeof window !== "undefined" ? window.innerHeight : 1000} Q-100 ${
		typeof window !== "undefined" ? window.innerHeight / 2 : 500
	} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${typeof window !== "undefined" ? window.innerHeight : 1000} L100 ${typeof window !== "undefined" ? window.innerHeight : 1000} Q100 ${
		typeof window !== "undefined" ? window.innerHeight / 2 : 500
	} 100 0`;

	const curve = {
		initial: { d: initialPath },
		enter: { d: targetPath },
		exit: { d: initialPath },
	};

	return (
		<svg
			className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full"
			style={{ fill: "#1A233B" }}
		>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
};

const Navbar: FC<NavbarProps> = ({ }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const navItems = [
		{ heading: "About the Pune City Government", href: "#" },
		{ heading: "The Administration", href: "#" },
		{ heading: "Executive Offices", href: "#" },
		{ heading: "First Family", href: "#" },
		{ heading: "History & Grounds", href: "#" },
		{ heading: "Tours & Events", href: "#" },
		{ heading: "Contact Us", href: "#" }
	];

	return (
		<>
			<nav className="bg-[#1A233B] text-white h-20 flex items-center justify-between px-6">
				{/* Left Section */}
				<div className="flex items-center space-x-8">
					<Menu
						className="h-6 w-6 cursor-pointer"
						onClick={toggleMenu}
					/>
					<div className="w-[1px] h-20 bg-white/20"></div>
					<div className="flex flex-col  space-x-2">
						<sup className="font-serif text-sm italic">Approved by.</sup>
						<span className="text-sm font-medium  font-sans uppercase tracking-widest">Devendra Fadnavis</span>
					</div>
				</div>

				{/* Center Section */}
				<div className="flex-1 flex justify-center">
					<div className="text-center">
						<span className="text-sm font-serif italic">Pune</span>
						<div className="text-xl font-bold font-serif tracking-wider">CITY GOVERNMENT</div>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex items-center space-x-8">
					<div className="w-[1px] h-20 bg-white/20"></div>
					<Search className="h-6 w-6 cursor-pointer" />
					<div className="w-[1px] h-20 bg-white/20"></div>
					<Building2 className="h-6 w-6 cursor-pointer" />
				</div>
			</nav>

			{/* Animated Menu Overlay */}
			<AnimatePresence mode="wait">
				{isMenuOpen && (
					<motion.div
						variants={MENU_SLIDE_ANIMATION}
						initial="initial"
						animate="enter"
						exit="exit"
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
						className="h-[100dvh] w-screen fixed left-0 top-0 z-50 bg-[#1A233B]"
					>
						{/* Header with Close and Search */}
						<div className="flex justify-between items-center p-6 border-b border-white/20">
							<div
								className="flex items-center space-x-2 cursor-pointer"
								onClick={() => setIsMenuOpen(false)}
							>
								<X className="h-6 w-6 text-white" />
								<span className="text-white font-medium">Close</span>
							</div>
							<div className="flex items-center space-x-2 cursor-pointer">
								<span className="text-white font-medium">Search</span>
								<Search className="h-6 w-6 text-white" />
							</div>
						</div>

						{/* Main Navigation Content */}
						<div className="flex-1 flex">
							{/* Left Navigation */}
							<div className="flex-1 p-6">
								<div className="space-y-6">
									{navItems.map((item, index) => (
										<div
											key={`nav-item-${index}`}
											className="group cursor-pointer"
										>
											<div className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors">
												<span className="text-lg font-medium uppercase tracking-wide">{item.heading}</span>
												<span className="text-white">▶</span>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Right Content Area */}
							<div className="flex-1 p-6 border-l border-white/20">
								<div className="text-center text-white/60">
									<p className="text-6xl font-bold">45</p>
									<p className="text-6xl font-bold">47</p>
								</div>
							</div>
						</div>

						{/* Footer */}
						<div className="p-6 border-t border-white/20">
							<div className="flex justify-between items-center">
								<button className="bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition-colors">JOIN NOW</button>
								<p className="text-white/70 text-sm">© 2024 The White House</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
