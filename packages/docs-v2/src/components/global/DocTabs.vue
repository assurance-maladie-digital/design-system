<template>
	<div class="doc-tabs w-100 mb-4">
		<VTabs
			v-model="tab"
			:dark="!light"
		>
			<ClientOnly>
				<VTab
					v-for="(item) in tabs"
					:key="item.value"
					v-text="item.label"
				/>
			</ClientOnly>
		</VTabs>

		<VTabsItems
			v-model="tab"
			:class="{ 'pt-8': !noSpacing }"
		>
			<slot
				v-for="slot in Object.keys($slots)"
				:name="slot"
				:slot="slot"
			/>
		</VTabsItems>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { VNodeComponentOptions } from 'vue/types/vnode';

	import { slugify } from '../../functions/slugify';

	interface Tabs {
		value: string;
		label: string;
	}

	interface ComponentOptions extends VNodeComponentOptions {
		propsData: Tabs;
	}

	const Props = Vue.extend({
		props: {
			light: {
				type: Boolean,
				default: false
			},
			noSpacing: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocTabs extends MixinsDeclaration {
		tab = null;

		get tabs(): Tabs[] | undefined {
			if (!this.$slots.default) {
				return;
			}

			const filteredSlots = this.$slots.default.filter(slot => Boolean(slot.tag));

			const tabs = filteredSlots.map((slot) => {
				const { propsData } = slot.componentOptions as ComponentOptions;
				const { label } = propsData;

				return {
					label,
					value: slugify(label)
				};
			});

			return tabs;
		}
	}
</script>

<style lang="scss" scoped>
	.doc-tabs ::v-deep {
		.v-window {
			overflow: visible;
		}

		.doc-code-block {
			margin-bottom: 0 !important;
		}

		> .v-tabs {
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;

			.v-slide-group__content::after {
				content: "";
				width: 100%;
				height: 2px;
				background: rgba(0, 0, 0, .12);
				position: absolute;
				bottom: 0;
			}

			&.theme--dark .v-slide-group__content::after {
				background: hsla(0, 0%, 100%, .3);
			}
		}
	}
</style>
