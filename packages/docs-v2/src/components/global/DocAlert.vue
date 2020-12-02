<template>
	<VAlert
		border="left"
		class="doc-alert"
		text
		v-bind="$attrs"
		v-on="$listeners"
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
