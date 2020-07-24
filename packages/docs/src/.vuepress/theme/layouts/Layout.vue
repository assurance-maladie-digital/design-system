<template>
	<div class="theme-container">
		<VApp>
			<DocHeader @drawer-action="drawer = !drawer" />

			<VNavigationDrawer
				v-model="drawer"
				clipped
				app
			>
				<DocSidebar :items="sidebarItems" />

				<template #append>
					<VDivider />

					<div class="px-4 py-2 d-flex">
						<VBtn
							text
							rounded
							class="text--primary text-none"
						>
							<VIcon left>
								{{ tagIcon }}
							</VIcon>

							{{ version }}
						</VBtn>
					</div>
				</template>
			</VNavigationDrawer>

			<VMain>
				<PageCard width="1200px">
					<Content
						class="mb-4"
						slot-key="title"
					/>

					<Content
						class="title mb-8"
						slot-key="description"
					/>

					<VDivider class="mb-5" />

					<Content />
				</PageCard>
			</VMain>
		</VApp>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiTagOutline } from '@mdi/js';

	import { version } from '../../../../package.json';

	@Component
	export default class Layout extends Vue {
		version = version;
		tagIcon = mdiTagOutline;

		drawer = null;

		get sidebarItems() {
			return (this as any).$site.themeConfig.sidebar;
		}
	}
</script>
