<template>
	<VFadeTransition>
		<VBtn
			v-show="showBtn"
			v-scroll:[targetSelector]="onScroll"
			v-bind="{
				...options.btn,
				...$attrs
			}"
			:style="btnStyle"
			:min-width="minWidth"
			class="vd-back-to-top-btn"
			:aria-labelledby="locales.label"
			@click="scrollToTop"
			v-on="$listeners"
		>
			<span :class="labelClasses">
				<slot>
					{{ locales.label }}
				</slot>
			</span>

			<slot name="icon">
				<VIcon v-bind="options.icon">
					{{ topIcon }}
				</VIcon>
			</slot>
		</VBtn>
	</VFadeTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';
	import { convertToUnit } from '../../helpers/convertToUnit';

	import { IndexedObject } from '../../types';

	import { mdiArrowUp } from '@mdi/js';

	import { Scroll } from 'vuetify/lib/directives';

	const Props = Vue.extend({
		props: {
			threshold: {
				type: Number,
				default: 120
			},
			nudgeRight: {
				type: [String, Number],
				default: '16px'
			},
			nudgeBottom: {
				type: [String, Number],
				default: '16px'
			},
			target: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		directives: {
			Scroll
		}
	})
	export default class BackToTopBtn extends MixinsDeclaration {
		locales = locales;

		topIcon = mdiArrowUp;

		showBtn = false;

		get targetSelector(): string | null {
			if (!this.target) {
				return null;
			}

			return `#${this.target}`;
		}

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		get btnStyle(): IndexedObject {
			const right = convertToUnit(this.nudgeRight) || '0';
			const bottom = convertToUnit(this.nudgeBottom) || '0';

			return {
				bottom,
				right
			};
		}

		get minWidth(): string | null {
			return this.isMobile ? '36px' : null;
		}

		get labelClasses(): IndexedObject<boolean> {
			return { 'd-sr-only': this.isMobile };
		}

		onScroll(e: MouseEvent): void {
			const target = e.currentTarget as HTMLElement | Window;

			if (target === window) {
				this.showBtn = window.scrollY > this.threshold;
			} else {
				this.showBtn = (target as HTMLElement).scrollTop > this.threshold;
			}
		}

		scrollToTop(): void {
			const target = document.getElementById(this.target) || window;
			target.scrollTo(0, 0);
		}
	}
</script>
