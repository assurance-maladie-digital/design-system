<template>
	<RatingPicker
		:main-question="firstQuestion"
		:questions-list="questionsList"
		:on-validate="onValidate"
		:on-close="onClose"
		:after-validate="afterValidate"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from "vue-class-component";

	@Component({
		inheritAttrs: false
	})
	export default class RatingPickerMultiAnswer extends Vue {
		firstQuestion = {
			name: 'first-step',
			type: 'emotions',
			question: 'Pourriez vous donner une note ? '
		};

		questionsList = [
			{
				name: 'question-secondaire',
				type: 'multi',
				question: 'Avez vous aimé notre première question ?',
				answers: ['Réponse 1', 'Réponse 2', 'Réponse 3', 'Réponse 4']
			},
		];

		afterValidate = [
			{
				message: 'Merci !',
				greenBackground: false
			},
			{
				message: 'Merci d\'avoir donné plus d\'information',
				greenBackground: false
			}
		];

		afterFirstQuestion(): void {
			console.log('Validation de la première question');
		}

		onValidate(): void {
			console.log('Validation');
		}

		onClose(): void {
			console.log('Fermeture');
		}
	}
</script>
