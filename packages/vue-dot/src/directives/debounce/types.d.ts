import { IndexedObject } from '../../types';

export type DirectiveValue = (value: string) => void | string;
export type Modifiers = IndexedObject<boolean>;
