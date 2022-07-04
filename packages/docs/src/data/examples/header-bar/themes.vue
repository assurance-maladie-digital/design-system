<template>
	<div>
		<HeaderBar theme="default" />

		<HeaderBar theme="risque-pro" />

		<HeaderBar theme="compte-entreprise" />

		<HeaderBar theme="cnam" />

		<HeaderBar theme="ameli" />

		<HeaderBar theme="ameli-pro" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarThemes extends Vue {}
</script>

<style lang="scss" scoped>
	div + div {
		margin-top: 16px !important;
	}
</style>
