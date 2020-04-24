import { FormValues } from './types';

import { Form } from '../../patterns/FormBuilder/types';

/**
 * Return an array with field values
 *
 * @param {Form} form The form object
 * @returns {FormValues} The form values
 */
export function getFormValues(form: Form): FormValues {
	const formValues: FormValues = {};

	// TODO: Use deepFind?
	for (const [sectionName, section] of Object.entries(form)) {
		for (const [fieldName, field] of Object.entries(section.fields)) {
			if (field.value !== null) {
				formValues[fieldName] = field.value;
			}
		}
	}

	return formValues;
}
