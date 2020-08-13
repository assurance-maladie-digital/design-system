import { tokens } from '../src/tokens';

describe('tokens', () => {
	it('should register all tokens', () => {
		expect(tokens).toMatchSnapshot();
	});
});
