<template>
	<div>
		<SelectBtnField
			v-model="value"
			:items="items"
			:error.sync="error"
			:error-messages.sync="errorMessages"
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
	export default class SelectBtnFieldErrorMessages extends Vue {
		value: string | null = null;

		error = true;

		errorMessages: string[] = [
			'Le champ est requis.'
		];

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
			this.errorMessages = [
				'Le champ est requis.'
			];
		}
	}
</script>
