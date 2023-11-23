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
	export default class RatingPickerStars extends Vue {
		rating = -1;
	}
</script>
