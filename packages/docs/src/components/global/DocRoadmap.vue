<template>
	<div class="doc-roadmap w-100">
		<VExpansionPanels
			v-for="(section, sectionIndex) in sections"
			:key="sectionIndex"
			:class="{ 'mt-12': sectionIndex > 0 }"
			accordion
		>
			<h2 class="text-subtitle-1 font-weight-regular grey--text text--darken-3 mb-6 w-100">
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

			const sections = [
				{
					label: 'En cours',
					items: current
				},
				{
					label: 'À venir',
					items: next
				}
			];

			return sections.filter((section) => Boolean(section.items));
		}
	}
</script>

<style lang="scss" scoped>
	h2 {
		border-bottom: 1px solid rgba(0, 0, 0, .38);
	}
</style>
