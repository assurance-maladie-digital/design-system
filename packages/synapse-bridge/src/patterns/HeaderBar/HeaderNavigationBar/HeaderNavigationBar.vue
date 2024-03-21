<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { mdiClose } from "@mdi/js";
import { NavigationItem } from "../types";
import { config } from "./config";
import { colorMapping } from "../colorMapping";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";
import HeaderMenuBtn from "../HeaderMenuBtn/HeaderMenuBtn.vue";
import { customizable } from "@/mixins/customizable";
export default defineComponent({
	mixins: [customizable(config)],
	components: {
		HeaderMenuBtn,
	},
	emits: ["update:drawer", "update:tab"],
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
		innerWidth: {
			type: String,
			default: undefined,
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
	data() {
		return {
			mdiClose,
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
		emitDrawerEvent(): void {
			this.$emit('update:drawer', !this.drawer);
		},
		emitTabUpdateEvent(value: number): void {
			this.$emit('update:tab', value);
		}
	}
});
</script>

<template>
	<VSheet
		v-bind="options.sheet"
		:color="backgroundColor"
		:class="spacingClass"
		class="vd-navigation-bar d-flex align-center justify-center"
	>
		<VSheet class="header-navigation-background" v-bind="options.innerSheet" :width="innerWidth">
			<slot name="navigation-bar-prepend" />

			<slot>
				<HeaderMenuBtn v-if="mobileVersion" @click="emitDrawerEvent" />

				<VTabs
					v-else
					v-bind="options.tabs"
					:modelValue="tab"
					@change="emitTabUpdateEvent"
				>
					<VTab
						v-for="(item, index) in items"
						:key="index"
						v-bind="options.tab"
						:href="item.href"
						:to="item.to"
					>
						{{ item.label }}
					</VTab>
				</VTabs>
			</slot>

			<slot name="navigation-bar-secondary-content" />
		</VSheet>
	</VSheet>
</template>

<style lang="scss" scoped>
.vd-navigation-bar {
	overflow: hidden;
}
.header-navigation-background {
	background-color: v-bind(backgroundColor);
}
</style>
