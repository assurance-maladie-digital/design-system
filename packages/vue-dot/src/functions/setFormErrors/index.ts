import { FormErrors } from './types';
import { Form } from '../../patterns/FormBuilder/types';

/** Set error-messages prop on the fields in error */
export default function setFormErrors(formErrors: FormErrors, form: Form): Form {

	// use a copie of the form before return it modified
	let newform = { ...form };
	// For each field in error
	for (const [fieldName, errors] of Object.entries(formErrors)) {

		if(!newform[fieldName] || !errors) {
			continue;
		}

		let fieldMetadata = newform[fieldName].metadata || {};

		// If the field exists in our form and we have errors to set,
		// set errors
		if (
			Array.isArray(errors)
		) {
			// Set the error-messages prop with the errors from the API to the metadata
			fieldMetadata.errorMessages = errors;
		} else if (typeof errors === 'object') {
			// For each sub field in error
			for (const [subFieldName, subErrors] of Object.entries(errors)) {

				// get the sub field metadata or create it
				let subFieldMetadata = fieldMetadata[subFieldName] || {};

				// add error messages to the sub field metadata
				subFieldMetadata.errorMessages = subErrors;

				// update the field metadata
				fieldMetadata[subFieldName] = subFieldMetadata;
			}
		} else {
			continue;
		}

		// set the new field metadata to the form
		newform[fieldName].metadata = fieldMetadata;
	}

	return newform;
}
