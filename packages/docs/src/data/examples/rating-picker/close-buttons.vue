<template>
	<RatingPicker
		:main-question="firstQuestion"
		:questions-list="questionsList"
		:on-validate="onValidate"
		hide-close-buttons
		:after-validate="afterValidate"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from "vue-class-component";

	@Component({
		inheritAttrs: false
	})
	export default class RatingPickerCloseButtons extends Vue {
		firstQuestion = {
			name: 'first-step',
			type: 'emotions',
			labels: ['Mauvais', 'Génial !'],
			question: 'Pourriez vous donner une note ? '
		};

		questionsList = [
			{
				name: 'first-question',
				type: 'emotions',
				question: 'Avez vous aimé notre première question ?'
			}
		];

		afterValidate = [
			{
				message: 'Merci !',
				greenBackground: true
			},
			{
				message: 'Merci d\'avoir donné plus d\'information',
				greenBackground: true
			}
		];

		afterFirstQuestion(): void {
			console.log('Validation de la première question');
		}

		onValidate(): void {
			console.log('Validation');
		}
	}
</script>
