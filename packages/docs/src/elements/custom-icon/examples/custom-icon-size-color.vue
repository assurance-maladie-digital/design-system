<template>
	<CustomIcon
		:color="color"
		:icon="icon"
		:size="size"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import tokens from '@cnamts/vue-dot/src/tokens';

	@Component
	export default class CustomIconExSizeColor extends Vue {
		color = tokens.colors.success;

		icon = 'github';

		size = '50px';
	}
</script>