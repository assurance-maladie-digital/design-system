<template>
	<div
		class="pa-5 contextual-menu"
	>
		<div class="tabs mt-5">
			<div
				v-for="tab in tabs"
				:key="tab.label"
				class="tab pointer d-flex align-center"
				role="tab"
				tabindex="0"
				@click="changeTab(tab)"
			>
				<div
					:class="tab === activeTab ? 'active-tab' : ''"
				/>
				<span
					class="ml-4 text-body-1"
					:class="tab === activeTab ? 'active-text primary--text mr-2' : ''"
				>{{ tab.label }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { TabItem } from './types';

	const Props = Vue.extend({
		props: {
			tabs: {
				type: Array as PropType<TabItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class ContextualMenu extends MixinsDeclaration {

		activeTab = this.tabs.length ? this.tabs[0] : { route: '' };

		mounted() {
			this.$emit('current-tab', this.activeTab.route);
		}

		changeTab(tab: TabItem): void {
			this.activeTab = tab;
			this.$emit('current-tab', this.activeTab.route);
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.contextual-menu {
	background-color: $vd-am-blue-lighten-97;
	border: 1px solid $vd-am-blue-lighten-90;
	border-radius: 4px;
	max-width: 307px;
}

.tab {
	height: 39px;
	border-left: 2px solid grey;
}

.active-text {
	margin-left: 14px !important;
}

.active-tab {
		width: 4px;
		border-radius: 0 2px 2px 0;
		background-color: $vd-primary;
		height: 39px;
		margin-left: -2px
}
</style>
