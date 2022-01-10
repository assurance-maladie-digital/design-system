import DialogBox from '@/elements/DialogBox';

// Tests
describe('DialogBox', () => {
	it('renders correctly', () => {
		// Mount component
		cy.mountComponent(DialogBox, {
			propsData: {
				value: true,
				width: '300px'
			}
		});
		cy.get('#__cy_root').toMatchSnapshot();
	});
});
