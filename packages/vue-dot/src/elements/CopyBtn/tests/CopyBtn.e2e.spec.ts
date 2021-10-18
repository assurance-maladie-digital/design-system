import { mountComponent } from '@/tests/e2e';
import { mdiContentDuplicate  } from '@mdi/js';
import { VIcon } from 'vuetify/lib';

import CopyBtn from '../';

describe('CopyBtn component testing', () => {

	const textToCopy = 'Texte copié !';

	const vuetifyOptions = {
		menu: {
			offsetX: false,
			offsetY: true,
			nudgeLeft: 50
		},
		btn: {
			large: true
		},
		icon: {
			color: 'grey darken-3'
		}
	};

	const props = {
		hideTooltip: false,
		label: 'test',
		textToCopy: 'test',
		tooltipDuration: 250,
		vuetifyOptions: vuetifyOptions
	};

	context(' Visual testing ', () => {

		it('render correctly ', () => {
			// const btn = () => import('../CopyBtn.vue');
				// Mount component
			mountComponent(CopyBtn, { props });
			// console.log(' wrapper ', cy.document())
			cy.get('body').toMatchSnapshot();
		});

	});

	context(' Unit testing ', () => {

        beforeEach(()=> {
            mountComponent(CopyBtn, { props });
            cy.dataCy('v-btn').as('btn');
        });

        it('Test if is mount', () => {
            cy.get('@btn').should('be.visible');
        });

        it('copies the text to the clipboard', () => {
            cy.get('@btn').click();
			//const copy = Cypress.sinon.stub();
			// expect(copy).to.have.been.calledTwice;
            cy.contains(textToCopy);
        });

		it('Hide toolTip ', () => {
			Cypress.vueWrapper.setProps({ hideTooltip: true });
			cy.get('@btn').click().contains(textToCopy).should('not.exist');
		});

		it('calls mixin "customizable" method', () => {
			const customizable = Cypress.sinon.stub();
			//expect(customizable).to.have.been.calledTwice;
		});
    });
});
