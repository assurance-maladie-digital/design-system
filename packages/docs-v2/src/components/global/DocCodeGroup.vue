<template>
	<div class="doc-code-group">
		<VTabs
			v-model="tab"
			dark
		>
			<ClientOnly>
				<VTab
					v-for="(item) in tabs"
					:key="item.value"
					v-text="item.label"
				/>
			</ClientOnly>
		</VTabs>

		<VTabsItems v-model="tab">
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
	import Component from 'vue-class-component';

	import { VNodeComponentOptions } from 'vue/types/vnode';

	interface Tabs {
		value: string;
		label: string;
	}

	interface ComponentOptions extends VNodeComponentOptions {
		propsData: Tabs;
	}

	@Component
	export default class DocCodeGroup extends Vue {
		tab = null;

		get tabs(): Tabs[] | undefined {
			if (!this.$slots.default) {
				return
			}

			const filteredSlots = this.$slots.default.filter(slot => Boolean(slot.tag));

			const tabs = filteredSlots.map((slot) => {
				const { propsData } = slot.componentOptions as ComponentOptions;
				const { label, value } = propsData;

				return {
					label,
					value
				};
			});

			return tabs;
		}
	}
</script>

<style lang="scss" scoped>
	.doc-code-group ::v-deep {
		.v-tabs {
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;
		}

		.v-slide-group__content::after {
			content: "";
			width: 100%;
			height: 2px;
			background: #505050;
			position: absolute;
			bottom: 0;
		}
	}
</style>
