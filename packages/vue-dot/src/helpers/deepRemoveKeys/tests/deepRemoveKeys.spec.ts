import { deepRemoveKeys } from '../';

// Tests
describe('deepRemoveKeys', () => {
	it('delete a key', () => {
		const objToDeepRemove = {
			a: {
				b: 'b',
				c: [{ e: 'key to delete' }]
			}
		};

		const copiedObj = deepRemoveKeys(objToDeepRemove, 'b');

		expect(copiedObj).toEqual({
			a: {
				c: [{ e: 'key to delete' }]
			}
		});
	});

	it('delete multiple keys', () => {
		const objToDeepRemove = {
			a: {
				b: 'b',
				c: [{ e: 'key to delete' }]
			}
		};

		const copiedObj = deepRemoveKeys(objToDeepRemove, ['b', 'c']);

		expect(copiedObj).toEqual({
			a: {}
		});
	});

	it('delete deep key', () => {
		const objToDeepRemove = {
			a: {
				b: 'b',
				c: [{ e: 'key to delete' }]
			}
		};

		const copiedObj = deepRemoveKeys(objToDeepRemove, 'e');

		expect(copiedObj).toEqual({
			a: {
				b: 'b',
				c: [{}]
			}
		});
	});

});
