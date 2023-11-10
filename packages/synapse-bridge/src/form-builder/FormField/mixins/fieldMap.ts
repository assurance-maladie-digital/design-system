import { defineComponent } from "vue";

export interface IFieldMap {
	[key: string]: string;
}

// We import them all because the form can use any of them
import DateField from '../fields/DateField.vue';
import NumberField from '../fields/NumberField.vue';
import FormPasswordField from '../fields/FormPasswordField.vue';
import ChoicePeriodField from '../fields/ChoicePeriodField.vue';
import ChoiceField from '../fields/ChoiceField.vue';
import FormRangeField from '../fields/FormRangeField.vue';
import TextareaField from '../fields/TextareaField.vue';
import TextField from '../fields/TextField.vue';

export default defineComponent({
	components: {
		DateField,
		NumberField,
		FormPasswordField,
		ChoicePeriodField,
		ChoiceField,
		FormRangeField,
		TextareaField,
		TextField,
	},
	data() {
		return {
			fieldMap: {
				DateField: 'DateField',
				NumberField: 'NumberField',
				FormPasswordField: 'FormPasswordField',
				ChoicePeriodField: 'ChoicePeriodField',
				ChoiceField: 'ChoiceField',
				FormRangeField: 'FormRangeField',
				TextareaField: 'TextareaField',
				TextField: 'TextField',
			} as IFieldMap,
		};
	},
	methods: {
		getField(fieldName: string): string {
			return this.fieldMap[fieldName];
		},

		fieldExists(fieldName: string): boolean {
			return Object.keys(this.fieldMap).includes(fieldName);
		}
	}
});
