<template>
	<RatingPicker
		:main-question="firstQuestion"
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
	export default class RatingPickerEmotions extends Vue {
		firstQuestion = {
			name: 'first-step',
			type: 'emotions',
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
