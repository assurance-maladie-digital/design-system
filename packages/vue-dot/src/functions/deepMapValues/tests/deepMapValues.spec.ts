import { deepMapValues } from '..';

const BASE_OBJECT = {
	value: 0,
	section1: {
		question1: {
			value: 1
		},
		question2: {
			value: {
				value: '2',
				other: 'autre'
			}
		},
		question3: {
			value: null
		},
		question4: {
			value: {
				value: null,
				other: null
			}
		},
		question5: [
			{
				value: '1'
			}
		]
	}
};

// Tests
describe('deepMapValues', () => {
	it('returns the desired values', () => {
		const newCollection = deepMapValues(BASE_OBJECT, 'value');

		expect(newCollection).toEqual({
			question1: BASE_OBJECT.section1.question1.value,
			question2: BASE_OBJECT.section1.question2.value,
			question4: BASE_OBJECT.section1.question4.value
		});
	});
});
