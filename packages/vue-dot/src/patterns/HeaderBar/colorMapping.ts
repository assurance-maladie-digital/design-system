import { tokens } from '@cnamts/design-tokens';

import { IndexedObject } from '../../types';

import { ThemeEnum } from './ThemeEnum';

const secondary = tokens.colors.secondary;
const primary = '#0a347b';
const brique = '#a44349';

export const colorMapping: IndexedObject = {
	[ThemeEnum.DEFAULT]: primary,
	[ThemeEnum.CNAM]: primary,
	[ThemeEnum.AMELI]: primary,
	[ThemeEnum.AMELI_PRO]: secondary,
	[ThemeEnum.RISQUE_PRO]: brique
};
