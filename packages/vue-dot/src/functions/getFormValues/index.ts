import { FormValues } from './types';

import { Form } from '../../patterns/FormSection/types';
import { SectionGroup } from '../../patterns/FormSectionGroup/types';
import { FormType } from '../../patterns/FormBuilder/types';
import { FormTypeEnum } from '../../patterns/FormBuilder/formTypeEnum';

/**
 * Return an object with field values
 *
 * @param {Form} form The form object
 * @returns {FormValues} The form values
 */
function getFormSectionValues(form: Form): FormValues {
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

/**
 * Return an object with all the field values includes in all sections
 *
 * @param {SectionGroup} sectionGroup The sections of the questionnaire
 * @returns {FormValues} The sections values of each questions
 */
function getFormSectionGroupValues(sectionGroup: SectionGroup): FormValues {
	let responses: FormValues = {};
	for (const section of Object.values(sectionGroup)) {
		const sectionResponses = getFormSectionValues(section.questions);
		responses = { ...responses, ...sectionResponses };
	}

	return responses;
}

/**
 * Return an object with field values depending on the form type
 *
 * @param {Form|SectionGroup} form The form object to get the values
 * @param {FormType} formType The type of the form to detect the structure
 * @returns {FormValues} All the fields's value in the form
 */
export function getFormValues(form: (Form | SectionGroup), formType: FormType = FormTypeEnum.FORM): FormValues {
	let responses: FormValues = {};
	if (formType === FormTypeEnum.FORM) {
		responses = getFormSectionValues(form as Form);
	} else if (formType === FormTypeEnum.SECTION_GROUP) {
		responses = getFormSectionGroupValues(form as SectionGroup);
	}
	return responses;
}
