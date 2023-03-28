<template>
	<div>
		<h6>{{ label }}</h6>
		<VRating
			v-if="!readonlyInternal"
			:length="lengthInternal"
			color="primary"
			background-color="primary lighten-4"
			hover
			:readonly="readonlyInternal"
			class="d-flex flex-wrap"
		>
			<template #item="{index}">
				<VBtn
					class="mx-1 my-2 pa-0"
					color="primary"
					min-height="36px"
					outlined
					x-small
					@click="onDispatchValue(index)"
				>
					{{ index }}
				</VBtn>
			</template>
		</VRating>
		<div v-else>
			<VBtn
				class="mx-1 my-2 pa-0"
				color="primary"
				outlined
				x-small
				disabled
				min-height="36px"
			>
				{{ valueInternal }}
			</VBtn>
			/ {{ lengthInternal }}
		</div>
	</div>
</template>

<script lang="ts">
	import { RatingMixin } from '../RatingMixin';
	import Component from 'vue-class-component';

	@Component
	export default class NumberPicker extends RatingMixin {
	}
</script>
