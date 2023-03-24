<template>
	<div>
		<h6>{{ label }}</h6>
		<v-rating
			v-if="!read_only_internal"
			:length="length_internal"
			color="primary"
			background-color="primary lighten-4"
			hover
			:readonly="read_only_internal"
		>
			<template #item="props">
				<v-btn
					class="mx-1 my-2 pa-0 rating-height-button"
					color="primary"
					outlined
					x-small
					@click="onValidate(props.index)"
				>
					{{ props.index }}
				</v-btn>
			</template>
		</v-rating>
		<div v-else>
			<v-btn
				class="mx-1 my-2 pa-0 rating-height-button"
				color="primary"
				outlined
				x-small
				disabled
			>
				{{ val_internal }}
			</v-btn>
			/ {{ length_internal }}
		</div>
	</div>
</template>

<script lang="ts">
	import { RatingMixin } from '../RatingMixin';
	import Component from 'vue-class-component';

	@Component
	export default class NumberPicker extends RatingMixin {

		length_internal = 10;
	}
</script>

<style lang="scss" scoped>

.rating-height-button {
	min-height: 36px;
}
h6 {
	font-size: 16px
}

</style>
