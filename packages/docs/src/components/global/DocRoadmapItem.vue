<template>
	<VExpansionPanel>
		<VExpansionPanelHeader>
			<span class="d-flex flex-column align-start">
				<span class="text-subtitle-1 font-weight-bold mb-1">
					Version {{ version }} – {{ date }}
				</span>

				{{ description }}
			</span>
		</VExpansionPanelHeader>

		<VExpansionPanelContent>
			<DocRoadmapItemContent
				v-for="(item, index) in items"
				:key="index"
				:title="item.title"
				:description="item.description"
				:label="item.label"
				:issue="item.issue"
				class="mt-5"
			/>
		</VExpansionPanelContent>
	</VExpansionPanel>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { RoadmapSection } from '../../types/roadmap';

	const Props = Vue.extend({
		props: {
			version: {
				type: String,
				required: true
			},
			date: {
				type: String,
				required: true
			},
			description: {
				type: String,
				required: true
			},
			items: {
				type: Array as PropType<RoadmapSection[]>,
				required: true
			}
		}
	});

	@Component
	export default class DocRoadmapItem extends Props {}
</script>
