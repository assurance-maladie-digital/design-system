import { deepCopy } from '../';

// Tests
describe('deepCopy', () => {
	it('should copy an object without reference', () => {
		const objToCopy = {
			a: {
				b: 'b'
			}
		};

		const copiedObj = deepCopy(objToCopy);

		copiedObj.a.b = 'test';

		expect(copiedObj.a.b).toBe('test');
		expect(objToCopy.a.b).toBe('b');
	});

	it('should copy an array without reference', () => {
		const arrayToCopy = [['a']];

		const copiedArray = deepCopy(arrayToCopy);

		copiedArray[0][0] = 'test';

		expect(copiedArray[0][0]).toBe('test');
		expect(arrayToCopy[0][0]).toBe('a');
	});

	it('should copy an array containing undefined', () => {
		const arrayToCopy = [[undefined]];

		const copiedArray = deepCopy(arrayToCopy);

		expect(copiedArray[0][0]).toBe(undefined);

		copiedArray[0][0] = 'test';

		expect(copiedArray[0][0]).toBe('test');
		expect(arrayToCopy[0][0]).toBe(undefined);
	});
});
