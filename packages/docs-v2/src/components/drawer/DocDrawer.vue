<template>
	<VNavigationDrawer
		:value="drawer"
		app
		clipped
		width="300"
		@input="$emit('change', $event)"
	>
		<KeepAlive>
			<DocDrawerList :items="items" />
		</KeepAlive>
	</VNavigationDrawer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DocDrawerList from './DocDrawerList.vue';

	import { drawerItems } from '../../data/drawerItems';

	const Props = Vue.extend({
		props: {
			drawer: {
				type: Boolean,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			DocDrawerList
		},
		model: {
			prop: 'drawer',
			event: 'change'
		}
	})
	export default class DocDrawer extends MixinsDeclaration {
		items = drawerItems;
	}
</script>
