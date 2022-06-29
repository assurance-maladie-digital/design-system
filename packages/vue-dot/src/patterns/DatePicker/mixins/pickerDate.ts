import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const BIRTHDATE_DEFAULT_VALUE = '1990-01';

const Props = Vue.extend({
	props: {
		pickerDate: {
			type: String,
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class PickerDate extends MixinsDeclaration {
	// Birthdate mixin
	birthdate!: boolean;

	bufferValue: string | null = null;

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
		this.$emit('update:picker-date', value);
	}
}
