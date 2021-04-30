import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const BIRTHDATE_DEFAULT_VALUE = '1990-01';

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
export class PickerDate extends MixinsDeclaration {
	// Birthdate.birthdate
	birthdate!: boolean;

	bufferValue: string | null = null;

	/**
	 * Use an internal model
	 * so we don't modify the prop
	 */
	get internalPickerDate(): string {
		const hasUserValue = this.bufferValue || this.pickerDate;

		if (this.birthdate && !hasUserValue) {
			return BIRTHDATE_DEFAULT_VALUE;
		}

		return this.pickerDate;
	}

	set internalPickerDate(value: string) {
		// Store the value in a buffer to update the
		// value internally if sync prop is not used
		this.bufferValue = value;

		// Emit event with the recommended pattern
		// to make it work with .sync modifier
		// eg: `:picker-date.sync="pickerDate"`
		this.$emit('update:picker-date', value);
	}
}
