<template>
	<VExpansionPanels
		v-if="isMobile"
		class="vd-collapse-list-mobile"
		accordion
		flat
	>
		<VExpansionPanel>
			<VExpansionPanelHeader class="text-subtitle-2 pl-0 py-4">
				{{ listTitle }}
			</VExpansionPanelHeader>

			<VExpansionPanelContent>
				<ul class="pl-0">
					<li
						v-for="(item, index) in items"
						:key="index"
						class="py-3"
					>
						<a
							:href="item.href"
							class="text-body-2 text-decoration-none text--primary"
						>
							{{ item.text }}
						</a>
					</li>
				</ul>
			</VExpansionPanelContent>
		</VExpansionPanel>
	</VExpansionPanels>

	<div
		v-else
		class="vd-collapse-list"
	>
		<h4 class="text-subtitle-1 font-weight-bold mb-3">
			{{ listTitle }}
		</h4>

		<ul class="pl-0">
			<li
				v-for="(item, index) in items"
				:key="index"
				:class="{ 'mb-2': index < items.length - 1 }"
			>
				<a
					:href="item.href"
					class="text-body-2 text-decoration-none text--primary"
				>
					{{ item.text }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ListItem } from './types';

	const Props = Vue.extend({
		props: {
			listTitle: {
				type: String,
				default: null
			},
			items: {
				type: Array as PropType<ListItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class CollapsibleList extends MixinsDeclaration {
		get isMobile(): boolean {
			return this.$vuetify.breakpoint.xs;
		}
	}
</script>

<style lang="scss" scoped>
	.v-expansion-panel :deep(.v-expansion-panel-content__wrap) {
		padding: 0;
	}

	li {
		list-style: none;
	}

	a {
		transition: .15s;
		padding-top: 1px; // Add top padding to account for bottom border
		border-bottom: 1px solid transparent;

		&:hover,
		&:focus {
			border-color: currentColor;
		}
	}
</style>
