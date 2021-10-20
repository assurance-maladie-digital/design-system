<template>
	<HeaderBar>
		<template #secondary-logo>
			<img
				:src="require('~/data/images/logo-msa.svg')"
				alt="MSA : Santé, Famille, Retraite, Services"
				width="115px"
				height="52px"
				class="ml-8 my-auto"
			>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarSecondaryLogoSlot extends Vue {}
</script>
