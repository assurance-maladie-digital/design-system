<template>
	<VToolbar
		:color="search === null ? 'primary' : 'transparant'"
		v-bind="options.toolbar"
		:height="$vuetify.breakpoint.smAndDown ? '36' : '48'"
	>
		<!-- search if search is not null or searchable -->
		<VTextField
			v-if="search !== null"
			v-bind="options.searchTextField"
			:dense="$vuetify.breakpoint.smAndDown"
			:placeholder="locales.search"
			@blur="search = null"
			@click:clear="search = null"
			@keydown.enter.prevent="emitSearch($event); search = null"
		/>
		<!-- toolbar components with 'back' icon action, breadcrumb, tabs and 'search' icon  -->
		<template v-else>
			<!-- back icon -->
			<VBtn
				v-if="back && breadcrumb"
				icon
				small
				dark
				@click.prevent="emitBack"
			>
				<VIcon v-bind="options.backIcon">
					{{ mdiArrowLeft }}
				</VIcon>
			</VBtn>
			<!-- breadcrumb -->
			<div
				v-if="breadcrumb"
				v-bind="options.breadcrumb"
			>
				{{ breadcrumb }}
			</div>
			<VDivider
				v-if="breadcrumb"
				v-bind="options.divider"
			/>
			<!-- select navigation in mobile mode -->
			<VSelect
				v-if="navigationList && navigationList.length > 0 && $vuetify.breakpoint.smAndDown"
				:value="value"
				v-bind="options.select"
				:items="navigationSelectItems"
				@change="$emit('input',$event)"
			>
				<template #selection="{item}">
					<div v-bind="options.selectedItem">
						{{ item.text }}
					</div>
				</template>
				<template #item="{item}">
					<div v-bind="options.selectItem">
						{{ item.text }}
					</div>
				</template>
			</VSelect>
			<!-- tabs if not in mobile -->
			<VTabs
				v-else-if="navigationList"
				:value="value"
				v-bind="options.tabs"
				@change="$emit('input',$event)"
			>
				<VTabsSlider />
				<VTab
					v-for="(item,i) in navigationList"
					:key="i"
					v-bind="options.tabItem"
				>
					{{ item }}
				</VTab>
			</VTabs>
			<VSpacer />
			<!-- search icon -->
			<VBtn
				v-if="searchable"
				v-bind="options.searchBtn"
				@click="search = ''"
			>
				<VIcon>{{ mdiMagnify }}</VIcon>
			</VBtn>
		</template>
	</VToolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiArrowLeft, mdiMagnify } from '@mdi/js';
	import header from './mixins/header';

	import customizable, { Options } from '../../mixins/customizable';
	import config from './config/HeaderBarTool';

	const Props = Vue.extend({
		props: {
			// tab number
			value: {
				type: Number,
				default: 0
			}
		}
	});

	@Component<HeaderBarTool>({
		mixins: [
			// Default configuration
			customizable(config),
			header
		]
	})
	export default class HeaderBarTool extends Props {
		// Mixin computed data
		options!: Options;
		// icons
		mdiArrowLeft = mdiArrowLeft;
		mdiMagnify = mdiMagnify;

		// mixins
		navigationList!: [string];

		// locales
		search: string | null = null;

		// compute the select items
		get navigationSelectItems() {
			return this.navigationList.map((item, index) => {
				return { text: item, value: index };
			});
		}
	}
</script>

<style scoped>
</style>
