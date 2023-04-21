<template>
	<div>
		<div
			v-if="label !== null"
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
						outlined
						large
						:color="genColor(index)"
						min-height="36px"
						class="mx-1 my-2 pa-0"
						@mouseover="onIconOver(index)"
						@focus="onIconOver(index)"
						@click="click"
					>
						{{ isFilled ? mdiStar: mdiStarOutline }}
					</VIcon>
				</template>
			</VRating>

			<p class="text-caption mb-0">
				{{ getItemLabel(overItemIndex) }}
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

		mdiStarOutline = mdiStarOutline;
		mdiStar = mdiStar;
		overItemIndex = -1;

		onIconOver(index: number): void {
			this.overItemIndex = index;
		}

		genColor(index: number): string {
			if ( this.valueInternal === -1) {
				return index <= this.overItemIndex ? '#9EB3D7' : 'primary';
			}

			return 'primary';
		}
	}
</script>
