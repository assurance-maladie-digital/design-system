<template>
	<div>
		<SelectBtnField
			v-model="value"
			:items="items"
			:error.sync="error"
			label="Moyen de contact"
		/>

		<VBtn
			color="primary"
			class="mt-3"
			@click="resetExample"
		>
			Réinitialiser
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { SelectBtnItem } from '@cnamts/vue-dot/src/patterns/SelectBtnField/types';

	@Component
	export default class SelectBtnFieldError extends Vue {
		value: string | null = null;

		error = true;

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

		resetExample(): void {
			this.value = null;
			this.error = true;
		}
	}
</script>
