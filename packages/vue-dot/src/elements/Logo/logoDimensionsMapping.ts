import { IndexedObject } from '../../types';

import { LogoDimensions } from './types';
import { LogoSizeEnum } from './LogoSizeEnum';

export const logoDimensionsMapping: IndexedObject<LogoDimensions> = {
	[LogoSizeEnum.X_SMALL]: {
		width: '105',
		height: '32'
	},
	[LogoSizeEnum.SMALL]: {
		width: '131',
		height: '40'
	},
	[LogoSizeEnum.NORMAL]: {
		width: '211',
		height: '64'
	}
};
