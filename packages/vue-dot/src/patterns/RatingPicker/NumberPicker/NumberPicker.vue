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
						v-if="displayLabel(index)"
						class="caption align-self-sm-center "
					>{{ getItemLabel(index) }}</span>
					<div />
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

		displayLabel(value: number): boolean {
			return !value || value === this.length - 1;
		}

		getItemLabel(value: number): string {
			if (this.itemLabels === null || value === -1) {
				return '';
			}


			return value === 0 ? this.itemLabels[0] : this.itemLabels[1];
		}
	}
</script>
