<template>
	<VSheet
		v-bind="options.sheet"
		:color="backgroundColor"
		:class="spacingClass"
		class="vd-navigation-bar d-flex align-center justify-center"
	>
		<VSheet
			v-bind="options.innerSheet"
			:width="innerWidth"
		>
			<slot name="navigation-bar-prepend" />

			<slot>
				<HeaderMenuBtn
					v-if="mobileVersion"
					@click="emitDrawerEvent"
				/>

				<VTabs
					v-else
					v-bind="options.tabs"
					:value="tab"
					optional
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

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiClose } from '@mdi/js';

	import { NavigationItem } from '../types';
	import { config } from './config';
	import { colorMapping } from '../colorMapping';

	import { ThemeEnum } from '../ThemeEnum';

	import HeaderMenuBtn from '../HeaderMenuBtn';

	import { customizable } from '../../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			theme: {
				type: String as PropType<ThemeEnum>,
				required: true
			},
			items: {
				type: Array as PropType<NavigationItem[]>,
				default: undefined
			},
			mobileVersion: {
				type: Boolean,
				default: false
			},
			innerWidth: {
				type: String,
				default: undefined
			},
			drawer: {
				type: Boolean,
				default: false
			},
			tab: {
				type: [Number, String],
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		components: {
			HeaderMenuBtn
		}
	})
	export default class HeaderNavigationBar extends MixinsDeclaration {
		closeIcon = mdiClose;

		get spacingClass(): string {
			return this.mobileVersion ? 'px-4' : 'px-14';
		}

		get backgroundColor(): string {
			if (this.options.color) {
				return this.options.color;
			}

			return colorMapping[this.theme];
		}

		emitDrawerEvent(): void {
			this.$emit('update:drawer', !this.drawer);
		}

		emitTabUpdateEvent(value: number): void {
			this.$emit('update:tab', value);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-navigation-bar {
		overflow: hidden;
	}
</style>
