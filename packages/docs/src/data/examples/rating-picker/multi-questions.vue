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
				name: 'question-1',
				type: 'emotions',
				question: 'Avez vous aimé notre première question ?',
			},
			{
				name: 'question-2',
				type: 'multi',
				question: 'Avez vous aimé notre deuxème question ?',
				answers: ['Réponse 1', 'Réponse 2', 'Réponse 3', 'Réponse 4']
			},
			{
				name: 'question-3',
				type: 'multi',
				question: 'Avez vous aimé notre troisième question ?',
				answers: ['bonsoiazeazer', 'bonsoir', 'bonsoir1', 'bonsoir !', 'azeazeazeazea'],
				otherAnswer: true
			},
			{
				name: 'question-4',
				type: 'text-area',
				question: 'Avez vous aimé notre quatrième question ?',
			}
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
