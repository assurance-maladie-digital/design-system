import { IndexedObject } from '../../types';

import { Dimensions } from '../../types';
import { LogoSizeEnum } from './LogoSizeEnum';

export const logoDimensionsMapping: IndexedObject<Dimensions> = {
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

export const logoAvatarDimensionsMapping: IndexedObject<Dimensions> = {
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
