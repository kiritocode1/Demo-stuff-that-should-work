"use client";

import { FC, useState } from "react";
import { Menu, Search, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { useQueryState } from "nuqs";
import { useTranslations } from "@/hooks/useTranslations";

export interface NavbarProps {
	title?: string;
}

const MENU_SLIDE_ANIMATION = {
	initial: { x: "-100%" },
	enter: { x: "0" },
	exit: { x: "-100%" },
};

const SEARCH_FADE_ANIMATION = {
	initial: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
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

const Navbar: FC<NavbarProps> = ({}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [language, setLanguage] = useQueryState("lang", { defaultValue: "en" });
	const { t } = useTranslations();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

	const handleLanguageChange = (newLang: string) => {
		setLanguage(newLang);
	};

	const handleSearch = () => {
		if (searchQuery.trim()) {
			// Handle search logic here
			console.log("Searching for:", searchQuery);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	const navItems = [
		{ heading: t("navbar.navItems.about"), href: "#" },
		{ heading: t("navbar.navItems.administration"), href: "#" },
		{ heading: t("navbar.navItems.executiveOffices"), href: "#" },
		{ heading: t("navbar.navItems.firstFamily"), href: "#" },
		{ heading: t("navbar.navItems.historyGrounds"), href: "#" },
		{ heading: t("navbar.navItems.toursEvents"), href: "#" },
		{ heading: t("navbar.navItems.contactUs"), href: "#" },
	];

	return (
		<>
			<nav className="bg-[#1A233B] text-white h-20 flex items-center justify-between px-6">
				{/* Left Section */}
				<div className="flex items-center space-x-8">
					<button onClick={toggleMenu}>
						<Menu className="h-6 w-6 cursor-pointer" />
					</button>
					<div className="w-[1px] h-20 bg-white/20"></div>
					<div className="flex flex-col  space-x-2">
						<sup className="font-serif text-sm italic">{t("navbar.approvedBy")}</sup>
						<span className="text-sm font-medium  font-sans uppercase tracking-widest">{t("navbar.chiefMinister")}</span>
					</div>
				</div>

				{/* Center Section */}
				<div className="flex-1 flex justify-center">
					<div className="text-center">
						<span className="text-sm font-serif italic">{t("navbar.officialWebsite")}</span>
						<div className="text-xl font-bold font-serif tracking-wider">{t("navbar.nashikRuralPolice")}</div>
					</div>
				</div>

				{/* Right Section */}
				<div className="flex items-center space-x-8">
					<div className="w-[1px] h-20 bg-white/20"></div>
					<button onClick={toggleSearch}>
						<Search className="h-6 w-6 cursor-pointer" />
					</button>
					<div className="w-[1px] h-20 bg-white/20"></div>

					{/* Language Switcher */}
					<div className="flex items-center space-x-2">
						<Globe className="h-5 w-5 text-white/70" />
						<div className="flex space-x-1">
							<button
								onClick={() => handleLanguageChange("en")}
								className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
									language === "en" ? "bg-white text-[#1A233B]" : "text-white/70 hover:text-white hover:bg-white/10"
								}`}
							>
								EN
							</button>
							<button
								onClick={() => handleLanguageChange("mr")}
								className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
									language === "mr" ? "bg-white text-[#1A233B]" : "text-white/70 hover:text-white hover:bg-white/10"
								}`}
							>
								मर
							</button>
						</div>
					</div>

					<div className="w-[1px] h-20 bg-white/20"></div>
					<Image
						src="/police_logo.png"
						alt="logo"
						width={100}
						height={100}
					/>
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
								<span className="text-white font-medium">{t("navbar.close")}</span>
							</div>
							<div
								className="flex items-center space-x-2 cursor-pointer"
								onClick={toggleSearch}
							>
								<span className="text-white font-medium">{t("navbar.search")}</span>
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
								<Image
									src="/police_logo.png"
									alt="logo"
									width={500}
									height={500}
								/>
							</div>
						</div>

						{/* Footer */}
						<div className="p-6 border-t border-white/20">
							<div className="flex justify-between items-center">
								<Button
									className="bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition-colors"
									onClick={() => window.open("tel:112", "_blank")}
								>
									{t("navbar.call112")}
								</Button>
								<p className="text-white/70 text-sm">{t("navbar.copyright")}</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Search Overlay */}
			<AnimatePresence mode="wait">
				{isSearchOpen && (
					<motion.div
						variants={SEARCH_FADE_ANIMATION}
						initial="initial"
						animate="enter"
						exit="exit"
						transition={{ duration: 0.3 }}
						className="h-[100dvh] w-screen fixed left-0 top-0 z-50 bg-[#1A233B] flex flex-col"
					>
						{/* Header */}
						<div className="flex justify-between items-center p-6">
							<div className="flex items-center space-x-2 cursor-pointer">
								<Menu className="h-6 w-6 text-white" />
								<span className="text-white font-medium">{t("navbar.menu")}</span>
							</div>
							<div
								className="flex items-center space-x-2 cursor-pointer"
								onClick={() => setIsSearchOpen(false)}
							>
								<span className="text-white font-medium">{t("navbar.close")}</span>
								<X className="h-6 w-6 text-white" />
							</div>
						</div>

						{/* Search Input Area */}
						<div className="flex-1 flex flex-col items-center justify-center px-6">
							<div className="w-full max-w-2xl text-center">
								<input
									type="text"
									placeholder={t("navbar.searchPlaceholder")}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									onKeyPress={handleKeyPress}
									className="w-full bg-transparent text-white text-4xl font-serif placeholder:text-white/60 placeholder:italic text-center outline-none border-none"
								/>
								<div className="w-full h-px bg-white/60 mt-4 mb-8"></div>
								<p className="text-white font-bold text-lg">{t("navbar.pressEnter")}</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
