import { FormValues } from './types';

import { FieldGroup } from '../../patterns/FormSection/types';

/**
 * Return an array with field values
 *
 * @param {FieldGroup} fieldGroup The fieldGroup object
 * @returns {FormValues} The fieldGroup values
 */
export function getFormValues(fieldGroup: FieldGroup): FormValues {
	const formValues: FormValues = {};

	Object.keys(fieldGroup)
		.map((key: string) => {
			// Transform FieldGroup to FormValues, formValues.something = value
			const value = fieldGroup[key].value;

			if (!value) {
				return null;
			}

			return formValues[key] = value;
		});

	return formValues;
}
