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

	export default class CookieBannerOptions extends Vue {
		firstQuestion = {
			name: 'first-step',
			type: 'emotions',
			labels: ['Mauvais', 'Génial !'],
			question: 'Pourriez vous donner une note ? '
		};

		questionsList = [
			{
				name: 'question-secondaire',
				type: 'multi',
				question: 'Avez vous aimé notre première question ?',
				answers: ['Réponse 1', 'Réponse 2', 'Réponse 3', 'Réponse 4'],
				otherAnswer: true
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
