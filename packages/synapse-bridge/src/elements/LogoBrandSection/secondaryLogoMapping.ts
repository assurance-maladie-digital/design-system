import { IndexedObject } from "@/types";

import { ThemeEnum } from "@/constants/enums/ThemeEnum";

import { locales } from "./locales";
import { LogoInfo } from "./types";

export const secondaryLogoMapping: IndexedObject<LogoInfo> = {
	[ThemeEnum.CNAM]: {
		src: "/src/assets/images/cnam.svg",
		alt: locales.logoCnam,
	},
	[ThemeEnum.AMELI]: {
		src: "/src/assets/images/ameli.svg",
		alt: locales.logoAmeli,
	},
	[ThemeEnum.AMELI_PRO]: {
		src: "/src/assets/images/ameli-pro.svg",
		alt: locales.logoAmeliPro,
	},
	[ThemeEnum.COMPTE_AMELI]: {
		src: "/src/assets/images/compte-ameli.svg",
		alt: locales.logoAmeli,
	},
};
