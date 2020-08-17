import { tokens } from '../src';

describe('tokens', () => {
	it('should register all tokens', () => {
		expect(tokens).toMatchSnapshot();
	});
});
