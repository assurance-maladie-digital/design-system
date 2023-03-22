import { IndexedObject } from '../../types';

import { Dimensions } from '../../types';
import { LogoSizeEnum } from './LogoSizeEnum';

export const logoDimensionsScrollMapping: IndexedObject<Dimensions> = {
	[LogoSizeEnum.X_SMALL]: {
		width: '36',
		height: '32'
	},
	[LogoSizeEnum.SMALL]: {
		width: '44',
		height: '40'
	},
	[LogoSizeEnum.NORMAL]: {
		width: '68',
		height: '64'
	}
};
