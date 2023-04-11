<template>
	<div>
		<h6>{{ label }}</h6>

		<div class="d-flex d-inline-flex flex-column align-sm-center my-0">
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
				{{ getItemLabel(itemValue) }}
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

		itemValue = -1;

		mounted() {
			this.$watch(
				'$refs.rating.hoverIndex',
				(newValue) => {
					this.itemValue = newValue - 1;
				}
			);
		}
	}
</script>
