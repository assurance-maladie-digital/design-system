import { insertAt } from '../';

const testStr = 'testtest';

// Tests
describe('insertAt', () => {
	it('inserts a string at a specific position', () => {
		expect(insertAt(testStr, 4, '-')).toEqual('test-test');
	});

	it('does not fail if the position does not exist', () => {
		expect(insertAt(testStr, 40, '-')).toEqual(testStr + '-');
	});
});
