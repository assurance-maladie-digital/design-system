import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const Props = Vue.extend({
	props: {
		// Property from Vuetify DatePicker that needs .sync modifier
		pickerDate: {
			type: String,
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Add picker-date prop from Vuetify and bind it with .sync modifier */
@Component
export default class PickerDate extends MixinsDeclaration {
	/**
	 * Use an internal model
	 * so we don't modify the prop
	 */
	get internalPickerDate() {
		return this.pickerDate;
	}

	set internalPickerDate(value: string) {
		// Emit event with the recommended pattern
		// to make it work with .sync modifier
		// eg: `:picker-date.sync="pickerDate"`
		this.$emit('update:picker-date', value);
	}
}
