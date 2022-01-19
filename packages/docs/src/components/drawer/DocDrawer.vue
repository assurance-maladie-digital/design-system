<template>
	<VNavigationDrawer
		:value="value"
		app
		clipped
		width="320px"
		@input="$emit('input', $event)"
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
			value: {
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
			prop: 'value',
			event: 'input'
		}
	})
	export default class DocDrawer extends MixinsDeclaration {
		items = drawerItems;
	}
</script>
