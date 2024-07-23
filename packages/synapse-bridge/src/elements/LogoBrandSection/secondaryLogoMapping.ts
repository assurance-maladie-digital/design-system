import logoCnam from '../../assets/images/cnam.svg';
import logoAmeli from '../../assets/images/ameli.svg';
import logoAmeliPro from '../../assets/images/ameli-pro.svg';
import logoCompteAmeli from '../../assets/images/compte-ameli.svg';
import type { LogoInfo } from './types';
import { locales } from './locales';
import { ThemeEnum } from '@/constants/enums/ThemeEnum';
import type { IndexedObject } from '@/types';

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
