 import FranceConnectBtn from '@/elements/FranceConnectBtn';

// Tests
describe('FranceConnectBtn', () => {
	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(FranceConnectBtn, {
			propsData: {
				href: 'https://app.franceconnect.gouv.fr/'
			}
		});
	});
});
