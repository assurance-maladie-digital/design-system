import colors from '@/colors';

describe('colors object', () => {
	it('should contains all colors', () => {
		expect(colors).toMatchSnapshot();
	});
});
