<template>
	<VToolbar
		:color="search === null ? 'primary' : 'transparant'"
		class="px-4"
		:height="$vuetify.breakpoint.smAndDown ? '36' : '48'"
	>
		<!-- search if search is not null or searchable -->
		<VTextField
			v-if="search !== null"
			:dense="$vuetify.breakpoint.smAndDown"
			clearable
			autofocus
			hide-details
			:placeholder="locales.search"
			solo
			flat
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
				<VIcon color="white">
					{{ mdiArrowLeft }}
				</VIcon>
			</VBtn>
			<!-- breadcrumb -->
			<div
				v-if="breadcrumb"
				class="white--text text-no-wrap text-truncate"
			>
				{{ breadcrumb }}
			</div>
			<VDivider
				v-if="breadcrumb"
				vertical
				inset
				class="white mx-sm-4 mr-2 mb-2"
			/>
			<!-- select navigation in mobile mode -->
			<VSelect
				v-if="navigationList && $vuetify.breakpoint.smAndDown"
				:value="value"
				dark
				hide-details
				:items="navigationSelectItems"
				@change="$emit('input',$event)"
			/>
			<!-- tabs if not in mobile -->
			<VTabs
				v-else-if="navigationList"
				:value="value"
				:show-arrows="true"
				dark
				background-color="transparent"
				@change="$emit('input',$event)"
			>
				<VTabsSlider />

				<VTab
					v-for="(item,i) in navigationList"
					:key="i"
				>
					{{ item }}
				</VTab>
			</VTabs>
			<VSpacer />
			<!-- search icon -->
			<VBtn
				v-if="searchable"
				icon
				small
				color="white"
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
		mixins: [header]
	})
	export default class HeaderBarTool extends Props {
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
