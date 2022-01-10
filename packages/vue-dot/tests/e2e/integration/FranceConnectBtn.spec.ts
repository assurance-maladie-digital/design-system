import FranceConnectBtn from '@/elements/FranceConnectBtn';

describe('FranceConnectBtn', () => {
	it('renders correctly', () => {
		cy.mountComponent(FranceConnectBtn, {
			propsData: {
				href: 'https://app.franceconnect.gouv.fr/'
			}
		});

		cy.get('#__cy_root').toMatchSnapshot();
	});
});
