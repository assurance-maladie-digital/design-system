import { IndexedObject } from '../../types';

import { Dimensions } from '../../types';
import { LogoSizeEnum } from './LogoSizeEnum';

export const logoDimensionsScrollMapping: IndexedObject<Dimensions> = {
	[LogoSizeEnum.X_SMALL]: {
		width: '32',
		height: '32'
	},
	[LogoSizeEnum.SMALL]: {
		width: '40',
		height: '40'
	},
	[LogoSizeEnum.NORMAL]: {
		width: '64',
		height: '64'
	}
};
