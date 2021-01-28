<template>
	<CustomIcon
		icon="github"
		size="38px"
		:color="color"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component
	export default class CustomIconSizeColor extends Vue {
		color = tokens.colors.success;
	}
</script>