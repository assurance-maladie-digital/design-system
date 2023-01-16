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
			type: 'numbers',
			labels: ['Mauvais', 'Génial !'],
			question: 'Pourriez vous donner une note ? '
		};

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

		onClose(): void {
			console.log('Fermeture');
		}
	}
</script>
