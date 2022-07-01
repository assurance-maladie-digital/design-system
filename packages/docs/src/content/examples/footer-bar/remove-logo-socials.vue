<template>
	<FooterBar 
		complex-mode
		:centerSlotsNumber="0"
		hide-socials
		>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarSlots extends Vue {}
</script>
