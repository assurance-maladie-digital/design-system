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
		<VSelect
			:items="selectItems"
			label="Comment avez-vous connu ce service ?"
			hide-details
			outlined
			class="my-4"
		/>
		<template
			v-if="rating > -1"
			#success
		>
			<AlertWrapper
				outlined
				type="success"
				class="mt-4"
			>
				Merci pour votre réponse
			</AlertWrapper>
		</template>

		<template
			v-if="rating > -1"
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

	@Component
	export default class RatingPickerNumber extends Vue {
		rating = -1;

		selectItems = [
			'Via une recherche internet',
			'Via un professionnel de santé',
			'Via un ami'
		];
	}
</script>
