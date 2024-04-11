<script lang="ts">
	import { defineComponent } from 'vue'
	import { mdiArrowUp } from '@mdi/js'

	import { customizable } from '@/mixins/customizable'
	import { convertToUnit } from '@/helpers/convertToUnit'

	import { config } from './config'
	import { locales } from './locales'

	export default defineComponent({
		mixins: [customizable(config)],
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
		},
		data() {
			return {
				topIcon: mdiArrowUp,
				showBtn: false,
				locales
			}
		},
		computed: {
			targetSelector(): string | null {
				if (!this.target) {
					return null
				}

				return `#${this.target}`
			},

			isMobile(): boolean {
				return this.$vuetify.display.name === 'xs' || this.$vuetify.display.name === 'sm'
			},

			btnStyle(): Record<string, string> {
				const right = convertToUnit(this.nudgeRight) || '0'
				const bottom = convertToUnit(this.nudgeBottom) || '0'

				return {
					bottom,
					right
				}
			},

			minWidth(): string | null {
				return this.isMobile ? '36px' : null
			},

			labelClasses(): Record<string, boolean> {
				return { 'd-sr-only': this.isMobile }
			}
		},
		methods: {
			onScroll(e: MouseEvent): void {
				const target = e.currentTarget as HTMLElement | Window

				if (target === window) {
					this.showBtn = window.scrollY > this.threshold
				} else {
					this.showBtn = (target as HTMLElement).scrollTop > this.threshold
				}
			},

			scrollToTop(): void {
				if (!this.target) {
					window.scrollTo(0, 0)
					return
				}

				const target = document.getElementById(this.target) || window
				target.scrollTo(0, 0)
			}
		}
	})
</script>

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
			@click="scrollToTop"
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

<style lang="scss" scoped>
	.vd-back-to-top-btn {
		z-index: 999;
		opacity: 1;
	}
	.v-btn--variant-outlined {
		background: white;
	}
</style>
