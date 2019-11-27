<template>
	<component
		:is="getField(field.type)"
		v-model="field"
		class="vd-form-field"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Field } from './types';

	import FieldMap from './mixins/fieldMap';

	const Props = Vue.extend({
		props: {
			value: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FormField extends mixins(Props, FieldMap) {
		get field() {
			return this.value;
		}

		set field(value: Field) {
			this.$emit('change', value);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-form-field {
		padding: 16px;
	}
</style>
