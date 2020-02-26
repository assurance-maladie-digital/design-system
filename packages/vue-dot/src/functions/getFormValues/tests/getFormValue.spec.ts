import { formNull, formNotNull, sectionGroup } from './data/forms';
import { FormType } from './../types';

import { getFormValues } from '../';

// Tests
describe('getFormValues', () => {
	it('returns all values', () => {
		expect(getFormValues(formNotNull)).toMatchSnapshot();
	});

	it('returns all values of multiple section', () => {
		expect(getFormValues(sectionGroup, 'section_group')).toMatchSnapshot();
	});

	it('returns an empty object when all values are null', () => {
		expect(getFormValues(formNull)).toEqual({});
	});

	it('returns an empty object values when incorrect form type in parameter', () => {
		expect(getFormValues(sectionGroup, 'type unknow' as FormType)).toMatchSnapshot();
	});
});
