<template>
	<CustomIcon
		:color="color"
		icon="digital"
		size="56px"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component
	export default class CustomIconSizeColor extends Vue {
		color = tokens.colors.secondary;
	}
</script>
