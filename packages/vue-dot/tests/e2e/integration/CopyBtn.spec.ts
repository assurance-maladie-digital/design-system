import { mountComponent } from '../';
import CopyBtn from '@/elements/CopyBtn';

const TEXT_TO_COPY_ONE = 'Texte copié!';

const TEXT_TO_COPY_TWO = 'Le texte a bien été copié';

const props = {
	label: 'test',
	textToCopy: 'test'
};

describe('CopyBtn component testing', () => {

	context('Testing with mount method', () => {

		beforeEach(()=>{
			mountComponent(CopyBtn, { props });
			cy.dataCy('v-btn').as('VBtn');
		});

        it('check the visibility of the click button on the screen', () => {
            cy.get('@VBtn').should('be.visible');
        });

        it('copies the text to the clipboard then menu content appears: tooltip show', () => {
            cy.get('@VBtn').click();
			cy.contains(TEXT_TO_COPY_ONE);
			cy.get('.v-menu__content');
        });

		it('copies the text to the clipboard but menu content not appears : tooltip not showing', () => {
			Cypress.vueWrapper.setProps({ hideTooltip: true });
			cy.get('@VBtn').click();
			cy.contains(TEXT_TO_COPY_ONE).should('not.exist');
			cy.get('.v-menu__content').should('not.exist');
		});
    });

	context('Mount with default template', () => {
		const template = `
			<CopyBtn
				label="Copier le numéro d'utilisateur"
				text-to-copy="5654119707"
			>
		`;
		const components = {
			CopyBtn
		};

		beforeEach(mountComponent({ template, components }, {}, true));

		it('Check the label test', () => {
			cy.dataCy('v-btn').invoke('attr', 'aria-label').should('eq', 'Copier le numéro d\'utilisateur');
		});

    });

	context('Mount with tooltip slot', () => {
		const template = `
			<CopyBtn
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

		beforeEach(mountComponent({ template, components }, {}, true));

		it('check tooltip showing ', () => {
            cy.dataCy('v-btn').click();
			cy.contains(TEXT_TO_COPY_TWO);
			cy.get('.v-menu__content');
        });

    });

	context('Mount with options', () => {
		const template = `
			<CopyBtn
				:vuetify-options="vuetifyOptions"
				label="Copier le numéro d'utilisateur"
				text-to-copy="5654119707"
			/>
		`;

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
			}
		});

		const components = {
			CopyBtn: CopyBtn
		};

		beforeEach(mountComponent({}, { template, data, components }, true));

		it('render vuetify options object', () => {
        expect(Cypress.vue.vuetifyOptions).to.deep.equal(
			{
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
			});
        }
		);
    });
});