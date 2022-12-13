<template>
	<div class="vd-collapse-list my-4">
		<div v-if="!isMobile">
			<div
				class="mb-2"
			>
				<span class="text-subtitle-1 font-weight-bold">
					{{ listItems.title }}
				</span>
			</div>
			<div
				v-for="item in listItems.list"
				:key="item.name"
				class="mb-2"
			>
				<a
					:href="item.route"
					target="_blank"
					class="text-body-2 text-decoration-none black--text"
				>
					{{ item.name }}
				</a>
			</div>
		</div>
		<div v-else>
			<v-expansion-panels
				accordion
				flat
			>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<span class="font-weight-bold">
							{{ listItems.title }}
						</span>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<div
							v-for="item in listItems.list"
							:key="item.name"
							class="mb-2"
						>
							<a
								:href="item.route"
								target="_blank"
								class="text-body-2 text-decoration-none black--text"
							>
								{{ item.name }}
							</a>
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { listItem } from '../CollapseList/types';

	const Props = Vue.extend({
		props: {
			listItems: {
				type: Object as PropType<listItem>,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class CollapseList extends MixinsDeclaration {

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
</script>

<style lang="scss" scoped>
.title {
	font-weight: 600 !important;
}
.theme--light.v-expansion-panels .v-expansion-panel {
	background-color: transparent !important;
}
</style>
