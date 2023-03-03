<template>
	<RatingPicker
		:main-question="firstQuestion"
		@first-validation="firstValidation"
		@on-close="onClose"
		:after-validate="afterValidate"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default class RatingPickerNumbers extends Vue {
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
