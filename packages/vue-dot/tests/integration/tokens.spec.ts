import * as tokensSrc from '../../src/tokens';

interface TokensObj {
	default: {
		_jsonToScss: object;
	};
}

describe('tokens', () => {
	it('should register all tokens', () => {
		// Type default import
		const tokensObj = tokensSrc as unknown as TokensObj;
		const tokens = tokensObj.default;
		// Remove config
		delete tokens._jsonToScss;

		expect(tokens).toMatchSnapshot();
	});
});
