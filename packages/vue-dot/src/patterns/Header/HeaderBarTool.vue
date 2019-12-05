<template>
	<VToolbar
		:color="search === null ? 'primary' : 'transparant'"
		class="px-4"
		:height="$vuetify.breakpoint.xs ? '36' : '48'"
	>
		<!-- search if search is not null or searchable -->
		<template v-if="search !== null">
			<VTextField
				clearable
				autofocus
				hide-details
				:placeholder="locales.search"
				solo
				flat
				loader-height="0"
				@blur="search = null"
				@click:clear="search = null"
				@keydown.enter="$emit('search', $event); search = null"
			/>
		</template>
		<!-- search  -->
		<template v-else>
			<VBtn
				v-if="back && breadcrumb"
				icon
				small
				dark
				@click.prevent="$emit('back')"
			>
				<VIcon
					color="white"
				>
					{{ mdiArrowLeft }}
				</VIcon>
			</VBtn>
			<VCol
				v-if="breadcrumb"
				class="white--text text-no-wrap"
			>
				{{ breadcrumb }}
			</VCol>
			<VDivider
				v-if="breadcrumb"
				vertical
				inset
				class="white mx-sm-4 mr-2 mb-2"
			/>
			<VSelect
				v-if="navigationList && $vuetify.breakpoint.xs"
				:value="value"
				dark
				hide-details
				:items="navigationSelectItems"
				@change="$emit('input',$event)"
			/>
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
			<VBtn
				v-if="searchable"
				icon
				small
				color="white"
				@click="search = ''"
			>
				<VIcon>
					{{ mdiMagnify }}
				</VIcon>
			</VBtn>
		</template>
	</VToolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiArrowLeft, mdiMagnify } from '@mdi/js';
	import locales from './locales';

	const Props = Vue.extend({
		props: {
			// tab number
			value: {
				type: Number,
				default: 0
			},
			navigationList: {
				type: Array,
				default: ()=> []
			},
			back: {
				type: Boolean,
				default:false
			},
			breadcrumb: {
				type:String,
				default:null
			},
			searchable: {
				type: Boolean,
				default: false
			}
		}
	});

    @Component<HeaderBarTool>({
    })
	export default class HeaderBarTool extends Props {

        mdiArrowLeft = mdiArrowLeft;
        mdiMagnify = mdiMagnify;
        locales = locales;
        search: String | null  = null;

        //compute the select items
        get navigationSelectItems() {
            return this.navigationList.map((item, index) => {
            return { text: item, value: index };
            });
        }

	}
</script>

<style scoped>

</style>