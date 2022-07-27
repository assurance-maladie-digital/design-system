<template>
	<VExpansionPanels 
		accordion
		class="mt-8 mb-8">
		<VExpansionPanel
			v-for="(item, index) in items"
			:key="index">
			<VExpansionPanelHeader class="text-subtitle-2 font-weight-bold">
				{{ item.title }}
			</VExpansionPanelHeader>

			<VExpansionPanelContent>
				<div v-html="item.description"></div>
			</VExpansionPanelContent>
		</VExpansionPanel>
	</VExpansionPanels>	
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { ecoConception } from '../../data/ecoConception';


@Component
export default class DocA11yCriteria extends Vue {
	items = ecoConception;	

}
</script>

