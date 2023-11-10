import { FieldList } from '../FormFieldList/types';

export interface Form {
	[sectionName: string]: FieldList;
}
