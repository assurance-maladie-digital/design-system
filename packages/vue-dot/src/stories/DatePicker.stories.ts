
import { Args, ArgTypes } from '@storybook/api';
import DatePicker from '../patterns/DatePicker';
import { required } from '@cnamts/vue-dot/src/rules/required';
import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';
import { notAfterToday } from '@cnamts/vue-dot/src/rules/notAfterToday';

export default {
	component: DatePicker,
	title: 'Patterns/DatePicker',
	excludeStories: /.*Data$/,
	argTypes: {
		date : {  control: 'text' , defaultValue: '' , table: { category: 'props' } },
		outlined : { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		noCalendar: { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		noPrependIcon: { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		appendIcon : { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		textFieldActivator : { control: 'boolean' , defaultValue: false, table: { category: 'props' } },
		textFieldClass : { control: 'text' , defaultValue: undefined , table: { category: 'props' } },
		startDate : { control: 'text' , defaultValue: undefined , table: { category: 'props' } },
		showWeekends : { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		dateFormat : { control: 'text' , defaultValue: 'DD/MM/YYYY', table: { category: 'props' } },
		dateFormatReturn : { control: 'text' , defaultValue: 'YYYY-MM-DD' , table: { category: 'props' } },
		mask : { control: 'text' , defaultValue: undefined , table: { category: 'props' } },
		birthdate : { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		pickerDate : { control: 'text' , defaultValue: undefined , table: { category: 'props' } },
		error : { control: 'boolean' , defaultValue: false , table: { category: 'props' } },
		vuetifyOptions : { table :{ category: 'props' } }
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { DatePicker },
	props: Object.keys(argTypes),
	template : `
       <DatePicker v-model="date" v-bind="$props" />
	`
});
UseCase.args = {
};

export const datepickerRules: any = UseCase.bind({});
datepickerRules.argTypes = {
	warningRules : { control: { type:'function' }, defaultValue: [ notAfterToday ], table: { category: 'props' } },
	rules : { control: { type:'function' } , defaultValue: [ required, isDateValid ] , table: { category: 'props' } }
};

export const vuetifyOptions: any = UseCase.bind({});
vuetifyOptions.args = {
	vuetifyOptions :{
			textField: {
				label: 'Exemple',
				hideDetails: true,
				hint: null
			},
			menu: {
				nudgeBottom: 50,
				nudgeRight: 0,
				minWidth: '310px'
			},
			datePicker: {
				noTitle: false,
				width: '310px'
			}
	}
};
