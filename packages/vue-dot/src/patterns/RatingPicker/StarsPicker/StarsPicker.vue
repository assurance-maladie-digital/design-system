<template>
	<div>
		<h6>{{ label }}</h6>
		<v-rating
			:length="length_internal"
			color="primary"
			background-color="primary lighten-4"
			hover
			:readonly="read_only_internal"
			@input="onValidate"
		/>
	</div>
</template>

<script lang="ts">
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

	@Component
	export default class StarsPicker extends MixinsDeclaration {

		length_internal = this.length;
		read_only_internal = false;
		set_length(val: number): void {
			this.length_internal = val;
		}
		set_read_only(val: boolean): void {
			this.read_only_internal = val;
		}
		onValidate(event: Event): void {
			this.$emit('input',this,event);
		}
	}
</script>

<style lang="scss" scoped>

h6 {
	font-size: 16px
}

</style>
