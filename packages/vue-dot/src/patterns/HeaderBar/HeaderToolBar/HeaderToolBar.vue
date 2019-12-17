<template>
	<VToolbar
		:color="search === null ? 'primary' : 'transparant'"
		v-bind="options.toolbar"
		:height="$vuetify.breakpoint.smAndDown ? '36' : '48'"
	>
		<!-- search if search is not null or searchable -->
		<VTextField
			v-if="search !== null"
			data-test="search-input"
			v-bind="options.searchTextField"
			:dense="$vuetify.breakpoint.smAndDown"
			:placeholder="toolBarLocales.search"
			@blur="search = null"
			@click:clear="search = null"
			@keydown.enter="emitSearch($event); search = null"
		/>
		<!-- toolbar components with 'back' icon action, breadcrumb, tabs and 'search' icon  -->
		<template v-else>
			<!-- back icon -->
			<VBtn
				v-if="back && breadcrumb"
				data-test="back"
				icon
				small
				dark
				@click.prevent="emitBack"
			>
				<VIcon v-bind="options.backIcon">
					{{ backIcon }}
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
				data-test="search-icon"
				v-bind="options.searchBtn"
				@click="search = ''"
			>
				<VIcon>{{ searchIcon }}</VIcon>
			</VBtn>
		</template>
	</VToolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import { mdiArrowLeft, mdiMagnify } from '@mdi/js';
	import header from '../mixins/header';

	import locales from './locales';

	import config from './config';
	import customizable from '../../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			// tab number
			value: {
				type: Number,
				default: 0
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), header);

	@Component({})
	export default class HeaderToolBar extends MixinsDeclaration {
		// icons
		backIcon = mdiArrowLeft;
		searchIcon = mdiMagnify;

		toolBarLocales = locales;

		search = null;

		// compute the select items
		get navigationSelectItems() {
			return this.navigationList.map((item, index) => {
				return { text: item, value: index };
			});
		}
	}
</script>
