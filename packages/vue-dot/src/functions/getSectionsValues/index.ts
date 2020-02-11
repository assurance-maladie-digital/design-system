import { Sections } from './types';
import { FormValues } from './../getFormValues/types';
import { getFormValues } from '../getFormValues';

/**
 * Return an array with all the field values includes in all sections
 *
 * @param {Sections} sections The sections of the questionnaire
 * @returns {FormValues} The sections values of each questions
 */
export function getSectionsValues(sections: Sections): FormValues {
	let responses: FormValues = {};

	for (const section of Object.values(sections)) {
		const sectionResponses = getFormValues(section.questions);
		responses = { ...responses, ...sectionResponses };
	}

	return responses;
}
