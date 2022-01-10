import CopyBtn from '@/elements/CopyBtn';

const textToCopy = 'Texte copié !';

const props = {
	label: 'test',
	textToCopy
};

describe('CopyBtn', () => {
	it('renders component correctly', () => {
		cy.mountComponent(CopyBtn, {
			props
		});

		cy.get('#__cy_root').toMatchSnapshot();
	});

	it('copies text to clipboard', () => {
		cy.mountComponent(CopyBtn, {
			props
		});

		cy.dataCy('v-btn').click();

		cy.contains(textToCopy).should('exist');
	});

	it('copies text to clipboard without tooltip effet', () => {
		cy.mountComponent(CopyBtn, {
			props
		});

		cy.vue().then((wrapper)=>{
			wrapper.setProps({
				hideTooltip: true
			});
		});

		cy.dataCy('v-btn').click();

		cy.contains(textToCopy).should('not.exist');
	});
});
