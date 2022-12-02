<template>
	<div
		v-show="showBtn"
		v-scroll="onScroll"
	>
		<VBtn
			v-bind="btnOptions"
			:aria-label="label"
			class="vd-top-btn"
			:small="$vuetify.breakpoint.mobile"
			@click="toTop"
		>
			<span class="d-none d-sm-block">
				{{ label }}
			</span>
			<slot name="icon">
				<VIcon v-bind="options.icon">
					{{ topIcon }}
				</VIcon>
			</slot>
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable, Options } from '../../mixins/customizable';
	import deepMerge from 'deepmerge';

	import { mdiArrowUp } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			top: {
				type: Number,
				default: 20
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class BackToTopBtn extends MixinsDeclaration {
		locales = locales;
		topIcon = mdiArrowUp;
		showBtn = false;

		get btnOptions(): Options {
			return deepMerge<Options>(this.options.btn, this.$attrs);
		}

		onScroll(): void {
			this.showBtn = window.scrollY > this.top;
		}

		toTop(): void {
			window.scrollTo(0, 0);
		}
	}
</script>

<style lang="scss">
	.vd-top-btn.v-btn {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 1;
	}
</style>
