<template>
	<ul
		v-if="isMobile"
		class="vd-collapse-list pa-0"
	>
		<VExpansionPanels
			accordion
			flat
		>
			<VExpansionPanel>
				<VExpansionPanelHeader>
					<h4 class="font-weight-bold">
						{{ listItems.title }}
					</h4>
				</VExpansionPanelHeader>
				<VExpansionPanelContent>
					<li
						v-for="item in listItems.content"
						:key="item.name"
						class="mb-2"
					>
						<a
							:href="item.url"
							class="text-body-2 text-decoration-none black--text"
						>
							{{ item.name }}
						</a>
					</li>
				</VExpansionPanelContent>
			</VExpansionPanel>
		</VExpansionPanels>
	</ul>

	<ul
		v-else
		class="pa-0"
	>
		<h4 class="mb-3 text-subtitle-1 font-weight-bold">
			{{ listItems.title }}
		</h4>
		<li
			v-for="item in listItems.content"
			:key="item.name"
			class="mb-2"
		>
			<a
				:href="item.url"
				class="text-body-2 text-decoration-none black--text"
			>
				{{ item.name }}
			</a>
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ListItem } from './types';

	const Props = Vue.extend({
		props: {
			listItems: {
				type: Object as PropType<ListItem>,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class CollapsibleList extends MixinsDeclaration {
		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
</script>

<style lang="scss" scoped>
	li {
		list-style: none;
	}
</style>
