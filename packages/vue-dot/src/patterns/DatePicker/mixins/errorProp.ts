import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const Props = Vue.extend({
	props: {
		error: {
			type: Boolean,
			default: false
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class ErrorProp extends MixinsDeclaration {
	get internalErrorProp(): boolean {
		return this.error;
	}

	set internalErrorProp(value: boolean) {
		this.$emit('update:error', value);
	}
}
