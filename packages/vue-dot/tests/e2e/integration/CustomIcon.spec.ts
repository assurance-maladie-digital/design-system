import CustomIcon from '@/elements/CustomIcon';

import { Wrapper } from '@vue/test-utils';

import { icons } from '../fixtures/icons';

describe('CustomIcon', () => {

    const VD_OPTIONS = {
        theme: {
            icons: {
                digital: icons.digital
            }
        }
    };

    const mocks = {
        $vd: VD_OPTIONS
    };

    it('renders component properly', () => {
        cy.mountComponent(CustomIcon, {
            mocks,
            propsData: {
				icon: 'digital',
                xLarge: true
			}
        })
        .vue()
        .then((wrapper: Wrapper<Vue, Element>)=>{
           const existIcon = wrapper.find('svg').exists();
           expect(existIcon).to.be.true;
        });
        cy.get('#__cy_root').toMatchSnapshot();
    });

    it('renders component properly with size', () => {
        cy.mountComponent(CustomIcon, {
            mocks,
            propsData: {
				icon: 'digital',
                xLarge: true,
                size: '64px'
			}
        })
        .vue()
        .then((wrapper: Wrapper<Vue, Element>)=>{
           expect( wrapper.find('.vd-x-large').exists()).to.be.true;
           expect( wrapper.find('svg').exists()).to.be.true;
        });
    });
});