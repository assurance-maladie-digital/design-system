<template>
	<VExpansionPanels
		accordion
		class="doc-eco-design"
	>
		<VExpansionPanel
			v-for="(item, index) in items"
			:key="index"
		>
			<VExpansionPanelHeader class="text-subtitle-2 font-weight-bold">
				{{ item.title }}
			</VExpansionPanelHeader>

			<VExpansionPanelContent>
				<DocMarkdown>{{ item.description }}</DocMarkdown>
			</VExpansionPanelContent>
		</VExpansionPanel>
	</VExpansionPanels>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';

	import { ecoDesignItems } from '../../data/ecoDesignItems';

	@Component({
		components: {
			DocMarkdown
		}
	})
	export default class DocEcoDesign extends Vue {
		items = ecoDesignItems;
	}
</script>

<style lang="scss" scoped>
	:deep(.v-markdown p + p) {
		margin-top: 16px;
	}
</style>
