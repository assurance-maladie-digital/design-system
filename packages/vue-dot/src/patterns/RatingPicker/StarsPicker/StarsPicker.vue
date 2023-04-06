<template>
	<div class="mx-2">
		<h6>{{ label }}</h6>
		<div class="my-0 d-flex d-inline-flex flex-column align-sm-center">
			<VRating
				ref="rating"
				:length="lengthInternal"
				:readonly="readonlyInternal"
				hover
				color="primary"
				background-color="primary lighten-4"
				@input="onDispatchValue"
			/>
			<div class="caption">
				{{ getitemLabel(itemvalue) }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Component from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';
	import { VRating } from 'vuetify/lib/components';

	@Component
	export default class StarsPicker extends RatingMixin {
		$refs!: {
			rating: InstanceType<typeof VRating>;
		};

		itemvalue = -1;
		mounted() {
			this.$watch(
				'$refs.rating.hoverIndex',
				(new_value) => {
					this.itemvalue = new_value - 1;
				}
			);
		}
	}
</script>
