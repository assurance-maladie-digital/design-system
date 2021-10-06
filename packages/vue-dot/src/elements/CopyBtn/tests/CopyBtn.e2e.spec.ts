import { mountComponent } from '../../../../cypress';
import CopyBtn from '../';

describe('CopyBtn', () => {
	const textToCopy = 'Texte copié !';

	beforeEach(() => {
		mountComponent(CopyBtn);
	});

	it('copies the text to the clipboard', () => {
		cy.dataCy('btn').should('exist').click();
		cy.document().contains(textToCopy);
	});
});