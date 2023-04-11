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
				<div class="d-flex flex-column">
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

					<span
						v-if="displayLabels(index)"
						class="caption align-self-sm-center"
						v-text="getItemLabel(index)"
					/>
				</div>
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
	export default class NumberPicker extends RatingMixin {
		displayLabels(index: number): boolean {
			return index === 0 || index === this.length - 1;
		}

		getItemLabel(value: number): string {
			if (this.itemLabels === null || value === -1) {
				return '';
			}

			return value === 0 ? this.itemLabels[0] : this.itemLabels[1];
		}
	}
</script>
