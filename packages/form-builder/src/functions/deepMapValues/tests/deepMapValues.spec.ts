import { deepMapValues } from '..';

const BASE_OBJECT = {
	value: 0,
	section1: {
		question1: {
			value: 1
		},
		question2: {
			value: {
				value: '2'
			}
		},
		question3: {
			value: null
		}
	}
};

// Tests
describe('deepMapValues', () => {
	it('get the values into a new collection', () => {
		const newCollection = deepMapValues(BASE_OBJECT, 'value');

		expect(newCollection).toEqual({
			question1: 1,
			question2: {
				value: '2'
			}
		});
	});
});
