import questionForm from '../../../patterns/FormBuilder/tests/data/questionForm';

import { formErrors, questionErrors, form } from './data/formErrors';

import setFormErrors from '../';

// Tests
describe('setFormErrors', () => {
	it('sets error messages on different fields', () => {
		expect(setFormErrors(questionErrors, questionForm)).toMatchSnapshot();
	});

	it('doesn\'t sets an error on unknow field', () => {
		expect(setFormErrors(formErrors, form)).toMatchSnapshot();
	});
});
