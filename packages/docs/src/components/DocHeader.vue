<template>
	<HeaderBar
		:mobile-version="mobileVersion"
		app
		fixed
		clipped-left
		service-title="Design System"
	>
		<template #navigation-drawer="{ drawer, updateDrawer }">
			<DocDrawer
				:value="drawer"
				:style="drawerStyles"
				@input="updateDrawer"
			/>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	import DocDrawer from '../components/drawer/DocDrawer.vue';

	@Component({
		components: {
			DocDrawer
		}
	})
	export default class DocHeader extends Vue {
		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.mdAndDown;
		}

		get drawerStyles(): IndexedObject {
			return {
				zIndex: this.mobileVersion ? '4' : '2'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar-container ::v-deep .vd-header-bar {
		z-index: 3;
	}
</style>
