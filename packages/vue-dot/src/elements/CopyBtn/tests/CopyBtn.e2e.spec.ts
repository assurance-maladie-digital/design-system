import { mount } from '@cypress/vue';
import CopyBtn from '../';
// Add Vuetify
import { vuetify }  from '../../../../dev/vuetify';

describe('CopyBtn', () => {
	const textToCopy = 'Texte copié !';

	beforeEach(() => {
		mount(CopyBtn,
			{
				vuetify
			});
	});

	it('copies the text to the clipboard', () => {
		cy.dataCy('btn').should('exist').click();
		cy.document().contains(textToCopy);
	});
});