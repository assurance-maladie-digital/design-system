<template>
	<VList
		dense
		expand
		nav
	>
		<template v-for="(item, index) in items">
			<VSubheader
				v-if="item.heading"
				:key="`heading-${index}`"
				class="text--primary font-weight-black text-uppercase"
			>
				{{ item.heading }}
			</VSubheader>

			<VDivider
				v-else-if="item.divider"
				:key="`divider-${index}`"
				class="mt-3 mb-2 ml-2 mr-n2"
			/>

			<DocDrawerListGroup
				v-else-if="item.items"
				:key="`group-${index}`"
				:item="item"
			/>

			<slot
				v-else-if="$scopedSlots.item"
				name="item"
				:index="index"
				:item="item"
			/>

			<DocDrawerListItem
				v-else
				:key="`item-${index}`"
				:item="item"
			/>
		</template>
	</VList>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DocDrawerListGroup from './DocDrawerListGroup.vue';
	import DocDrawerListItem from './DocDrawerListItem.vue';

	import { DrawerItem } from '../../types/drawer';

	const Props = Vue.extend({
		props: {
			items: {
				type: Array as PropType<DrawerItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			DocDrawerListGroup,
			DocDrawerListItem
		}
	})
	export default class DocDrawerList extends MixinsDeclaration {}
</script>
