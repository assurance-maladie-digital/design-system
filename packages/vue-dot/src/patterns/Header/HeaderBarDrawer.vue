<template>
	<VNavigationDrawer
		v-if="$vuetify.breakpoint.xs"
		v-model="showActionList"
		v-bind="$attrs"
		width="360"
	>
		<VListItem>
			<VListItemAvatar>
				<VIcon>{{ mdiAccount }}</VIcon>
			</VListItemAvatar>

			<VListItemContent>
				<VListItemTitle>{{ firstname }} {{ lastname }} </VListItemTitle>
				<v-list-item-subtitle>{{ info }} </v-list-item-subtitle>
			</VListItemContent>
		</VListItem>

		<VDivider />

		<VList
			nav
		>
			<VListItem
				v-for="(item, index) in actionsList"
				:key="index"
				@click="$emit('click:action', index); showActionList = false"
			>
				{{ item }}
			</VListItem>
			<VListItem @click="$emit('click:logout'); showActionList = false">
				<VListItemIcon>
					<VIcon color="primary">
						{{ mdiExitToApp }}
					</VIcon>
				</VListItemIcon>
				<VListItemContent>
					{{ locales.logOut }}
				</VListItemContent>
			</VListItem>
			<VListItem @click="showActionList = false">
				<VListItemIcon>
					<VIcon>
						{{ mdiChevronLeft }}
					</VIcon>
				</VListItemIcon>
			</VListItem>
		</VList>
	</VNavigationDrawer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import locales from './locales';
	import { mdiAccount, mdiChevronLeft, mdiExitToApp } from '@mdi/js';

	import HeaderBarMenu from './HeaderBarMenu.vue';

	import { mapState } from 'vuex';

	const Props = Vue.extend({
		props: {
			value: {
				type: Boolean,
				default: false
			},
			firstname: {
				type: String,
				default: null
			},
			lastname: {
				type: String,
				default: null
			},
			info: {
				type: String,
				default: null
			},
			actionsList: {
				type: [Array, Object],
				default: () => []
			}
		}
	});

    @Component<HeaderBarDrawer>({
        watch: {
            value(newValue){
                this.showActionList = newValue;
            },
            showActionList(newValue){
                this.$emit('input', newValue);
            }
        }
    })
	export default class HeaderBarDrawer extends Props {
        locales = locales;
        mdiAccount = mdiAccount;
		mdiExitToApp = mdiExitToApp;
        mdiChevronLeft = mdiChevronLeft;

        showActionList = false;

	}
</script>

<style scoped>

</style>