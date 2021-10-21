<template>
	<div>
		<HeaderBar theme="default" />

		<HeaderBar theme="cnam" />

		<HeaderBar theme="ameli" />

		<HeaderBar theme="ameli-pro" />

		<HeaderBar theme="risque-pro" />
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
