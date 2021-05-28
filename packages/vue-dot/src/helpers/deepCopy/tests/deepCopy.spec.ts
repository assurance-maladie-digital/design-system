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

	it('should copy an array containing falsy values', () => {
		const arrayToCopy = [[false, null, 0]];

		const copiedArray = deepCopy(arrayToCopy);

		expect(copiedArray[0][0]).toBe(false);
		expect(copiedArray[0][1]).toBeNull();
		expect(copiedArray[0][2]).toBe(0);

		copiedArray[0][0] = 'test';
		copiedArray[0][1] = 'test';
		copiedArray[0][2] = 'test';

		expect(copiedArray[0][0]).toBe('test');
		expect(copiedArray[0][1]).toBe('test');
		expect(copiedArray[0][2]).toBe('test');

		expect(arrayToCopy[0][0]).toBe(false);
		expect(arrayToCopy[0][1]).toBeNull();
		expect(arrayToCopy[0][2]).toBe(0);
	});
});
