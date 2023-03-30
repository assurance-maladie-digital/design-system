<template>
	<VListItem
		v-if="isMobile"
		class="vd-collapse-list"
	>
		<VListItemContent>
			<VExpansionPanels
				accordion
				flat
			>
				<VExpansionPanel>
					<VExpansionPanelHeader>
						<VListItemTitle class="font-weight-bold">
							{{ listItems.title }}
						</VListItemTitle>
					</VExpansionPanelHeader>
					<VExpansionPanelContent>
						<div
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
						</div>
					</VExpansionPanelContent>
				</VExpansionPanel>
			</VExpansionPanels>
		</VListItemContent>
	</VListItem>
	<VListItem v-else>
		<VListItemContent>
			<VListItemTitle class="mb-3 text-subtitle-1 font-weight-bold">
				{{ listItems.title }}
			</VListItemTitle>
			<div
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
			</div>
		</VListItemContent>
	</VListItem>
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
