import Vue from 'vue';
import Component from 'vue-class-component';

export interface IFieldMap {
	[key: string]: string;
}

// We import them all because the form
// can use any of them
import DateField from '../fields/DateField.vue';
import NumberField from '../fields/NumberField.vue';
import PasswordField from '../fields/PasswordField.vue';
import PeriodField from '../fields/PeriodField.vue';
import ChoiceField from '../fields/ChoiceField.vue';
import RangeField from '../fields/RangeField.vue';
import TextareaField from '../fields/TextareaField.vue';
import TextField from '../fields/TextField.vue';

/** List all fields and provide getField() function */
@Component({
	components: {
		DateField,
		NumberField,
		PasswordField,
		PeriodField,
		ChoiceField,
		RangeField,
		TextareaField,
		TextField
	}
})
export class FieldMap extends Vue {
	/** List all field components and their corresponding keys */
	fieldMap: IFieldMap = {
		date: 'DateField',
		number: 'NumberField',
		password: 'PasswordField',
		period: 'PeriodField',
		select: 'ChoiceField',
		range: 'RangeField',
		text: 'TextField',
		textarea: 'TextareaField'
	};

	/**
	 * Returns the field that correspond to the name
	 * passed in argument
	 *
	 * @param {string} fieldName The name of the field
	 * @returns {string} The field
	 */
	getField(fieldName: string): string {
		return this.fieldMap[fieldName];
	}

	/**
	 * Checks if the field exists
	 *
	 * @param {string} fieldName The name of the field
	 * @returns {boolean} If the field exists
	 */
	fieldExists(fieldName: string): boolean {
		return Object.keys(this.fieldMap).includes(fieldName);
	}
}
