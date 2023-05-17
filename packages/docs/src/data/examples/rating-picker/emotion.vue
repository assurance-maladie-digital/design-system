<template>
	<RatingPicker
		v-model="rating"
		label="Êtes-vous satisfait de ce service ?"
		type="emotion"
	>
		<FormField
			v-model="field"
			class="mb-4"
		/>

		<div class="d-flex">
			<VSpacer />

			<VBtn
				right
				color="primary"
			>
				Terminé
			</VBtn>
		</div>
	</RatingPicker>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class RatingPickerEmotion extends Vue {
		rating = -1;

		field: Field = {
			type: 'select',
			title: 'Comment avez-vous connu ce service ?',
			items: [
				{
					text: 'Via une recherche internet',
					value: 'internet'
				},
				{
					text: 'Via un professionnel de santé',
					value: 'professional'
				},
				{
					text: 'Via un ami',
					value: 'friend'
				}
			],
			value: null,
			fieldOptions: {
				type: 'choiceButton',
				label: 'Le moyen par lequel vous avez connu ce service',
				hideDetails: true,
				outlined: true
			}
		};
	}
</script>
