import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const Props = Vue.extend({
	props: {
		// Property from Vuetify that needs .sync modifier
		error: {
			type: Boolean,
			default: false
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Add error prop from Vuetify and bind it with .sync modifier */
@Component
export class ErrorProp extends MixinsDeclaration {
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
