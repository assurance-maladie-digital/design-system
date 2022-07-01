<template>
	<FooterBar 
		complex-mode
		:centerSlotsNumber="0"
		logo-hide-signature
		logo-hide-organism
		logo-risque-pro
		>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarSlots extends Vue {}
</script>
