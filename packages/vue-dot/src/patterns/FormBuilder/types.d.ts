import { Section } from './FormSection/types';

export interface Form {
	[sectionName: string]: Section;
}
