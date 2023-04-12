<template>
	<div>
		<h6>{{ label }}</h6>

		<VRating
			:length="lengthInternal"
			:readonly="readonlyInternal"
			hover
			color="primary"
			background-color="primary lighten-4"
			class="d-flex flex-wrap"
			@input="onDispatchValue"
		/>
	</div>
</template>

<script lang="ts">
	import Component from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	@Component
	export default class StarsPicker extends RatingMixin {}
</script>
