import { formatNir } from '../';

// Tests
describe('formatNir', () => {
	it('formats a NIR wit a key', () => {
		const nir = '295042531115732';

		expect(formatNir(nir)).toEqual('2 95 04 25 311 157 32');
	});

	it('formats a NIR without a key', () => {
		const nir = '2950425311157';

		expect(formatNir(nir)).toEqual('2 95 04 25 311 157');
	});
});
