import * as cliHelpers from '@/index';

describe('lib', () => {
	it('should register all helpers', () => {
		expect(cliHelpers).toMatchSnapshot();
	});
});
