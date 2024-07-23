import type { TypeEnum } from './CookiesInformation/TypeEnum';
import type { CookiesList } from './CookiesTable/types';

export type CookiesPageItems = {
  [key in TypeEnum]?: CookiesList[]
};

export interface Preferences {
  [key: string]: boolean | null
  [TypeEnum.FUNCTIONAL]: boolean | null
  [TypeEnum.ANALYTICS]: boolean | null
}
