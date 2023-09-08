<template>
	<SelectBtnField
		v-model="value"
		:items="items"
		multiple
		label="Moyen de contact"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { SelectBtnItem } from '@cnamts/vue-dot/src/patterns/SelectBtnField/types';

	@Component
	export default class SelectBtnFieldMultiple extends Vue {
		value: string | null = null;

		items: SelectBtnItem[] = [
			{
				text: 'Email',
				value: 'email'
			},
			{
				text: 'Courrier',
				value: 'courrier'
			},
			{
				text: 'SMS',
				value: 'sms'
			}
		];
	}
</script>
