<template>
	<component
		:is="getComponent(field.type)"
		:field="field"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field, ComponentMap } from './types';

	// Fields
	import PasswordField from './fields/PasswordField.vue';
	import NumberField from './fields/NumberField.vue';
	import SelectField from './fields/SelectField.vue';
	import TextField from './fields/TextField.vue';

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
		},
		components: {
			PasswordField,
			NumberField,
			SelectField,
			TextField
		}
	})
	export default class FormField extends Props {
		componentMap: ComponentMap = {
			number: 'NumberField',
			password: 'PasswordField',
			select: 'SelectField',
			string: 'TextField'
		};

		get field() {
			return this.value;
		}

		set field(value: Field) {
			this.$emit('change', value);
		}

		getComponent(fieldName: string) {
			return this.componentMap[fieldName];
		}
	}
</script>
