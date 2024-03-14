import { tokens } from '@cnamts/design-tokens';

import { IndexedObject } from '@/types';

import { ThemeEnum } from '@/constants/enums/ThemeEnum';

export const colorMapping: IndexedObject = {
	[ThemeEnum.AMELI]: tokens.colors.amBlue.darken20,
	[ThemeEnum.AMELI_PRO]: tokens.colors.secondary,
	[ThemeEnum.CNAM]: tokens.colors.amBlue.darken20,
	[ThemeEnum.COMPTE_AMELI]: tokens.colors.secondary,
	[ThemeEnum.COMPTE_ENTREPRISE]: tokens.colors.amBlue.darken20,
	[ThemeEnum.DEFAULT]: tokens.colors.amBlue.darken20,
	[ThemeEnum.RISQUE_PRO]: tokens.colors.risquePro,
};
