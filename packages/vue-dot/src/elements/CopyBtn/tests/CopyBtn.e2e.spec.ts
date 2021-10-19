import { mountComponent } from '@/tests/e2e';
import { mdiContentDuplicate  } from '@mdi/js';
// import { VIcon } from 'vuetify/lib';

import CopyBtn from '../';

describe('CopyBtn component testing', () => {

	const TEXT_TO_COPY = 'Texte copié !';
	const TEXT_TO_COPY_WITH_SLOT = 'Le texte a bien été copié';

	const vuetifyOptions = {
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
	};

	const props = {
		label: 'test',
		textToCopy: 'test'
	};

	context(' Visual testing ', () => {

		it('render correctly ', () => {
			mountComponent(CopyBtn, { props });
			cy.get('body').toMatchSnapshot();
		});

	});

	context(' Unit testing ', () => {
		beforeEach(()=>{
			mountComponent(CopyBtn, { props });
		});

        it('verify if button it is visible on screen', () => {
            cy.dataCy('v-btn').should('be.visible');
        });

        it('copies the text to the clipboard', () => {
            cy.dataCy('v-btn').click();
            cy.contains(TEXT_TO_COPY);
        });

		it('verify if test it is not appears to clipboard', () => {
			Cypress.vueWrapper.setProps({ hideTooltip: true });
			cy.dataCy('v-btn').click().contains(TEXT_TO_COPY).should('not.exist');
		});
    });

	context('Unit test with callback mount', () => {

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

        const data = ()=>({ vuetifyOptions: vuetifyOptions, duplicateIcon: mdiContentDuplicate });

		beforeEach(mountComponent({ template, data, components }, null, true));

		it('override vuetify options ', () => {
			cy.dataCy('v-btn').click();
			cy.contains(TEXT_TO_COPY_WITH_SLOT);
		});

		it('test behavior copyToClipboard ', () => {
			cy.dataCy('v-btn').click();
		});
    });

	context('Spy and stub method', () => {

		it('override vuetify options ', () => {
			mountComponent(CopyBtn, { props });
			cy.dataCy('v-btn').click();
		});
    });
});
