import { Form } from '../../patterns/FormBuilder/types';

export interface Section {
	titre: string;
	questions: Form;
}

export interface Sections {
	[key: string]: Section;
}
