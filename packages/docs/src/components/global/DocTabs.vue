<template>
	<div
		:class="{ 'tabs-code': code }"
		:id="id"
		class="doc-tabs w-100 mb-4"
	>
		<VTabs
			v-model="tab"
			:vertical="mobileVersion"
			:dark="code"
		>
			<VTab
				v-for="(item) in tabs"
				:key="item.value"
				:class="tabClasses"
				v-text="item.label"
				@click="setHash(item.value)"
			/>
		</VTabs>

		<VTabsItems
			v-model="tab"
			:class="{ 'pt-8': !code }"
			touchless
		>
			<slot
				v-for="slot in Object.keys($slots)"
				:name="slot"
				:slot="slot"
			/>
		</VTabsItems>

		<VDivider
			v-if="bottomDivider"
			class="mt-6"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { VNodeComponentOptions } from 'vue/types/vnode';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	import { slugify } from '../../functions/slugify';

	const HASH_DELIMITER = '#';
	const PATH_DELIMITER = '/';

	interface Tab {
		value: string;
		label: string;
	}

	interface ComponentOptions extends VNodeComponentOptions {
		propsData: Tab;
	}

	const Props = Vue.extend({
		props: {
			code: {
				type: Boolean,
				default: false
			},
			namespace: {
				type: String,
				default: 'section'
			},
			bottomDivider: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<DocTabs>({
		watch: {
			$route(): void {
				this.setTab();
			}
		}
	})
	export default class DocTabs extends MixinsDeclaration {
		tab: number | null = null;

		get tabs(): Tab[] | undefined {
			if (!this.$slots.default) {
				return;
			}

			const filteredSlots = this.$slots.default.filter((slot) => Boolean(slot.tag));

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

		get id(): string | undefined {
			return this.code ? undefined : this.namespace;
		}

		get mobileVersion(): boolean {
			if (this.code) {
				return false;
			}

			return this.$vuetify.breakpoint.xs;
		}

		get tabClasses(): IndexedObject<boolean> {
			return {
				'justify-start': this.mobileVersion,
				'am-blue-lighten-97': this.mobileVersion
			}
		}

		findTabIndex(value: string): number | undefined {
			return this.tabs?.findIndex((tab) => tab.value === value);
		}

		setHash(hash: string): void {
			if (this.code) {
				return;
			}

			// Set hash using native API to avoid scroll jump
			window.location.hash = `${this.namespace}/${hash}`;
		}

		setTab(): void {
			if (this.code) {
				return;
			}

			const hash = this.$nuxt.$route.hash;
			const [namespace, tab] = hash.replace(HASH_DELIMITER, '').split(PATH_DELIMITER);

			const tabIndex = this.findTabIndex(tab);

			if (tabIndex) {
				this.tab = tabIndex;
			}

			if (namespace) {
				this.$vuetify.goTo(HASH_DELIMITER + namespace);
			}
		}

		mounted() {
			this.setTab();
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.doc-tabs :deep() {
		.v-window {
			overflow: visible;
		}

		> .v-tabs {
			overflow: hidden;
			position: relative;
			border-top-left-radius: 4px;
			border-top-right-radius: 4px;

			&--vertical {
				border: 1px solid $vd-am-blue-lighten-90;
			}

			&::after {
				content: "";
				width: 100%;
				height: 2px;
				background: $vd-am-blue-lighten-90;
				position: absolute;
				bottom: 0;
			}

			&--vertical::after {
				content: none;
			}

			&.theme--dark::after {
				background: hsla(0, 0%, 100%, .2);
			}

			&.theme--dark > .v-tabs-bar {
				background: $vd-am-blue-darken-80;
			}

			&--vertical .v-tab {
				max-width: 100%;
			}

			.v-slide-group__wrapper {
				z-index: 1;
			}
		}
	}

	.doc-tabs:not(.tabs-code) > :deep(.v-tabs) {
		.v-tab {
			color: $vd-am-blue-lighten-20 !important;
			text-transform: none;

			&:hover::before {
				opacity: .06;
			}
		}

		.v-tab--active {
			color: $vd-am-blue-darken-20 !important;
			font-weight: 700 !important;

			&:hover::before {
				opacity: .08;
			}

			&:focus::before {
				opacity: .12;
			}
		}
	}

	.doc-tabs.tabs-code :deep() {
		.doc-code-block {
			border: none;
			margin-bottom: 0 !important;
			border-top-left-radius: 0 !important;
			border-top-right-radius: 0 !important;
		}
	}
</style>
