import CopyBtn from '@/elements/CopyBtn';

const TEXT_TO_COPY_ONE = 'Texte copié !';

const props = {
	label: 'test',
	textToCopy: 'test'
};

describe('CopyBtn', () => {

    beforeEach(()=> {
        cy.mountComponent(CopyBtn, { props });
    });

    it('renders component', ()=> {
         cy.dataCy('v-btn').click();

         cy.contains(TEXT_TO_COPY_ONE);
    });

     //  hideTooltip: true

    it('hide ToolTip', () => {

        cy.vue().then((wrapper)=>{
            wrapper.setProps({ hideTooltip: true });
        });

        cy.dataCy('v-btn').click();
    });

});