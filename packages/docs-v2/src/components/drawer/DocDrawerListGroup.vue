<template>
	<VListGroup
		v-model="model"
		:group="group"
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

		<template v-for="(child, i) in item.items">
			<VSubheader
				v-if="child.heading"
				:key="`heading-${i}`"
				class="text--primary font-weight-black text-uppercase"
				inset
				v-text="child.title"
			/>

			<VDivider
				v-else-if="child.divider"
				:key="`divider-${i}`"
				inset
				class="mt-3 mb-2 ml-16"
			/>

			<DocDrawerListGroup
				v-else-if="child.items"
				:key="`sub-group-${i}`"
				:item="child"
				sub-group
			/>

			<DocDrawerListItem
				v-else
				:key="`child-${i}`"
				:item="child"
			/>
		</template>
	</VListGroup>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DocDrawerListItem from './DocDrawerListItem.vue';

	const Props = Vue.extend({
		props: {
			item: {
				type: Object,
				default: () => ({})
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
		model = null;

		get group() {
			return this.genGroup(this.item.items);
		}

		get icon() {
			if (!this.item.icon) {
				return undefined;
			}

			const [off, on] = this.item.icon.split(':');

			return this.model ? (on || off) : off;
		}

		genGroup(items: any) {
			return items.reduce((acc: any, cur: any) => {
				acc.push(
					cur.items ? this.genGroup(cur.items) : cur.to
				);

				return acc;
			}, []).join('|');
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
