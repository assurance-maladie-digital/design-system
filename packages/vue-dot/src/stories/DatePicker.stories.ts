import { action } from '@storybook/addon-actions';
import DatePicker from '../patterns/DatePicker'; 

export default {
	component: DatePicker,
	title: 'Patterns/DatePicker',
	excludeStories: /.*Data$/
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DatePicker },
	props: Object.keys(argTypes),
	template : `
       <DatePicker outlined />
	`
});
UseCase.args = {
    date: new Date().toDateString()
}