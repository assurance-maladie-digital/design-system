<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { mdiClose } from "@mdi/js";
import { config } from "./config";
import { locales } from "./locales";
import { NavigationItem } from "../types";
import { colorMapping } from "../colorMapping";
import { ThemeEnum } from "../ThemeEnum";

import { customizable } from "@/mixins/customizable";
export default defineComponent({
	mixins: [customizable(config)],
	props: {
		theme: {
			type: String as PropType<ThemeEnum>,
			required: true,
		},
		items: {
			type: Array as PropType<NavigationItem[]>,
			default: undefined,
		},
		mobileVersion: {
			type: Boolean,
			default: false,
		},
		drawer: {
			type: Boolean,
			default: false,
		},
		tab: {
			type: [Number, String],
			default: null,
		},
	},
	emits: ["change", "update:tab"],
	data() {
		return {
			closeIcon: mdiClose,
			locales,
		};
	},
	computed: {
		spacingClass(): string {
			return this.mobileVersion ? 'px-4' : 'px-14';
		},
		backgroundColor(): string {
			return colorMapping[this.theme];
		}
	},
	methods: {
		drawerUpdated(value: boolean): void {
			if (!value) {
				this.$emit('change', false);
			}
		},
		emitChangeEvent(): void {
			this.$emit('change', !this.drawer);
		},
		emitTabUpdateEvent(value: number): void {
			this.$emit('update:tab', value);
		}
	}
});
</script>

<template>
    <VNavigationDrawer
        v-if="mobileVersion && items"
        :color="backgroundColor"
        :modelValue="drawer"
        v-bind="options"
        @input="drawerUpdated"
    >
      	<slot>
			<div class="d-flex align-center justify-end mb-8">
				  <VBtn
					  v-bind="options.closeBtn"
					  variant="text"
					  :aria-label="locales.closeBtn"
					  @click="emitChangeEvent"
				  >
						<VIcon v-bind="options.closeIcon">
						  	{{ closeIcon }}
						</VIcon>
				  </VBtn>
			</div>

			<slot name="navigation-drawer-prepend" />

			<VTabs
				v-bind="options.tabs"
				:modelValue="tab"
				class="flex-grow-0"
				@change="emitTabUpdateEvent"
			>
				  <VTab
					  v-for="(item, index) in items"
					  :key="index"
					  :href="item.href"
					  :to="item.to"
					  v-bind="options.tab"
				  >
						{{ item.label }}
				  </VTab>
			</VTabs>

			<slot name="navigation-drawer-append" />
		</slot>
    </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.v-navigation-drawer {
	.v-tab {
		height: 40px !important;
		&.v-tab--active {
			background: rgba($color: #fff, $alpha: 0.1);
		}
	}
	:deep(.v-navigation-drawer__content) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
