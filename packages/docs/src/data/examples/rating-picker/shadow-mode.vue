<template>
	<div>
		<RatingPicker
			shadow-mode
			:main-question="firstQuestion"
			:after-validate="afterValidate"
			@on-validate="onValidate"
			@on-close="onClose"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from "vue-class-component";

	@Component({
		inheritAttrs: false
	})
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
