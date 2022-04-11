<template>
	<VSheet
		v-bind="options.sheet"
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

		<p class="mb-6">
			{{ locales.description }}
		</p>

		<div class="vd-dialog-box-actions-ctn d-flex align-center flex-wrap max-width-none ma-n2">
			<RouterLink
				:to="cookiesRoute"
				class="ma-2"
			>
				{{ locales.moreInformationLabel }}
			</RouterLink>

			<VSpacer v-bind="options.actionsSpacer" />

			<VBtn
				v-bind="options.customizeBtn"
				:to="cookiesRoute"
			>
				{{ locales.customizeBtnText }}
			</VBtn>

			<VBtn
				v-bind="options.rejectBtn"
				@click="reject"
			>
				{{ locales.rejectBtnText }}
			</VBtn>

			<VBtn
				v-bind="options.acceptBtn"
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

		reject(): void {
			this.$emit('reject');
		}

		accept(): void {
			this.$emit('accept');
		}
	}
</script>

<style lang="scss" scoped>
	.vd-cookie-banner {
		position: absolute;
		bottom: 32px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
