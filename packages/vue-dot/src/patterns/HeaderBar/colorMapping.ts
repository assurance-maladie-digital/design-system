import { tokens } from '@cnamts/design-tokens';

import { IndexedObject } from '../../types';

import { ThemeEnum } from './ThemeEnum';

export const colorMapping: IndexedObject = {
	[ThemeEnum.DEFAULT]: tokens.colors.amBlue.darken20,
	[ThemeEnum.CNAM]: tokens.colors.amBlue.darken20,
	[ThemeEnum.AMELI]: tokens.colors.amBlue.darken20,
	[ThemeEnum.AMELI_PRO]: tokens.colors.secondary,
	[ThemeEnum.RISQUE_PRO]: tokens.colors.risquePro,
	[ThemeEnum.COMPTE_ENTREPRISE]: tokens.colors.amBlue.darken20
};
