import { deepRemoveKeys } from '../';
import { deepCopy } from '../../../helpers/deepCopy';

const BASE_OBJECT = {
	b: 'b',
	c: [
		{
			e: 'e'
		}
	]
};

const DEEP_OBJECT = {
	a: BASE_OBJECT
};

const DEEP_ARRAY = [
	BASE_OBJECT
];

// Tests
describe('deepRemoveKeys', () => {
	it('deletes a key', () => {
		const deepObject = deepCopy(DEEP_OBJECT);

		const newCollection = deepRemoveKeys(deepObject, 'c');

		expect(newCollection).toEqual({
			a: {
				b: 'b'
			}
		});
	});

	it('deletes multiple keys', () => {
		const deepObject = deepCopy(DEEP_OBJECT);

		const newCollection = deepRemoveKeys(deepObject, ['b', 'c']);

		expect(newCollection).toEqual({
			a: {}
		});
	});

	it('deletes deep key in object', () => {
		const deepObject = deepCopy(DEEP_OBJECT);

		const newCollection = deepRemoveKeys(deepObject, 'e');

		expect(newCollection).toEqual({
			a: {
				b: 'b',
				c: [
					{}
				]
			}
		});
	});

	it('deletes deep key in array', () => {
		const deepArray = deepCopy(DEEP_ARRAY);

		const newCollection = deepRemoveKeys(deepArray, 'c');

		expect(newCollection).toEqual([
			{
				b: 'b'
			}
		]);
	});
});
