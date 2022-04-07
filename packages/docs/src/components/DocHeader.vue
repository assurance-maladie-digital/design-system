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
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocDrawer from '../components/drawer/DocDrawer.vue';

	@Component({
		components: {
			DocDrawer
		}
	})
	export default class DocHeader extends Vue {}
</script>

<style lang="scss" scoped>
	.vd-header-bar-container {
		z-index: 6;
	}
</style>
