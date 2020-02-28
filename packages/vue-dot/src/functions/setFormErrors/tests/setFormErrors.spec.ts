import { setFormErrors } from '../';
import { FormType } from './../../../patterns/FormBuilder/types';
import { formErrors, questionErrors, form, sectionGroup } from './data/formErrors';

// Tests
describe('setFormErrors', () => {
	it('sets error messages on different fields', () => {
		expect(setFormErrors(questionErrors, form)).toMatchSnapshot();
	});

	it('doesn\'t sets an error on unknown field', () => {
		expect(setFormErrors(formErrors, form)).toMatchSnapshot();
	});

	it('returns the form with errors messages in multiple section', () => {
		expect(setFormErrors(formErrors, sectionGroup, 'section_group')).toMatchSnapshot();
	});

	it('returns an empty object values when incorrect form type in parameter', () => {
		expect(setFormErrors(formErrors, sectionGroup, 'type unknow' as FormType)).toMatchSnapshot();
	});
});
