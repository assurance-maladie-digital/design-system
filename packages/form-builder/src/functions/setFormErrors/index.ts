import { FormErrors } from './types';
import { Form } from '../../components/FormBuilder/types';
import { ChoiceFieldErrorMessages, FieldOptions } from '../../components/FormField/types';

import { deepCopy } from '@cnamts/vue-dot/src/helpers/deepCopy';

/** Set error-messages prop on the fields in error */
export function setFormErrors(formErrors: FormErrors, form: Form): Form {
	const newForm = deepCopy<Form>(form);

	for (const [sectionName] of Object.entries(newForm)) {
		for (const [fieldName, errors] of Object.entries(formErrors)) {
			const field = newForm[sectionName].questions[fieldName];

			if (!field || !errors) {
				continue;
			}

			const fieldOptions = field.fieldOptions || {};

			if (typeof errors === 'string' || Array.isArray(errors)) {
				(fieldOptions as FieldOptions).errorMessages = errors;
			} else if (typeof errors === 'object') {
				for (const [subFieldName, subErrors] of Object.entries(errors)) {
					if (subFieldName === 'value' || subFieldName === 'other') {
						if (!fieldOptions.errorMessages) {
							fieldOptions.errorMessages = {};
						}

						(fieldOptions.errorMessages as ChoiceFieldErrorMessages)[subFieldName] = subErrors;
						continue;
					}

					const subFieldOptions = fieldOptions[subFieldName] || {};

					(subFieldOptions as FieldOptions).errorMessages = subErrors;

					fieldOptions[subFieldName] = subFieldOptions;
				}
			} else {
				continue;
			}

			newForm[sectionName].questions[fieldName].fieldOptions = fieldOptions;
		}
	}

	return newForm;
}
