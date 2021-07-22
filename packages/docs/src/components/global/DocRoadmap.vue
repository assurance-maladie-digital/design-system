<template>
	<div
		no-gutters
		class="doc-roadmap w-100"
	>
		<div
			v-for="(roadmapSection, roadmapSectionIndex) in roadmap"
			:key="roadmapSectionIndex"
			class="doc-roadmap-section"
		>
			<h3 class="font-weight-regular grey--text text--darken-2">
				{{ roadmapSection.label }}
			</h3>

			<VDivider class="mb-8" />

			<DocRoadmapItem
				v-for="(item, roadmapItemIndex) in roadmapSection.items"
				:key="`${roadmapSectionIndex}-${roadmapItemIndex}`"
				:title="item.title"
				:description="item.description"
				:label="item.label"
				:issue="item.issue"
				class="mb-8"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { roadmap } from '../../data/roadmap/roadmap';

	import DocRoadmapItem from './DocRoadmapItem.vue';

	@Component({
		components: {
			DocRoadmapItem
		}
	})
	export default class DocRoadmap extends Vue {
		roadmap = roadmap;
	}
</script>

<style lang="scss" scoped>
	.doc-roadmap-section {
		margin-top: 80px;
	}
</style>
