import { FormErrors } from './types';
import { SectionGroup } from '../../patterns/FormSectionGroup/types';

import { deepCopy } from '../../helpers/deepCopy';
import { setFormErrors } from '../setFormErrors';

/**
 * Set error-messages prop on the each fields in error per section
 *
 * @param {FormErrors} formErrors The errors list for each fields from the api
 * @param {SectionGroup} sectionGroup The sectionGroup to modify
 * @returns {SectionGroup} The sectionGroup modified with errorsMessages
 */
export function setSectionGroupErrors(formErrors: FormErrors, sectionGroup: SectionGroup): SectionGroup {
	const newForm: SectionGroup = deepCopy(sectionGroup);

		for (let section of Object.values(newForm)) {
			section.questions = setFormErrors(formErrors, section.questions);
		}
	return newForm;
}
