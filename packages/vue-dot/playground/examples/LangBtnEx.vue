<template>
	<DocSection title="LangBtn">
		<!-- <LangBtn /> -->
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LangBtnEx extends Vue {}
</script>

<style lang="scss" scoped>
	.lang-btn /deep/ .v-btn {
		margin: 0 !important;
	}
</style>
