<template>
	<div
		class="pa-5"
		:class="$vuetify.theme.dark ? 'contextual-menu-dark' : 'contextual-menu'"
	>
		<span class="title">{{ locales.content }}</span>
		<div class="tabs mt-5">
			<div
				v-for="tab in tabs"
				:key="tab.name"
				class="tab pointer d-flex align-center"
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
	import { locales } from './locales';
	import { tabItem } from './types';

	const Props = Vue.extend({
		props: {
			tabs: {
				type: Array as PropType<tabItem[]>,
				required: true
			}
		}
	});
	const MixinsDeclaration = mixins(Props);

	@Component
	export default class RatingPicker extends MixinsDeclaration {
		locales = locales;

		activeTab = this.tabs.length ? this.tabs[0] : { route: '' };

		changeTab(tab: tabItem): void {
			this.activeTab = tab;
			this.$emit('current-tab', this.activeTab.route);
		}

		mounted() {
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

.contextual-menu-dark {
	background-color: $vd-grey-darken-40;
	border: 1px solid $vd-grey-darken-60;
	border-radius: 4px;
	max-width: 307px;
}

.title {
	font-size: 18px;
	font-weight: 600;
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
