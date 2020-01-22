import questionForm from '../../../patterns/FormBuilder/tests/data/questionForm';

import { formErrors, questionErrors, form } from './data/formErrors';

import setFormErrors from '..';

// Tests
describe('setFormErrors', () => {
	it('Set error messages on difference field type', () => {
		expect(setFormErrors(questionErrors, questionForm)).toMatchSnapshot();
	});

	it('Don"t set an error on unknow field', () => {
		expect(setFormErrors(formErrors, form)).toMatchSnapshot();
	});

});
