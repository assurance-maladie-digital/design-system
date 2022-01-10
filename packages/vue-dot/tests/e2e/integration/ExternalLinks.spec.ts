import ExternalLinks from '@/elements/ExternalLinks';

describe('ExternalLinks', () => {
	it('renders correctly', () => {
		cy.mountComponent(ExternalLinks, {
			propsData: {
				position: 'top left'
			}
		});

		cy.get('#__cy_root').toMatchSnapshot();
	});
});
