import ExternalLinks from '@/elements/ExternalLinks';

// Tests
describe('ExternalLinks', () => {
	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(ExternalLinks, {
			propsData: {
				position: 'top left'
			}
		});
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
