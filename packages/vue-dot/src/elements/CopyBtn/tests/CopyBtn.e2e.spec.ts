import { mountComponent } from '@/tests/e2e';
import {
	mount,
	mountCallback
} from '@cypress/vue';

import CopyBtn from '../';

describe('CopyBtn component', () => {

 describe(' default render CopyBtn ', () => {

        const textToCopy = 'Texte copié !';

        const props = {
            hideTooltip: false,
            label: 'test',
            textToCopy: 'test'
        };

        beforeEach(()=> {
            mountComponent(CopyBtn, { propsData: props });
            cy.dataCy('v-btn').as('btn');
        });

        it('Test if is mount', () => {
            cy.get('@btn').should('be.visible');
        });

        it('copies the text to the clipboard', () => {
            cy.get('@btn').click();
            cy.contains(textToCopy);
        });

        it('Hide tooltip', () => {
            Cypress.vue.$props.hideTooltip = true;
            cy.get('@btn').click();
            cy.document().contains(textToCopy).should('not.exist');
        });
    });
    /*
    describe('Test slot ', ()=> {
        const template = '<div id="app">{{ message }}</div>';
        const fullMount = true;

        function data() {
           return { message: 'Hello Vue!'}
        };

        beforeEach(mountComponent({ template, data }, null, true));

        it('Hide tooltip', () => {
           cy.contains('Hello Vue!')
        });
    });*/

    describe('Test copy method', ()=> {

        beforeEach(() => {
            mountComponent(CopyBtn);
        });

        it('click CopyBtn', () => {

           cy.get('button')
             .click()
             .then(() => {
                // expect(spy).to.be.calledOnce
             });
        });
    });
});
