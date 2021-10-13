<template>
	<div class="doc-roadmap mt-4 w-100">
		<VExpansionPanels
			v-for="(section, sectionIndex) in sections"
			:key="sectionIndex"
			accordion
			class="mb-12"
		>
			<h2 class="text-subtitle-1 font-weight-regular grey--text text--darken-2 mb-6 w-100">
				{{ section.label }}
			</h2>

			<DocRoadmapItem
				v-for="(item, index) in section.items"
				:key="index"
				v-bind="item"
			/>
		</VExpansionPanels>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { roadmap } from '../../data/roadmap';

	@Component
	export default class DocRoadmap extends Vue {
		get sections() {
			const { current, next } = roadmap;

			return [
				{
					label: 'En cours',
					items: current
				},
				{
					label: 'À venir',
					items: next
				}
			];
		}
	}
</script>

<style lang="scss" scoped>
	h2 {
		border-bottom: 1px solid #eee;
	}
</style>
