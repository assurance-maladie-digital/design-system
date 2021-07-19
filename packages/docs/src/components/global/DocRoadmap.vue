<template>
	<div
		no-gutters
		class="w-100"
	>
		<div
			v-for="(roadmapSection, roadmapSectionIndex) in roadmap"
			:key="roadmapSectionIndex"
			class="mt-8"
		>
			<h3 class="font-weight-regular grey--text text--darken-2">
				{{ roadmapSection.label }}
			</h3>

			<VDivider class="mb-8" />

			<DocRoadmapItem
				v-for="(item, roadmapItemIndex) in roadmapSection.items"
				:key="`${roadmapSectionIndex}-${roadmapItemIndex}`"
				class="mb-8"
				:title="item.title"
				:description="item.description"
				:label="item.label"
				:issue="item.issue"
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
