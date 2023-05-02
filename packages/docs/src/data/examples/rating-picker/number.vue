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
			class="mb-4"
		/>

		<div class="d-flex">
			<VSpacer />

			<VBtn
				right
				color="primary"
			>
				Terminé
			</VBtn>
		</div>
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
