import CopyBtn from '@/elements/CopyBtn';

const TEXT_TO_COPY_ONE = 'Texte copié !';

const props = {
	label: 'test',
	textToCopy: 'test'
};

describe('CopyBtn', () => {

    it('renders component correctly', ()=> {
        cy.mountComponent(CopyBtn, { props });
        cy.get('#__cy_root').toMatchSnapshot();
    });

    it('Text copy to clipboard', () => {
        cy.mountComponent(CopyBtn, { props });
        cy.dataCy('v-btn').click();
        cy.get('v-menu__content').should('not.exist');
    });

    it('hide ToolTip', () => {
        cy.mountComponent(CopyBtn, { props });
        cy.vue().then((wrapper)=>{
            wrapper.setProps({ hideTooltip: true });
        });

        cy.dataCy('v-btn').click();
        cy.get('v-menu__content').should('not.exist');
    });

});