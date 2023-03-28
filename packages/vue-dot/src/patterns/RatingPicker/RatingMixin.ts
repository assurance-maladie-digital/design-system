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
		},
		value: {
			type: Number,
			default: 0
		}
	}
});
const MixinsDeclaration = mixins(Props);
// tout les ratings utilise ce mixin pour gerer length,read_only, event
@Component
export class RatingMixin extends MixinsDeclaration {

	val_internal= this.value;
	length_internal = this.length;
	read_only_internal = false;
	blockon(val: number): void {
		this.val_internal = val;
		this.read_only_internal = true;
	}
	onDispatchValue(event: number): void {
		this.$emit('input',event,this);
	}
}
