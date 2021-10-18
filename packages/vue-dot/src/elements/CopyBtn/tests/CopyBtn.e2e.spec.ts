import { mountComponent } from '@/tests/e2e';
import { mdiContentDuplicate  } from '@mdi/js';
import { VIcon } from 'vuetify/lib';

import CopyBtn from '../';

describe('CopyBtn component testing', () => {

	const textToCopy = 'Texte copié !';

	it('render correctly ', () => {
		// const btn = () => import('../CopyBtn.vue');
			// Mount component
		const wrapper = mountComponent(CopyBtn, {
			props: {
				label: 'test',
				textToCopy: 'test'
			}
		});
		// console.log(' wrapper ', cy.document())
		//cy.wrap({ vbtn: CopyBtn }).toMatchSnapshot();
	});

	context(' CopyBtn mounting ', () => {

        const props = {
            hideTooltip: false,
            label: 'test',
            textToCopy: 'test'
        };

        beforeEach(()=> {
            mountComponent(CopyBtn, { props });
            cy.dataCy('v-btn').as('btn');
        });

        it('Test if is mount', () => {
            cy.get('@btn').should('be.visible');
        });

        it('copies the text to the clipboard', () => {
            cy.get('@btn').click();
            cy.contains(textToCopy);
        });

		it('Hide toolTip ', () => {
			Cypress.vueWrapper.setProps({ hideTooltip: true });
			cy.get('@btn').click().contains(textToCopy).should('not.exist');
		});
    });

});
