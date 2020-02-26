import { FormValues } from './types';

import { Form } from '../../patterns/FormSection/types';

/**
 * Return an array with field values
 *
 * @param {Form} form The form object
 * @returns {FormValues} The form values
 */
export function getFormValues(form: Form): FormValues {
	const formValues: FormValues = {};

	Object.keys(form)
		.map((key: string) => {
			// Transform Form to FormValues, formValues.something = value
			const value = form[key].value;

			if (!value) {
				return null;
			}

			return formValues[key] = value;
		});

	return formValues;
}
