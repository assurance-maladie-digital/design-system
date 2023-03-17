import { IndexedObject } from '../../types';

import { ThemeEnum } from '../../constants/enums/ThemeEnum';

import { locales } from './locales';
import { LogoInfo } from './types';

export const secondaryLogoMapping: IndexedObject<LogoInfo> = {
	[ThemeEnum.CNAM]: {
		src: require('../../assets/images/cnam.svg'),
		alt: locales.logoCnam
	},
	[ThemeEnum.AMELI]: {
		src: require('../../assets/images/ameli.svg'),
		alt: locales.logoAmeli
	},
	[ThemeEnum.AMELI_PRO]: {
		src: require('../../assets/images/ameli-pro.svg'),
		alt: locales.logoAmeliPro
	}
};
