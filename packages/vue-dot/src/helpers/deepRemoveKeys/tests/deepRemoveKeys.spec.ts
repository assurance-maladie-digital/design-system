import { deepRemoveKeys } from '../';
import { deepCopy } from '../../../helpers/deepCopy';

const objToDeepRemove = {
	a: {
		b: 'b',
		c: [{ e: 'key to delete' }]
	}
};

const objToDeepRemove2 = [
	{
		b: 'b',
		c: [{ e: 'key to delete' }]
	}
];

// Tests
describe('deepRemoveKeys', () => {
	it('deletes a key', () => {
		const copie = deepCopy(objToDeepRemove);

		const newCollection = deepRemoveKeys(copie, 'b');

		expect(newCollection).toEqual({
			a: {
				c: [{ e: 'key to delete' }]
			}
		});
	});

	it('deletes multiple keys', () => {
		const copie = deepCopy(objToDeepRemove);

		const newCollection = deepRemoveKeys(copie, ['b', 'c']);

		expect(newCollection).toEqual({
			a: {}
		});
	});

	it('delete deep key in object', () => {
		const copie = deepCopy(objToDeepRemove);

		const newCollection = deepRemoveKeys(copie, 'e');

		expect(newCollection).toEqual({
			a: {
				b: 'b',
				c: [{}]
			}
		});
	});

	it('delete deep key in an array', () => {
		const copie = deepCopy(objToDeepRemove2);

		const newCollection = deepRemoveKeys(copie, 'c');

		expect(newCollection).toEqual([
			{
				b: 'b'
			}
		]);
	});
});
