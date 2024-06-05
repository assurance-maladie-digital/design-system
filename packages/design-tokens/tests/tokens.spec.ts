import { tokens, colorTheme, colorBootstrapTheme } from '../src';

describe('tokens', () => {
	it('registers all tokens', () => {
		expect(tokens).toMatchSnapshot();
	});

	it('creates color theme', () => {
		expect(colorTheme).toMatchSnapshot();
	});

	it('creates bootstrap color theme', () => {
		expect(colorBootstrapTheme).toMatchSnapshot();
	});
});
