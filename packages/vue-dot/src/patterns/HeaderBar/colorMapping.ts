import { tokens } from '@cnamts/design-tokens';

import { IndexedObject } from '../../types';

import { ThemeEnum } from './ThemeEnum';

export const colorMapping: IndexedObject = {
	[ThemeEnum.DEFAULT]: tokens.colors.primary,
	[ThemeEnum.CNAM]: tokens.colors.primary,
	[ThemeEnum.AMELI]: tokens.colors.primary,
	[ThemeEnum.AMELI_PRO]: tokens.colors.secondary,
	[ThemeEnum.RISQUE_PRO]: tokens.colors.risquePro,
	[ThemeEnum.COMPTE_ENTREPRISE]: tokens.colors.primary
};
