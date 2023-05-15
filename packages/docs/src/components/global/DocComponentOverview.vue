<template>
	<div class="doc-component-overview">
		<section
			v-for="(item, index) in componentList"
			:key="index"
			class="mb-16"
		>
			<h2 class="text-h4 mb-4">
				{{ item.title }}
			</h2>

			<DocComponentList :components="item.components" />
		</section>

		<VSheet
			outlined
			rounded
		>
			<VListItem
				href="/templates/vue-ensemble"
				class="px-4"
			>
				<VListItemAvatar
					tile
					class="d-none d-sm-inline-flex"
				>
					<VIcon
						color="primary"
						x-large
					>
						{{ dashboardIcon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<VListItemTitle class="mb-1">
						Templates
					</VListItemTitle>

					<VListItemSubtitle>
						En plus des composants, vous pouvez consulter la liste des templates.
					</VListItemSubtitle>
				</VListItemContent>
			</VListItem>
		</VSheet>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiBookOpenPageVariantOutline } from '@mdi/js';

	import DocComponentList from '../DocComponentList.vue';
	import { componentList } from '../../data/componentList';

	@Component({
		components: {
			DocComponentList
		}
	})
	export default class DocComponentOverview extends Vue {
		componentList = componentList;

		dashboardIcon = mdiBookOpenPageVariantOutline;
	}
</script>
