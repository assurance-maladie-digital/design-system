<template>
	<DocSection title="LangBtn">
		<LangBtn v-model="lang" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LangBtnEx extends Vue {
		lang = 'fr';
	}
</script>

<style lang="scss" scoped>
	.lang-btn /deep/ .v-btn {
		margin: 0 !important;
	}
</style>
