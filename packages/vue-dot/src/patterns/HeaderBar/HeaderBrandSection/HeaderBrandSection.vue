<template>
	<VSheet
		:height="height"
		class="vd-header-brand-section d-flex"
	>
		<Logo
			:hide-signature="hideSignature"
			:risque-pro="isRisquePro"
			:size="logoSize"
		/>

		<slot>
			<svg
				v-if="showDivider"
				:width="dividerDimensions.width"
				:height="dividerDimensions.height"
				:fill="dividerColor"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 22 64"
			>
				<path d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z" />
			</svg>

			<img
				v-if="secondaryLogo"
				:src="secondaryLogo.src"
				:alt="secondaryLogo.alt"
			>

			<div
				v-else-if="serviceTitle || serviceSubTitle"
				class="d-flex justify-center flex-column primary--text"
			>
				<h1
					v-if="serviceTitle"
					class="vd-header-title text-caption text-md-subtitle-1 font-weight-medium"
				>
					{{ serviceTitle }}
				</h1>

				<h2
					v-if="showServiceSubTitle"
					class="vd-header-title text-caption"
				>
					{{ serviceSubTitle }}
				</h2>
			</div>
		</slot>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	import { Dimensions } from '../../../types';
	import { LogoSizeEnum } from '../../../elements/Logo/LogoSizeEnum';

	import { ThemeEnum } from '../ThemeEnum';

	import { LogoInfo } from './types';
	import { secondaryLogoMapping } from './secondaryLogoMapping';
	import { dividerDimensionsMapping } from './dividerDimensionsMapping';

	const Props = Vue.extend({
		props: {
			theme: {
				type: String as PropType<ThemeEnum>,
				required: true
			},
			serviceTitle: {
				type: String,
				default: undefined
			},
			serviceSubTitle: {
				type: String,
				default: undefined
			},
			isMobile: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class HeaderBrandSection extends MixinsDeclaration {
		get height(): string {
			if (this.isMobile && this.hasSecondaryLogo) {
				return '32px';
			}

			return this.isMobile ? '40px' : '64px';
		}

		get isRisquePro(): boolean {
			return this.theme === ThemeEnum.RISQUE_PRO;
		}

		get hideSignature(): boolean {
			return Boolean(this.$slots.default);
		}

		get secondaryLogo(): LogoInfo | undefined {
			return secondaryLogoMapping[this.theme];
		}

		get hasSecondaryLogo(): boolean {
			return Boolean(this.$slots.default || this.secondaryLogo);
		}

		get showDivider(): boolean {
			return Boolean(this.hasSecondaryLogo || this.serviceTitle);
		}

		get showServiceSubTitle(): boolean {
			return Boolean(this.serviceTitle && this.serviceSubTitle && !this.isMobile);
		}

		get dividerColor(): string {
			const cnamTheme = this.theme === ThemeEnum.CNAM;
			const ameliProTheme = this.theme === ThemeEnum.AMELI_PRO;

			return cnamTheme || ameliProTheme ? tokens.colors.secondary : tokens.colors.primary;
		}

		get dividerDimensions(): Dimensions {
			const { xSmall, small, normal } = dividerDimensionsMapping;

			if (this.isMobile && this.hasSecondaryLogo) {
				return xSmall;
			}

			if (this.isMobile) {
				return small;
			}

			return normal;
		}

		get logoSize(): LogoSizeEnum {
			if (this.isMobile && this.hasSecondaryLogo) {
				return LogoSizeEnum.X_SMALL;
			}

			if (this.isMobile) {
				return LogoSizeEnum.SMALL;
			}

			return LogoSizeEnum.NORMAL;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-brand-section {
		.vd-header-title {
			line-height: 1.45 !important;
		}

		img,
		::v-deep img {
			width: auto;
			height: 100%;
		}
	}
</style>
