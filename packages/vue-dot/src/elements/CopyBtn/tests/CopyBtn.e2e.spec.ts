import { mountComponent } from '@/tests/e2e';
import CopyBtn from '../';

describe('CopyBtn', () => {
	const textToCopy = 'Texte copié !';

	beforeEach(() => {
		mountComponent(CopyBtn);
	});

	it('copies the text to the clipboard', () => {
		cy.dataCy('v-btn').should('exist').click();
		cy.document().contains(textToCopy);
	});
});
