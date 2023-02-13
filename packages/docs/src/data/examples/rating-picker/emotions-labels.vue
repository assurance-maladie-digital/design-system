<template>
	<RatingPicker
		:main-question="firstQuestion"
		:after-validate="afterValidate"
		@on-validate="onValidate"
		@on-close="onClose"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from "vue-class-component";

	@Component({
		inheritAttrs: false
	})
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
