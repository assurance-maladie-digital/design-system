import { mountComponent } from '@/tests/e2e';

import CopyBtn from '../';

describe('CopyBtn', () => {

	const textToCopy = 'Texte copié !';

	describe('show tooltip', () => {

		beforeEach(() => {
			mountComponent(CopyBtn);
			cy.dataCy('v-btn').as('copyBtn');
		});

		it('Copy text to clipboard', () => {
			cy.get('@copyBtn').click();
			cy.contains(textToCopy).should('be.visible');
		});
	});

	describe('Tooltip hidden', () => {

		beforeEach(() => {
			mountComponent(CopyBtn, {
				propsData: {
					hideTooltip: true
				}
			});
			cy.dataCy('v-btn').as('copyBtn');
		});

		it('Hide tooltip', () => {
			cy.get('@copyBtn').click();
			cy.document().contains(textToCopy).should('not.exist');
		});
	});

});
