import { IndexedObject } from 'src/types';
import { locales } from './locales';
import { LogoInfo } from './types';

export const headerLogoMapping: IndexedObject<LogoInfo> = {
	logoAM: {
		src: require('../../../assets/logos/desktop/assurance-maladie.svg'),
		alt: locales.logoAssuranceMaladie
	},
	logoRisquePro: {
		src: require('../../../assets/logos/desktop/risque-pro.svg'),
		alt: locales.logoRisquePro
	}
};

export const secondaryLogoMapping: IndexedObject<LogoInfo> = {
	ameli: {
		src: require('../../../assets/logos/desktop/ameli.svg'),
		alt: locales.logoAmeli
	},
	ameliPro: {
		src: require('../../../assets/logos/desktop/ameli-pro.svg'),
		alt: locales.logoAmeliPro
	}
};
