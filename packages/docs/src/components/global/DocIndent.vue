<template>
	<div class="doc-indent">
		<slot />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocIndent extends Vue {}
</script>

<style lang="scss" scoped>
	.doc-indent ::v-deep > * {
		text-indent: 1em;
	}
</style>
