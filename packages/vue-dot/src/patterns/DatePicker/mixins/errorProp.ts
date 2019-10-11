import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
	props: {
		// Property from Vuetify DatePicker that needs .sync modifier
		error: {
			type: Boolean,
			default: false
		}
	}
});

/** Add error prop from Vuetify and bind it with .sync modifier */
@Component
export default class ErrorProp extends Props {
	/**
	 * Use an internal model
	 * so we don't modify the prop
	 */
	get internalErrorProp() {
		return this.error;
	}

	set internalErrorProp(value: boolean) {
		// Emit event with the recommended pattern
		// to make it work with .sync modifier
		// eg: `:error.sync="error"`
		this.$emit('update:error', value);
	}
}
