<template>
	<div class="vd-collapse-list">
		<div v-if="isMobile">
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
		</div>
		<div v-else>
			<h4 class="mb-2 text-subtitle-1 font-weight-bold">
				{{ listItems.title }}
			</h4>
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
		</div>
	</div>
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
