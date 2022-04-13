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
				:width="btnWidth"
				:to="cookiesRoute"
				@click="active = false"
			>
				{{ locales.customizeBtnText }}
			</VBtn>

			<VBtn
				v-bind="options.rejectBtn"
				:width="btnWidth"
				@click="reject"
			>
				{{ locales.rejectBtnText }}
			</VBtn>

			<VBtn
				v-bind="options.acceptBtn"
				:width="btnWidth"
				@click="accept"
			>
				{{ locales.acceptBtnText }}
			</VBtn>
		</div>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { mdiClose } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			cookiesRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'cookies' })
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class CookieBanner extends MixinsDeclaration {
		locales = locales;

		closeIcon = mdiClose;

		active = true;

		get btnWidth(): string {
			return this.$vuetify.breakpoint.smAndDown ? '100%' : 'auto';
		}

		reject(): void {
			this.active = false;
			this.$emit('reject');
		}

		accept(): void {
			this.active = false;
			this.$emit('accept');
		}
	}
</script>

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
</style>
