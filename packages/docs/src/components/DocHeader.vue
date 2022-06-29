<template>
	<HeaderBar
		:mobile-version="mobileVersion"
		app
		fixed
		clipped-left
		service-title="Design System"
	>
		<template #default>
			<DocReleasesMenu />

			<VBtn
				icon
				aria-label="GitHub"
				href="https://github.com/assurance-maladie-digital/design-system"
				target="_blank"
				rel="noopener noreferrer"
				class="text--primary ml-2 mr-4 mr-lg-0"
			>
				<VIcon>
					{{ githubIcon }}
				</VIcon>
			</VBtn>
		</template>

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

	import DocReleasesMenu from './DocReleasesMenu.vue';
	import DocDrawer from '../components/drawer/DocDrawer.vue';

	import { mdiGithub } from '@mdi/js';

	@Component({
		components: {
			DocReleasesMenu,
			DocDrawer
		}
	})
	export default class DocHeader extends Vue {
		githubIcon = mdiGithub;

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.mdAndDown;
		}

		get drawerStyles(): IndexedObject {
			return {
				zIndex: this.mobileVersion ? '7' : '5'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar-container ::v-deep .vd-header-bar {
		z-index: 6;
	}
</style>
