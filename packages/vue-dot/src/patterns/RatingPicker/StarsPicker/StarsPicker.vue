<template>
	<div>
		<h6>{{ label }}</h6>
		<VRating
			:length="lengthInternal"
			color="primary"
			background-color="primary lighten-4"
			hover
			:readonly="readonlyInternal"
			class="d-flex flex-wrap"
			@input="onDispatchValue"
		/>
	</div>
</template>

<script lang="ts">
	import { RatingMixin } from '../RatingMixin';
	import Component from 'vue-class-component';
	@Component
	export default class StarsPicker extends RatingMixin {
	}
</script>
