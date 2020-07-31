import tokens from '../src/tokens';

describe('tokens', () => {
	it('should register all tokens', () => {
		// Remove config
		delete tokens._jsonToScss;

		expect(tokens).toMatchSnapshot();
	});
});
