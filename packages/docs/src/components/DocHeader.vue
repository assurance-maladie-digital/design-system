<template>
	<HeaderBar
		:service-title="serviceTitle"
		:mobile-version="mobileVersion"
		app
		fixed
		clipped-left
	>
		<template #default>
			<DocSearch class="mr-2 mr-md-6" />

			<DocReleasesMenu />

			<VBtn
				v-if="!$vuetify.breakpoint.xs"
				icon
				aria-label="GitHub"
				href="https://github.com/assurance-maladie-digital/design-system"
				target="_blank"
				rel="noopener noreferrer"
				class="text--primary mr-2 mr-lg-0"
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
	import DocSearch from './DocSearch.vue';

	import { mdiGithub } from '@mdi/js';

	@Component({
		components: {
			DocReleasesMenu,
			DocDrawer,
			DocSearch
		}
	})
	export default class DocHeader extends Vue {
		githubIcon = mdiGithub;

		get serviceTitle(): string | undefined {
			return this.$vuetify.breakpoint.xs ? undefined : 'Design System';
		}

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
	.vd-header-bar-container :deep(.vd-header-bar) {
		z-index: 6;
	}
</style>
