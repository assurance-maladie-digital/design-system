import { ChipItem } from '../../elements/ChipList/types';

export interface FilterItem {
	title: string;
	name: string;
	value: unknown;
	formatChip?: (value: unknown) => ChipItem[];
	chipOverflowLimit?: number;
}

export { ChipItem };
