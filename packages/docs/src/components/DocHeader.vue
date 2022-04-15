<template>
	<HeaderBar
		:mobile-version="$vuetify.breakpoint.mdAndDown"
		app
		fixed
		clipped-left
		service-title="Design System"
	>
		<template #navigation-drawer="{ drawer, updateDrawer }">
			<DocDrawer
				:value="drawer"
				@input="updateDrawer"
			/>
		</template>

		<DocSearch />
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocDrawer from '../components/drawer/DocDrawer.vue';
	import DocSearch from './search/DocSearch.vue';

	@Component({
		components: {
			DocDrawer,
			DocSearch
		}
	})
	export default class DocHeader extends Vue {}
</script>
