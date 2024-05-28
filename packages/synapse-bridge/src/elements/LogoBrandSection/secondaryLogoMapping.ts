import { IndexedObject } from "@/types";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";
import { locales } from "./locales";
import { LogoInfo } from "./types";

import logoCnam from "../../assets/images/cnam.svg";
import logoAmeli from "../../assets/images/ameli.svg";
import logoAmeliPro from "../../assets/images/ameli-pro.svg";
import logoCompteAmeli from "../../assets/images/compte-ameli.svg";

export const secondaryLogoMapping: IndexedObject<LogoInfo> = {
	[ThemeEnum.CNAM]: {
		src: logoCnam,
		alt: locales.logoCnam,
	},
	[ThemeEnum.AMELI]: {
		src: logoAmeli,
		alt: locales.logoAmeli,
	},
	[ThemeEnum.AMELI_PRO]: {
		src: logoAmeliPro,
		alt: locales.logoAmeliPro,
	},
	[ThemeEnum.COMPTE_AMELI]: {
		src: logoCompteAmeli,
		alt: locales.logoCompteAmeli,
	},
};
