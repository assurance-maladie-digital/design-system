<template>
	<div class="doc-component-list">
		<ul class="d-flex flex-wrap pl-0 ma-n4">
			<li
				v-for="component in components"
				:key="component.name"
				class="ma-4"
			>
				<VCard
					:to="component.href"
					nuxt
					max-width="234px"
					min-height="354px"
					class="d-flex flex-column fill-height"
				>
					<img
						:src="require('../assets/images/' + component.image)"
						width="234px"
						height="154px"
						class="d-block"
					>

					<VCardTitle class="font-weight-bold">
						{{ component.name }}
					</VCardTitle>

					<VCardText class="pb-2">
						{{ component.description }}
					</VCardText>

					<VSpacer />

					<VCardText
						v-if="component.status !== ComponentStatusEnum.READY"
						class="pt-0 ma-n2"
					>
						<VChip
							v-if="component.status === ComponentStatusEnum.NEW"
							outlined
							small
							color="green"
							class="ma-2"
						>
							Nouveau
						</VChip>

						<VChip
							v-if="component.status === ComponentStatusEnum.DEPRECATED"
							outlined
							small
							color="brick"
							class="ma-2"
						>
							Déprécié
						</VChip>
					</VCardText>
				</VCard>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ComponentDescription } from '../types/components';
	import { ComponentStatusEnum } from '../constants/ComponentStatusEnum';

	const Props = Vue.extend({
		props: {
			components: {
				type: Array as PropType<ComponentDescription[]>,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocComponentList extends MixinsDeclaration {
		ComponentStatusEnum = ComponentStatusEnum;
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	ul {
		list-style: none;
	}

	.v-card:hover {
		box-shadow: 0 0 0 2px $vd-primary !important;
	}
</style>
