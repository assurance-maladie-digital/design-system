import { ChipItem } from '../../elements/ChipList/types';

export interface FilterItem {
	name: string;
	value?: unknown;
	formatChip?: (value: unknown) => ChipItem[];
	chipOverflowLimit?: number;
	title?: string;
	[key: string]: unknown;
}

export { ChipItem };
