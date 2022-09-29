import { tokens, colorTheme } from '../src';

describe('tokens', () => {
	it('registers all tokens', () => {
		expect(tokens).toMatchSnapshot();
	});

	it('creates color theme', () => {
		expect(colorTheme).toMatchSnapshot();
	});
});
