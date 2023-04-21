<template>
	<div class="vd-stars-picker">
		<div class="text-h6 mb-6">
			{{ label }}
		</div>

		<VRating
			:value="value"
			:length="length"
			:readonly="readonly"
			:ripple="false"
			background-color="am-blue-lighten-60"
			size="36px"
			hover
			class="max-width-none mx-n3"
			@input="emitInputEvent"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	const Props = Vue.extend({
		props: {
			length: {
				type: Number,
				default: 5
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class StarsPicker extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.v-rating :deep(button) {
		height: auto !important;
		width: auto !important;
		padding: 0 8px;
	}
</style>
