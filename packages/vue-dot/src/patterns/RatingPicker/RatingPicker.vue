<template>
	<div class="vd-rating-picker">
		<!--first step-->
		<div class="first-step">
			<EmotionPicker
				class="ma-6"
				step-name="firstStep"
				:question-datas="questionDatas"
				@update-emotion="updateFirstStep"
			/>
			<div class="d-flex justify-end">
				<VBtn
					class="mr-2 mt-5 close-button"
					color="primary"
					text
				>
					Plus tard
				</VBtn>
			</div>
		</div>

		<!--first step-->
		<div class="first-step mt-2">
			<EmotionPicker
				class="ma-6"
				:question-datas="questionDatas"
				@update-emotion="updateFirstStep"
			/>
			<div class="d-flex justify-space-between">
				<VBtn
					class="mr-2 mt-5 close-button"
					color="primary"
					text
				>
					Fermer
				</VBtn>
				<VBtn
					class="mr-2 mt-5 close-button"
					color="primary"
					depressed
				>
					Valider
				</VBtn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import EmotionPicker from './EmotionPicker';

	@Component({
		components: {
			EmotionPicker
		}
	})
	export default class RatingPicker extends Vue {
		firstStep: string | number | null = null;

		questionDatas={
			name: 'first-step',
			question: 'la premiere question ?'
		};

		updateFirstStep(result: object): void {
			console.log(result);
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.first-step {
	box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.123);
	max-width: 450px !important;
	padding: 16px;
	border-radius: 8px;

	.close-button {
		text-transform: none;
	}
}

</style>
