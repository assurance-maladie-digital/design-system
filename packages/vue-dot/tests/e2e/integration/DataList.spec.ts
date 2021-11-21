import DataList from '@/elements/DataList';

import { mdiCalendar, mdiAccount } from '@mdi/js';
import { Wrapper } from '@vue/test-utils';
import Vue from 'vue';

type Datalist = {
	key: string,
	value:string,
	icon:string,
	class?:string,
	action?: string
};
// Tests
describe('DataList', () => {

	const items: Datalist[] = [
		{
			key: 'Nom',
			value: 'Dupont',
			icon: 'accountIcon'
		},
		{
			key: 'Prénom',
			value: 'Paul',
			icon: 'accountIcon'
		},
		{
			key: 'Date de naissance',
			value: '24/09/1970',
			icon: 'calendarIcon'
		}
	];

	it('renders correctly', () => {
		cy.mountComponent(DataList, {
			propsData: {
				items,
				icons: {
					calendarIcon: mdiCalendar,
					accountIcon: mdiAccount
				}
			}
		})
		.get('.vd-data-list')
		.should('be.visible');
		cy.get('#__cy_root').toMatchSnapshot();
	});

	it('renders correctly with a title', () => {
		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items,
				listTitle: 'Informations'
			}
		})
		.get('h4')
		.should('be.visible')
		.contains('Informations');
	});

	it('renders correctly with an empty list', () => {
		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items: []
			}
		})
		.vue()
		.then((wrapper: Wrapper<Vue, Element>)=> {
			// Check items does not exist
			const itemsExists = wrapper.find('.vd-data-list-item').exists();
			expect(itemsExists).be.false;
		});

	});

	it('renders correctly with an icon', () => {
		const listWithIcon = items;

		// Add an action to the second item
		listWithIcon[1].icon = 'mdiTest';

		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items: listWithIcon,
				icons: {
					mdiTest: 'test'
				}
			}
		})
		.vue()
		.then((wrapper: Wrapper<Vue, Element>)=>{
			// Check items does not exist
			const itemsExists = wrapper.find('.vd-data-list-item .v-icon').exists();
			expect(itemsExists).be.true;
		});

	});

	it('renders correctly with a class', () => {
		const listWithClass = items;

		// Add a class to the second item
		listWithClass[1].class = 'custom-class';

		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items: listWithClass
			}
		})
		.vue()
		.then((wrapper: Wrapper<Vue, Element>)=>{
			// Check that items now exist
			const itemsExists = wrapper.find('.vd-data-list-item.custom-class').exists();
			expect(itemsExists).be.true;
		});
	});

	it('renders loading state correctly', () => {
		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items: items,
				loading: true,
				itemsNumberLoading: 3,
				headingLoading: true
			}
		})
		.vue()
		.then((wrapper: Wrapper<Vue, Element>)=> {
			// Check that items does not exist
			const itemsExists = wrapper.find('.vd-data-list-item').exists();
			expect(itemsExists).be.false;

			wrapper.setProps({ loading: false });
			wrapper.vm.$nextTick();
		})
		.then((wrapper: Wrapper<Vue, Element>)=>{
			// Check that items now exist
			const itemsExists = wrapper.find('.vd-data-list-item').exists();
			expect(itemsExists).be.false;
		});
	});

	it('renders correctly with an action', () => {
		const listWithAction = items;

		// Add an action to the second item
		listWithAction[1].action = 'Edit';

		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items: listWithAction,
				flex: true
			}
		})
		.get('button').should('be.visible');
	});

	it('emits action event', () => {
		const listWithAction = items;

		// Add an action to the second item
		listWithAction[2].action = 'Edit';

		// Mount component
		cy.mountComponent(DataList, {
			propsData: {
				items: listWithAction,
				flex: true
			}
		})
		.vue()
		.then((wrapper: Wrapper<Vue, Element>)=> {
			// Find the second item element
			const itemWithAction = wrapper.findAll('.vd-data-list-item').at(2);
			expect(itemWithAction.exists()).be.true;

			// Find the button action in the second item and click on it
			const actionBtn = itemWithAction.find('.vd-data-list-item-action-btn');
			expect(actionBtn.exists()).be.true;

			actionBtn.trigger('click');

			// Wait until $emits have been handled
			expect(wrapper.emitted('click:item-action')).to.deep.equal([[2]]);
		});
	});
});
