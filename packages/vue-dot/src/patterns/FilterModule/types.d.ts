import { Field } from '@cnamts/form-builder/src/components/FormField/types';

export interface FilterItem {
	label: string;
	key: string;
	type: string;
	form: FilterItemForm;
}

export interface FilterItemForm {
	filter: Field;
}
