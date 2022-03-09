import { tokens } from '@cnamts/design-tokens';

import { IndexedObject } from '../../types';

import { ThemeEnum } from './ThemeEnum';

const SECONDARY = tokens.colors.secondary;
const PRIMARY = '#0a347b';
const BRIQUE = '#a44349';

export const colorMapping: IndexedObject = {
	[ThemeEnum.DEFAULT]: PRIMARY,
	[ThemeEnum.CNAM]: PRIMARY,
	[ThemeEnum.AMELI]: PRIMARY,
	[ThemeEnum.AMELI_PRO]: SECONDARY,
	[ThemeEnum.RISQUE_PRO]: BRIQUE
};
