<template>
	<PeriodField
		v-bind="field.fieldOptions"
		v-model="field"
		outlined
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class Period extends Vue {
		field: Field = {
			type: 'period',
			value: {
				from: null,
				to: null
			}
		};
	}
</script>
