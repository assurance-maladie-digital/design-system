import { FormValues } from './types';

import { Form } from '../../components/FormBuilder/types';

/** Return an array with field values */
export function getFormValues(form: Form): FormValues {
	const formValues: FormValues = {};

	for (const [, section] of Object.entries(form)) {
		for (const [fieldName, field] of Object.entries(section.questions)) {
			if (field.value !== null) {
				formValues[fieldName] = field.value;
			}
		}
	}

	return formValues;
}
