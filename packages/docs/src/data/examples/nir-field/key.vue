<template>
	<NirField
		key-required
		class="vd-form-input"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class NirFieldKey extends Vue {}
</script>

<style lang="scss" scoped>
	.vd-form-input {
		width: 65% !important;
		@media only screen and (max-width: 600px) {
			width: 100% !important;
		}
	}
</style>
