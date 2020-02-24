import { FormErrors } from './types';
import { FieldGroup } from '../../patterns/FormSection/types';

import { deepCopy } from '../../helpers/deepCopy';

/**
 * Set error-messages prop on the fields in error
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {FieldGroup} fieldGroup The fieldGroup to modify
 * @returns {FieldGroup} The fieldGroup modified with errorsMessages
 */
export function setFormErrors(formErrors: FormErrors, fieldGroup: FieldGroup): FieldGroup {
	const newForm = deepCopy(fieldGroup);

	// For each field in error
	for (const [fieldName, errors] of Object.entries(formErrors)) {
		if (!newForm[fieldName] || !errors) {
			continue;
		}

		const fieldMetadata = newForm[fieldName].metadata || {};

		// If the field exists in our fieldGroup and we
		// have errors to set, set errors
		if (Array.isArray(errors)) {
			fieldMetadata.errorMessages = errors;
		} else if (typeof errors === 'object') {
			// For each sub field in error
			for (const [subFieldName, subErrors] of Object.entries(errors)) {
				// Get the sub field metadata or create it
				const subFieldMetadata = fieldMetadata[subFieldName] || {};

				// Add error messages to the sub field metadata
				subFieldMetadata.errorMessages = subErrors;

				// Update the field metadata
				fieldMetadata[subFieldName] = subFieldMetadata;
			}
		} else {
			continue;
		}

		// Set the new field metadata to the fieldGroup
		newForm[fieldName].metadata = fieldMetadata;
	}

	return newForm;
}
