import HeaderLoading from '@/elements/HeaderLoading';

// Tests
describe('HeaderLoading', () => {
	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(HeaderLoading);
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
