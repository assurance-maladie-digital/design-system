<template>
	<VAlert
		v-bind="$attrs"
		v-on="$listeners"
		border="left"
		class="doc-alert w-100"
		text
	>
		<slot />
	</VAlert>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from "vue-class-component";

	@Component({
		inheritAttrs: false
	})
	export default class DocAlert extends Vue {}
</script>

<style lang="scss" scoped>
	.doc-alert ::v-deep p:last-child {
		margin-bottom: 0 !important;
	}
</style>
