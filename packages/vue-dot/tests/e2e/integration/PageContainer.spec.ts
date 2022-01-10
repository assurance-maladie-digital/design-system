import PageContainer from '@/elements/PageContainer';

describe('PageContainer', () => {
	it('renders correctly', () => {
		cy.mountComponent(PageContainer);
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
