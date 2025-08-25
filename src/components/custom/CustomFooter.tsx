"use client";

import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

function NewsletterSignup() {
	const { t } = useTranslations();
	const [email, setEmail] = useState("");

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: wire up to backend/email service
		setEmail("");
	};

	return (
		<div className="bg-[#E2E6EF] text-[#0D132D] py-10">
			<div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h3 className="text-3xl font-serif font-bold">{t("footer.subscribeTitle")}</h3>
					<p className="text-base mt-1">{t("footer.subscribeDesc")}</p>
				</div>
				<form
					onSubmit={onSubmit}
					className="flex w-full md:w-auto items-stretch gap-3"
				>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={t("footer.emailPlaceholder")}
						className="flex-1 md:w-[520px] h-14 rounded-md px-4 bg-white text-[#0D132D] placeholder:text-[#6B7280] outline-none border border-[#C8CFDA]"
						required
					/>
					<button
						type="submit"
						className="h-14 px-6 rounded-md bg-[#C7CFDA] text-[#0D132D] font-semibold hover:bg-[#b9c3d3] transition-colors"
					>
						{t("footer.cta")}
					</button>
				</form>
			</div>
		</div>
	);
}

function SiteFooter() {
	const { t } = useTranslations();
	return (
		<footer className="bg-[#0D132D] text-white">
			<div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
				{/* Links left */}
				<div className="space-y-3">
					<ul className="space-y-3 text-sm tracking-wide uppercase">
						<li>{t("footer.linksLeft.news")}</li>
						<li>{t("footer.linksLeft.administration")}</li>
						<li>{t("footer.linksLeft.issues")}</li>
						<li>{t("footer.linksLeft.contact")}</li>
						<li>{t("footer.linksLeft.eop")}</li>
					</ul>
				</div>

				{/* Links right */}
				<div className="space-y-3">
					<ul className="space-y-3 text-sm tracking-wide uppercase">
						<li>{t("footer.linksRight.visit")}</li>
						<li>{t("footer.linksRight.gallery")}</li>
						<li>{t("footer.linksRight.videoLibrary")}</li>
						<li>{t("footer.linksRight.america250")}</li>
						<li>{t("footer.linksRight.foundingFathers")}</li>
					</ul>
				</div>

				{/* Address and socials placeholder */}
				<div className="space-y-3">
					<h4 className="text-xl font-serif font-bold">{t("footer.addressTitle")}</h4>
					<p className="text-white/80">{t("footer.address1")}</p>
					<p className="text-white/80">{t("footer.address2")}</p>
					<div className="flex items-center gap-4 pt-2">
						<div className="w-6 h-6 rounded-full bg-white/20" />
						<div className="w-6 h-6 rounded-full bg-white/20" />
						<div className="w-6 h-6 rounded-full bg-white/20" />
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-white/80">
					<span>{t("footer.copyright")}</span>
					<div className="flex items-center gap-8">
						<span>WH.GOV</span>
						<span>{t("footer.privacy")}</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default function CustomFooter() {
	return (
		<div>
			<NewsletterSignup />
			<SiteFooter />
		</div>
	);
}
