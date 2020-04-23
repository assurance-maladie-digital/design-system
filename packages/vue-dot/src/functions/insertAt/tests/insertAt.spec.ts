import { insertAt } from '../';

const testStr = 'testtest';

// Tests
describe('insertAt', () => {
	it('inserts a string at a specific position', () => {
		expect(insertAt(testStr, 4, '-')).toEqual('test-test');
	});

	it('doesn\'t fail if the position doesn\'t exists', () => {
		expect(insertAt(testStr, 40, '-')).toEqual(testStr + '-');
	});
});
