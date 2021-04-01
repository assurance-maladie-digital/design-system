import { action } from '@storybook/addon-actions';
import DataList from '../elements/DataList/index';
import *as icons from '@mdi/js';

export default {
	component: DataList,
	title: 'Elements/DataList',
	excludeStories: /.*Data$/,
	argTypes: {
		items: {
			type : { required: true },
			defaultValue : [
				{
					key: 'Nom',
					value: 'Dupont'
				},
				{
					key: 'Prénom',
					value: 'Paul'
				},
				{
					key: 'Date de naissance',
					value: '24/09/1970'
				},
				{
					key: 'Nombre d\'enfants',
					value: 2
				}
			],
			control: { type:'object' },
			table: { category: 'props' }
		},
		icons: { control: null , table: { category: 'props' } }
	}
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DataList },
	props: Object.keys(argTypes),
	template: '<DataList v-bind="$props" @click:item-action="action" />',
	methods: { action: action('item-action') }
});

export const Playground =  UseCase.bind({});
Playground.args ={
	items : [
		{
			key: 'Civility',
			value: 'Mr',
			chip: true,
			options: {
				chip: {
					color: 'success'
				}
			}
		},
		{
			key: 'Name',
			value: 'Dupont'
		},
		{
			key: 'First name',
			value: 'Paul'
		},
		{
			key: 'Birthdate',
			value: '09/24/1970',
			icon: 'mdiCalendar'
		},
		{
			key: 'Nationality',
			value: 'French'
		},
		{
			key: 'Native country',
			value: 'France',
			action: 'Edit'
		},
		{
			key: 'Date of registration',
			value: ''
		}
	],
	icons: icons
};
