import type { ChipItem } from '@/elements/ChipList/types';

export interface FilterItem {
  name: string
  value?: unknown
  formatChip?: (value: any) => ChipItem[]
  chipOverflowLimit?: number
  title?: string
  [key: string]: unknown
}

export { type ChipItem };
