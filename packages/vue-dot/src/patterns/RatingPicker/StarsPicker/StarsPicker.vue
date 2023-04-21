<template>
	<div class="vd-stars-picker">
		<div
			v-if="label"
			class="text-h6"
		>
			{{ label }}
		</div>

		<div class="d-flex d-inline-flex flex-column align-sm-center my-0">
			<VRating
				:length="lengthInternal"
				:readonly="readonlyInternal"
				background-color="primary lighten-4"
				@input="onDispatchValue"
			>
				<template #item="{ index, click, isFilled }">
					<VIcon
						:color="genColor(index)"
						outlined
						large
						min-height="36px"
						class="mx-1 my-2 pa-0"
						@mouseover="onIconHover(index)"
						@focus="onIconHover(index)"
						@click="click"
					>
						{{ isFilled ? starIcon: starIconOutline }}
					</VIcon>
				</template>
			</VRating>

			<p class="text-caption mb-0">
				{{ getItemLabel(hoverItemIndex) }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import Component from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';
	import { mdiStarOutline, mdiStar } from '@mdi/js';

	@Component
	export default class StarsPicker extends RatingMixin {
		starIconOutline = mdiStarOutline;
		starIcon = mdiStar;

		hoverItemIndex = -1;

		onIconHover(index: number): void {
			this.hoverItemIndex = index;
		}

		genColor(index: number): string { // TODO: Use Design Tokens
			if (this.valueInternal === -1) {
				return index <= this.hoverItemIndex ? '#9eb3d7' : 'primary';
			}

			return 'primary';
		}
	}
</script>
