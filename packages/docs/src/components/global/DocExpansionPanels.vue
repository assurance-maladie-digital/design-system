<template>
	<VExpansionPanels
		accordion
		class="mb-4"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VExpansionPanels>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocExpansionPanels extends Vue {}
</script>

<style lang="scss" scoped>
	.v-expansion-panels :deep(p:last-child) {
		margin-bottom: 0;
	}
</style>
