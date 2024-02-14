<script lang="ts">
	import { defineComponent, PropType } from 'vue'

	import { RouteRecordRaw } from 'vue-router'

	import { config } from './config'
	import { locales } from './locales'

	import { customizable } from '../../mixins/customizable'

	import { mdiClose } from '@mdi/js'

	export default defineComponent({
		mixins: [customizable(config)],
		props: {
			cookiesRoute: {
				type: [Array, Object, String] as PropType<RouteRecordRaw | string>,
				default: () => ({
					name: 'cookies'
				}),
			},
		},
		data() {
			return {
				locales: locales,
				closeIcon: mdiClose,
				active: true
			}
		},
		computed: {
			btnWidth(): string {
				return this.$vuetify.display.name === 'sm' ? '100%' : 'auto'
			},
		},
		methods: {
			reject(): void {
				this.active = false
				this.$emit('reject')
			},

			accept(): void {
				this.active = false
				this.$emit('accept')
			},
		},
	})
</script>

<template>
	<VSheet
		v-if="active"
		v-bind="options.sheet"
		:aria-label="locales.label"
		role="region"
		class="vd-cookie-banner"
	>
		<div class="d-flex align-start flex-nowrap pa-0 mb-6">
			<h2 class="text-h5 font-weight-bold">
				{{ locales.title }}
			</h2>

			<VSpacer v-bind="options.spacer" />

			<VBtn
				v-bind="options.closeBtn"
				:aria-label="locales.closeBtn"
				@click="reject"
			>
				<VIcon v-bind="options.icon">
					{{ closeIcon }}
				</VIcon>
			</VBtn>
		</div>

		<slot>
			<p>
				{{ locales.description }}
			</p>
		</slot>

		<div class="vd-cookie-banner-action-ctn d-flex align-center flex-wrap max-width-none mt-6 mb-n2 mx-n2">
			<VSpacer v-bind="options.actionsSpacer" />

			<VBtn
				v-bind="options.customizeBtn"
				data-test-id="customize"
				:width="btnWidth"
				:to="cookiesRoute"
				@click="active = false"
			>
				{{ locales.customizeBtnText }}
			</VBtn>

			<VBtn
				v-bind="options.rejectBtn"
				data-test-id="reject"
				:width="btnWidth"
				@click="reject"
			>
				{{ locales.rejectBtnText }}
			</VBtn>

			<VBtn
				v-bind="options.acceptBtn"
				data-test-id="accept"
				:width="btnWidth"
				@click="accept"
			>
				{{ locales.acceptBtnText }}
			</VBtn>
		</div>
	</VSheet>
</template>

<style lang="scss" scoped>
	.vd-cookie-banner {
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;
	}

	.vd-cookie-banner-action-ctn .v-btn {
		flex: 1 1 auto;
	}

	.v-btn--icon {
		color: rgba(0, 0, 0, 0.54);
		position: absolute;
		right: 24px;
	}
</style>
