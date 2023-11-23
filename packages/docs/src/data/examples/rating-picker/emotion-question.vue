<template>
	<RatingPicker
		v-model="rating"
		:item-labels="[
			'Plutôt inutile',
			'Très utile'
		]"
		label="Quelle note donnez-vous à ce service ?"
		type="number"
	>
		<VTextarea
			label="Que pouvons-nous améliorer ?"
			hide-details
			outlined
			class="my-4"
		/>

		<VSelect
			:items="selectItems"
			label="Comment avez-vous connu ce service ?"
			hide-details
			outlined
			class="mb-6"
		/>

		<EmotionPicker
			v-model="finalRating"
			:item-labels="[
				'À améliorer',
				'Neutre',
				'Géniale'
			]"
			label="Que pensez-vous de notre enquête de satisfaction ?"
			class="mb-4"
		/>

		<template
			v-if="rating > 5 || rating > -1 && rating < 5 && finalRating > -1"
			#success
		>
			<AlertWrapper
				outlined
				type="success"
				class="mt-4"
			>
				Merci pour vos réponses
			</AlertWrapper>
		</template>

		<template
			v-if="rating > 5 || rating > -1 && rating < 5 && finalRating > -1"
			#validation
		>
			<VBtn
				right
				color="primary"
			>
				Terminé
			</VBtn>
		</template>
	</RatingPicker>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import EmotionPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/EmotionPicker';

	@Component({
		components: {
			EmotionPicker
		}
	})
	export default class RatingPickerEmotionQuestion extends Vue {
		rating = -1;
		finalRating = -1;

		selectItems = [
			'Via une recherche internet',
			'Via un professionnel de santé',
			'Via un ami'
		];
	}
</script>
