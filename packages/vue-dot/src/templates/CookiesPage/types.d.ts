import { TypeEnum } from './CookiesInformation/TypeEnum';
import { CookiesList } from './CookiesTable/types';

export type CookiesPageItems = {
	[key in TypeEnum]?: CookiesList[];
};

export type Preferences = {
	[key: string]: boolean | null;
	[TypeEnum.FUNCTIONAL]: boolean | null;
	[TypeEnum.ANALYTICS]: boolean | null;
};

export {
	CookiesList
};
