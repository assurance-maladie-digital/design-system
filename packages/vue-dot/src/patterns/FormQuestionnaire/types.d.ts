import { Form } from '../FormBuilder/types';

export interface Section {
	title: string;
	questions: Form;
}

export interface Sections {
	[key: string]: Section;
}

export interface Questionnaire {
	title: string;
	sections: Sections;
}
