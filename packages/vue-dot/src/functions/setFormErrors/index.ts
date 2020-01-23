import { FormErrors } from './types';
import { Form } from '../../patterns/FormBuilder/types';

import deepCopy from '../../helpers/deepCopy';

/** Set error-messages prop on the fields in error
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {Form} form The form to modify
 * @returns {Form} The form modified with errorsMessages
 */
export default function setFormErrors(formErrors: FormErrors, form: Form): Form {
	let newform = deepCopy(form);
	// For each field in error
	for (const [fieldName, errors] of Object.entries(formErrors)) {

		if (!newform[fieldName] || !errors) {
			continue;
		}

		let fieldMetadata = newform[fieldName].metadata || {};

		// If the field exists in our form and we
		// have errors to set, set errors
		if (Array.isArray(errors)) {
			fieldMetadata.errorMessages = errors;
		} else if (typeof errors === 'object') {
			// For each sub field in error
			for (const [subFieldName, subErrors] of Object.entries(errors)) {
				// Get the sub field metadata or create it
				let subFieldMetadata = fieldMetadata[subFieldName] || {};

				// Add error messages to the sub field metadata
				subFieldMetadata.errorMessages = subErrors;

				// Update the field metadata
				fieldMetadata[subFieldName] = subFieldMetadata;
			}
		} else {
			continue;
		}

		// Set the new field metadata to the form
		newform[fieldName].metadata = fieldMetadata;
	}

	return newform;
}
