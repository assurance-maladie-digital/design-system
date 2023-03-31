<template>
	<div>
		<h6>{{ label }}</h6>

		<VRating
			v-if="!readonlyInternal"
			:length="lengthInternal"
			:readonly="readonlyInternal"
			hover
			color="primary"
			background-color="primary lighten-4"
			class="d-flex flex-wrap"
		>
			<template #item="{ index }">
				<VBtn
					x-small
					outlined
					color="primary"
					min-height="36px"
					class="mx-1 my-2 pa-0"
					@click="onDispatchValue(index)"
				>
					{{ index }}
				</VBtn>
			</template>
		</VRating>

		<div v-else>
			<VBtn
				outlined
				x-small
				disabled
				color="primary"
				min-height="36px"
				class="mx-1 my-2 pa-0"
			>
				{{ valueInternal }}
			</VBtn>

			/ {{ lengthInternal }}
		</div>
	</div>
</template>

<script lang="ts">
	import Component from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	@Component
	export default class NumberPicker extends RatingMixin {}
</script>
