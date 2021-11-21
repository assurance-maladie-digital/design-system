import PageContainer from '@/elements/PageContainer';

// Tests
describe('PageContainer', () => {
	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(PageContainer);
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
