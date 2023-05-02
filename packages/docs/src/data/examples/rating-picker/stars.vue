<template>
	<RatingPicker
		v-model="rating"
		label="Quelle note donnez-vous à ce service ?"
		type="stars"
	>
		<VTextarea
			label="Que pouvons-nous améliorer ?"
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
	export default class RatingPickerStars extends Vue {
		rating = -1;
	}
</script>
