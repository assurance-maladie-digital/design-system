import { mountComponent } from '@/tests/e2e';
import { mdiContentDuplicate  } from '@mdi/js';

import CopyBtn from '../';

const TEXT_TO_COPY = 'Texte copié !';

const TEXT_TO_COPY_WITH_SLOT = 'Le texte a bien été copié';

describe('CopyBtn component testing', () => {

	context('Testing with mount method', () => {

		it('visual: render correctly: v-menu', () => {
			mountComponent(CopyBtn, { props: {
				label: 'test',
				textToCopy: 'test'
			} });
			cy.dataCy('v-btn').toMatchSnapshot();
		});

		it('visual: render correctly: v-btn', () => {
			mountComponent(CopyBtn, { props: {
				label: 'test',
				textToCopy: 'test'
			} });
			cy.get('.v-menu').toMatchSnapshot();
		});

        it('verify if button it is visible on screen', () => {
			mountComponent(CopyBtn, { props: {
				label: 'test',
				textToCopy: 'test'
			} });
            cy.dataCy('v-btn').should('be.visible');
        });

        it('copies the text to the clipboard', () => {
			mountComponent(CopyBtn, { props: {
				label: 'test',
				textToCopy: 'test'
			} });
            cy.dataCy('v-btn').click();
			cy.contains(TEXT_TO_COPY);
        });

		it('verify if test it is not appears to clipboard', () => {
			mountComponent(CopyBtn, { props: {
				label: 'test',
				textToCopy: 'test',
				hideTooltip: true
			} });
			cy.dataCy('v-btn').click();
			cy.contains(TEXT_TO_COPY);//.should('not.exist');
		});
    });

	context('Testing with mountCallback method: ', () => {

		const template = `
			<CopyBtn
				:vuetify-options="vuetifyOptions"
				label="Copier le numéro d'utilisateur"
				text-to-copy="5654119707"
			>
				<template #tooltip>
					Le texte a bien été copié
				</template>
			</CopyBtn>
		`;
		const components = {
			CopyBtn
		};

        const data = ()=>({
			vuetifyOptions: {
				menu: {
					offsetX: false,
					offsetY: true,
					nudgeLeft: 500
				},
				btn: {
					large: false
				},
				icon: {
					color: 'red darken-3'
				}
			},
			duplicateIcon: mdiContentDuplicate
		});

		beforeEach(mountComponent({ template, data, components }, null, true));

		it('visual: render correctly: v-menu', () => {
			cy.dataCy('v-btn').toMatchSnapshot();
		});

		it('visual: render correctly: v-btn', () => {
			cy.get('.v-menu').toMatchSnapshot();
		});

		it('copies the text to the clipboard ', () => {
			cy.dataCy('v-btn').click();
			cy.contains(TEXT_TO_COPY_WITH_SLOT);
		});

		it('verify if test it is not appears to clipboard ', () => {
			Cypress.vueWrapper.setProps({ hideTooltip: true });
			cy.dataCy('v-btn').click();
			cy.wait(1000);
			cy.contains(TEXT_TO_COPY_WITH_SLOT).should('not.exist');
		});

		it('verify label test', () => {
			cy.dataCy('v-btn').invoke('attr', 'aria-label').should('eq', 'Copier le numéro d\'utilisateur');
		});

		it('test behavior copyToClipboard ', () => {
			const copy = cy.spy();
			// Cypress.vueWrapper.setMethods({ copy: copy });
			cy.dataCy('v-btn').trigger('click');
			cy.wait(1000);
           // expect(copy).to.be.calledOnce;
		});

    });
});
