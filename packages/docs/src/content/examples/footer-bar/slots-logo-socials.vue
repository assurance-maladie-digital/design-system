<template>
	<FooterBar 
		complex-mode
		:centerSlotsNumber="0"
		hide-socials
		>
		<template #logo>
			<p class="grey--text text--darken-1 my-3 mx-4">
				Slot logo
			</p>		
		</template>
		<template #socials>
			<p class="grey--text text--darken-1 my-3 mx-4">
				Slot réseaux sociaux
			</p>		
		</template>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarSlots extends Vue {}
</script>
