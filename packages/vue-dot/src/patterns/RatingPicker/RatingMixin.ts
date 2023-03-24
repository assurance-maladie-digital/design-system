import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const Props = Vue.extend({
	props: {
		label: {
			type: String,
			required: true
		},
		length: {
			type: Number,
			default: 5
		},
		readonly: {
			type: Boolean,
			default: false
		}
	}
});
const MixinsDeclaration = mixins(Props);
// You can declare mixins as the same style as components.
@Component
export class RatingMixin extends MixinsDeclaration {

	length_internal = this.length;
	read_only_internal = false;
	val_internal = 0;
	blockon(val: number): void {
		this.read_only_internal = true;
		this.val_internal = val;
	}
	onValidate(event: Event): void {
		this.$emit('input',this,event);
	}
}
