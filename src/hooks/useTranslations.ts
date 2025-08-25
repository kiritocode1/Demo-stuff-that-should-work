import { useQueryState } from "nuqs";
import { translations, type Language } from "@/lib/translations";

export const useTranslations = () => {
	const [language] = useQueryState("lang", { defaultValue: "en" });

	const t = (key: string): string => {
		try {
			const keys = key.split(".");
			let value: unknown = translations[language as Language];

			if (!value) {
				console.warn(`Translation not found for language: ${language}`);
				return key;
			}

			for (const k of keys) {
				if (value && typeof value === "object" && k in value) {
					value = (value as Record<string, unknown>)[k];
				} else {
					console.warn(`Translation key not found: ${key}`);
					return key;
				}
			}

			return typeof value === "string" ? value : key;
		} catch (error) {
			console.error(`Translation error for key "${key}":`, error);
			return key;
		}
	};

	return { t, language: language as Language };
};
