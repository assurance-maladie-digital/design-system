<template>
	<VListGroup
		v-model="expandedList"
		:group="groupNamespace"
		:prepend-icon="icon"
		class="v-list-group--default"
		no-action
		v-bind="$attrs"
	>
		<template #activator>
			<VListItemContent>
				<VListItemTitle
					v-if="item.title"
					v-text="item.title"
				/>
			</VListItemContent>
		</template>

		<template v-for="(child, index) in item.items">
			<VSubheader
				v-if="child.heading"
				:key="`heading-${index}`"
				class="text--primary font-weight-black text-uppercase"
				inset
				v-text="child.title"
			/>

			<VDivider
				v-else-if="child.divider"
				:key="`divider-${index}`"
				inset
				class="mt-3 mb-2 ml-16"
			/>

			<DocDrawerListGroup
				v-else-if="child.items"
				:key="`sub-group-${index}`"
				:item="child"
				sub-group
			/>

			<DocDrawerListItem
				v-else
				:key="`child-${index}`"
				:item="child"
			/>
		</template>
	</VListGroup>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DocDrawerListItem from './DocDrawerListItem.vue';

	import { DrawerItem, PageItem } from '../../types/drawer';

	const ICON_SEPARATOR = ':';
	const GROUP_ITEM_SEPARATOR = '|';

	const Props = Vue.extend({
		props: {
			item: {
				type: Object as PropType<DrawerItem>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		/** @see https://github.com/kaorun343/vue-property-decorator/issues/102 */
		name: 'DocDrawerListGroup',
		components: {
			DocDrawerListItem
		}
	})
	export default class DocDrawerListGroup extends MixinsDeclaration {
		expandedList: boolean | null = null;

		get groupNamespace(): string {
			return this.genGroup(this.item.items);
		}

		get icon(): string | undefined {
			if (!this.item.icon) {
				return undefined;
			}

			const [offIcon, onIcon] = this.item.icon.split(ICON_SEPARATOR);

			if (!this.expandedList) {
				return offIcon;
			}

			return onIcon || offIcon;
		}

		genGroup(items: PageItem[]): string {
			const groupItems = items.map((item) => {
				if (item.items) {
					return this.genGroup(item.items);
				}

				return item.to;
			});

			return groupItems.join(GROUP_ITEM_SEPARATOR);
		}
	}
</script>

<style lang="scss">
	.v-list-group.v-list-group--default {
		.v-list-group__header {
			min-height: 32px;

			> .v-list-item__icon {
				margin-bottom: 6px;
				margin-top: 6px;
			}
		}
	}
</style>
