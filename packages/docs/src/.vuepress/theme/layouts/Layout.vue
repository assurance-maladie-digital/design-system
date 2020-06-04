<template>
	<div class="theme-container">
		<VApp>
			<VNavigationDrawer
				app
				fixed
				clipped
			>
				<DocSidebar :items="sidebarItems" />
			</VNavigationDrawer>

			<VContent>
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
			</VContent>
		</VApp>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Layout extends Vue {
		get sidebarItems() {
			return (this as any).$site.themeConfig.sidebar;
		}
	}
</script>
