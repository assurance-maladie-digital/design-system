import { FormErrors, FormTypeEnum, FormType } from './types';
import { Form } from '../../patterns/FormSection/types';
import { SectionGroup } from 'src/patterns/FormSectionGroup/types';

import { deepCopy } from '../../helpers/deepCopy';

/**
 * Set error-messages prop on fields in multiple section in error
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {SectionGroup} form The section group to modify
 * @returns {SectionGroup} The form modified with errorsMessages
 */
function setFormSectionGroupErrors(formErrors: FormErrors, form: SectionGroup): SectionGroup {
	let newForm: SectionGroup = deepCopy(form);

	for (const section of Object.values(newForm)) {
		section.questions = setFormSectionErrors(formErrors, section.questions);
	}

	return newForm;
}

/**
 * Set error-messages prop on the fields in error
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {Form} form The form to modify
 * @returns {Form} The form modified with errorsMessages
 */
function setFormSectionErrors(formErrors: FormErrors, form: Form): Form {
	const newForm = deepCopy(form);

	// For each field in error
	for (const [fieldName, errors] of Object.entries(formErrors)) {
		if (!newForm[fieldName] || !errors) {
			continue;
		}

		const fieldMetadata = newForm[fieldName].metadata || {};

		// If the field exists in our form and we
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

		// Set the new field metadata to the form
		newForm[fieldName].metadata = fieldMetadata;
	}

	return newForm;
}

/**
 * Return a form with all the error messages on each field depending on the form type
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {Form|SectionGroup} form The form errors messages object to set in the form
 * @param {FormType} formType The type of the form to detect the form structure
 */
export function setFormErrors(formErrors: FormErrors, form: Form | SectionGroup, formType: FormType = FormTypeEnum.FORM): Form | SectionGroup {
	let newForm: Form | SectionGroup = {};
	if (formType === FormTypeEnum.FORM) {
		newForm = setFormSectionErrors(formErrors, form as Form);
	} else if (formType === FormTypeEnum.SECTION_GROUP) {
		newForm = setFormSectionGroupErrors(formErrors, form as SectionGroup);
	}
	return newForm;
}
