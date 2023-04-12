<template>
	<div
		class="pa-5 contextual-menu"
	>
		<a
			v-for="tab in tabs"
			:key="tab.label"
			class="tab d-flex align-center"
			role="tab"
			tabindex="0"
			:class="tab.label === activeTab ? 'active-tab' : ''"
			@click="changeTab(tab)"
			@keyup.tab="changeTab(tab)"
		>
			<span
				class="ml-4 text-body-1"
				:class="tab.label === activeTab ? 'active-text primary--text mr-2' : ''"
			>
				{{ tab.label }}
			</span>
		</a>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { TabItem } from './types';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: null
			},
			tabs: {
				type: Array as PropType<TabItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class ContextualMenu extends MixinsDeclaration {

		activeTab = this.value;

		changeTab(tab: TabItem): void {
			this.activeTab = tab.label;
			this.$emit('change', this.activeTab);
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

.active-tab:before {
    content: "";
		width: 4px;
		border-radius: 0 2px 2px 0;
		background-color: $vd-primary;
		height: 39px;
		margin-left: -2px
}
</style>
