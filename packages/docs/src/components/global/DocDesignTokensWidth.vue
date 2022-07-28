<template>

</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component
	export default class DocDesignTokensWidth extends Vue {
		tokens = {
			...tokens,
			colors: undefined
		};
	}
</script>
