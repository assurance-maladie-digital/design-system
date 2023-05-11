<template>
	<div class="doc-component-overview">
		<section
		>
			<DocComponentList
				v-for="(item, index) in templateList"
				:key="index"
				:components="item.components"
				class="mb-16"
			/>
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiViewDashboard } from '@mdi/js';

	import DocComponentList from '../DocComponentList.vue';
	import { templateList } from '../../data/templateList';

	@Component({
		components: {
			DocComponentList
		}
	})
	export default class DocTemplateOverview extends Vue {
		templateList = templateList;

		dashboardIcon = mdiViewDashboard;
	}
</script>
