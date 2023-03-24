<template>
	<div>
		<h6>{{ label }}</h6>
		<v-rating
			:length="length_internal"
			color="primary"
			background-color="primary lighten-4"
			hover
			:readonly="read_only_internal"
			class="d-flex flex-wrap"
			@input="onValidate"
		/>
	</div>
</template>

<script lang="ts">
	import { RatingMixin } from '../RatingMixin';
	import Component from 'vue-class-component';
	@Component
	export default class StarsPicker extends RatingMixin {
		blockon(val: number): void {
			this.read_only_internal = true;
			this.length_internal = val;
		}
	}
</script>

<style lang="scss" scoped>

h6 {
	font-size: 16px
}

</style>
