import HeaderLoading from '@/elements/HeaderLoading';

describe('HeaderLoading', () => {
	it('renders correctly', () => {
		cy.mountComponent(HeaderLoading);
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
