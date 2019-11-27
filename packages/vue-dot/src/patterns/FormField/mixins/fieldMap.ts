import Vue from 'vue';
import Component from 'vue-class-component';

interface IFieldMap {
	[key: string]: string;
}

// We import them all because the form
// can use any of them
import AutocompleteField from '../fields/AutocompleteField.vue';
import PasswordField from '../fields/PasswordField.vue';
import NumberField from '../fields/NumberField.vue';
import SelectField from '../fields/SelectField.vue';
import TextareaField from '../fields/TextareaField.vue';
import TextField from '../fields/TextField.vue';

/** List all fields and provide getField() function */
@Component({
	components: {
		AutocompleteField,
		PasswordField,
		NumberField,
		SelectField,
		TextareaField,
		TextField
	}
})
export default class FieldMap extends Vue {
	/** List all field components and their corresponding keys */
	fieldMap: IFieldMap = {
		autocomplete: 'AutocompleteField',
		number: 'NumberField',
		password: 'PasswordField',
		select: 'SelectField',
		textarea: 'TextareaField',
		string: 'TextField'
	};

	/**
	 * Returns the field that correspond to the name
	 * passed in argument
	 *
	 * @param {string} fieldName The name of the field
	 */
	getField(fieldName: string) {
		return this.fieldMap[fieldName];
	}
}
