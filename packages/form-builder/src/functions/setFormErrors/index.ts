import { FormErrors } from './types';
import { Form } from '../../components/FormBuilder/types';
import { ChoiceFieldErrorMessages, FieldOptions } from '../../components/FormField/types';

import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

/**
 * Set error-messages prop on the fields in error
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {Form} form The form to modify
 * @returns {Form} The form modified with errorsMessages
 */
export function setFormErrors(formErrors: FormErrors, form: Form): Form {
	const newForm = deepCopy<Form>(form);

	for (const [sectionName] of Object.entries(newForm)) {
		for (const [fieldName, errors] of Object.entries(formErrors)) {
			const field = newForm[sectionName].questions[fieldName];

			if (!field || !errors) {
				continue;
			}

			const fieldOptions = field.fieldOptions || {};

			// If the field exists in our form and we
			// have errors to set, set errors
			if (typeof errors === 'string' || Array.isArray(errors)) {
				(fieldOptions as FieldOptions).errorMessages = errors;
			} else if (typeof errors === 'object') {
				// For each sub field in error
				for (const [subFieldName, subErrors] of Object.entries(errors)) {
					if (subFieldName === 'value' || subFieldName === 'other') {
						if (!fieldOptions.errorMessages) {
							fieldOptions.errorMessages = {};
						}

						(fieldOptions.errorMessages as ChoiceFieldErrorMessages)[subFieldName] = subErrors;
						continue;
					}

					// Get the sub field fieldOptions or create it
					const subFieldOptions = fieldOptions[subFieldName] || {};

					// Add error messages to the sub field fieldOptions
					(subFieldOptions as FieldOptions).errorMessages = subErrors;

					// Update the field fieldOptions
					fieldOptions[subFieldName] = subFieldOptions;
				}
			} else {
				continue;
			}

			// Set the new field fieldOptions to the form
			newForm[sectionName].questions[fieldName].fieldOptions = fieldOptions;
		}
	}

	return newForm;
}
