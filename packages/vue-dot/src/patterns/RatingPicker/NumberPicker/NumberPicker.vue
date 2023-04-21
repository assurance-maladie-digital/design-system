<template>
	<div class="vd-number-picker">
		<div
			v-if="label"
			class="text-h6"
		>
			{{ label }}
		</div>

		<div
			v-if="!readonlyInternal"
			class="d-inline-block my-2"
		>
			<VRating
				:length="lengthInternal"
				:readonly="readonlyInternal"
				hover
				color="primary"
				background-color="primary lighten-4"
				class="d-flex flex-wrap"
				@input="onDispatchValue"
			>
				<template #item="{ index, click }">
					<VBtn
						x-small
						outlined
						color="primary"
						min-height="36px"
						class="mx-1 pa-0"
						@click="click"
					>
						{{ index + 1 }}
					</VBtn>
				</template>
			</VRating>

			<div class="d-flex justify-space-between mx-1">
				<span
					class="text-caption"
					v-text="getItemLabel(0)"
				/>

				<span
					class="text-caption"
					v-text="getItemLabel(lengthInternal)"
				/>
			</div>
		</div>

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
