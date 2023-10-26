import { DataListItem } from '../types'

/** Get DataList fixture */
export function getDataList(): DataListItem[] {
	return [
		{
			key: 'Civility',
			value: '',
		},
		{
			key: 'Name',
			value: 'Dupont',
		},
		{
			key: 'First name',
			value: 'Paul',
		},
	]
}
