<template>
	<div>
		<RatingPicker
			:main-question="firstQuestion"
			@first-validation="firstValidation"
			@on-close="onClose"
			shadow-mode
			:after-validate="afterValidate"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default class RatingPickerShadowMode extends Vue {
		firstQuestion = {
			name: 'first-step',
			type: 'stars',
			labels: ['Mauvais', 'Génial !'],
			question: 'Pourriez vous donner une note ? '
		};

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

		firstValidation(): void {
			console.log('Validation');
		}

		onClose(): void {
			console.log('Fermeture');
		}
	}
</script>
