import DialogBox from '@/elements/DialogBox';

describe('DialogBox', () => {
	it('renders correctly', () => {
		cy.mountComponent(DialogBox, {
			propsData: {
				value: true,
				width: '300px'
			}
		});

		cy.get('#__cy_root').toMatchSnapshot();
	});
});
