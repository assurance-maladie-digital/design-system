import { incorrectFormErrors, questionErrors, sectionGroup } from './data/SectionGroupErrors';

import { setSectionGroupErrors } from '..';

// Tests
describe('setFormErrors', () => {
	it('sets error messages on different fields', () => {
		expect(setSectionGroupErrors(questionErrors, sectionGroup)).toMatchSnapshot();
	});

	it('doesn\'t sets an error on unknown field', () => {
		expect(setSectionGroupErrors(incorrectFormErrors, sectionGroup)).toMatchSnapshot();
	});
});
