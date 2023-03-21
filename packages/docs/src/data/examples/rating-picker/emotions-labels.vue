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
  
	export default class RatingPickerLabels extends Vue {
		firstQuestion = {
			name: 'first-step',
			type: 'emotions',
			labels: {
				sad: 'Un peu',
				neutral: 'Moyen',
				happy: 'Beaucoup'
			},
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
