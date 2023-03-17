<template>
	<VSheet
		:height="height"
		class="vd-header-brand-section d-flex"
	>
		<component
			:is="logoContainerComponent"
			:aria-current="false"
			:aria-label="locales.homeLinkLabel"
			:to="homeLink"
			:href="homeHref"
			class="vd-header-home-link"
		>
			<Logo
				:hide-signature="hideSignature"
				:risque-pro="isRisquePro"
				:size="logoSize"
			/>
		</component>

		<slot>
			<svg
				v-if="showDivider"
				:width="dividerDimensions.width"
				:height="dividerDimensions.height"
				:fill="dividerColor"
				role="img"
				focusable="false"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 22 64"
			>
				<path d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z" />
			</svg>

			<component
				:is="secondaryLogoCtnComponent"
				v-if="secondaryLogo"
				:aria-label="secondaryLogoLabel"
				:to="homeLink"
				:href="homeHref"
				class="vd-header-home-link"
			>
				<img
					:src="secondaryLogo.src"
					:alt="secondaryLogo.alt"
				>
			</component>

			<div
				v-else-if="service.title || service.subTitle"
				class="d-flex justify-center flex-column primary--text"
			>
				<h1
					v-if="service.title"
					:class="{ 'vd-compte-entreprise-title': isCompteEntreprise }"
					class="vd-header-title text-caption text-md-subtitle-1 font-weight-medium"
				>
					<template v-if="isCompteEntreprise">
						{{ service.title.text }}
						<span>{{ service.title.highlight }}</span>
					</template>

					<template v-else>
						{{ service.title }}
					</template>
				</h1>

				<h2
					v-if="showServiceSubTitle"
					class="vd-header-title text-caption"
				>
					{{ service.subTitle }}
				</h2>
			</div>
		</slot>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	import { Dimensions, Next } from '../../../types';
	import { LogoSizeEnum } from '../../../elements/Logo/LogoSizeEnum';

	import { ThemeEnum } from '../ThemeEnum';

	import { LogoInfo, Service } from './types';
	import { locales } from './locales';
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
			mobileVersion: {
				type: Boolean,
				default: false
			},
			homeLink: {
				type: [String, Boolean, Object] as PropType<Next>,
				default: '/'
			},
			homeHref: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class HeaderBrandSection extends MixinsDeclaration {
		locales = locales;

		get service(): Service {
			if (this.theme === ThemeEnum.COMPTE_ENTREPRISE) {
				const { title, subTitle } = locales.compteEntreprise;

				return {
					title,
					subTitle
				};
			}

			return {
				title: this.serviceTitle,
				subTitle: this.serviceSubTitle
			};
		}

		get height(): string {
			if (this.mobileVersion && this.hasSecondaryLogo) {
				return '32px';
			}

			return this.mobileVersion ? '40px' : '64px';
		}

		get isRisquePro(): boolean {
			return this.theme === ThemeEnum.RISQUE_PRO;
		}

		get isCompteEntreprise(): boolean {
			return this.theme === ThemeEnum.COMPTE_ENTREPRISE;
		}

		get hideSignature(): boolean {
			if (this.theme === ThemeEnum.COMPTE_ENTREPRISE) {
				return true;
			}

			return Boolean(this.$slots.default);
		}

		get secondaryLogo(): LogoInfo | undefined {
			return secondaryLogoMapping[this.theme];
		}

		get hasSecondaryLogo(): boolean {
			return Boolean(this.$slots.default || this.secondaryLogo);
		}

		get hasSecondaryLogoLink(): boolean {
			return this.theme === ThemeEnum.AMELI_PRO || this.theme === ThemeEnum.AMELI;
		}

		get logoContainerComponent(): string {
			if (this.homeHref) {
				return 'a';
			}

			return this.homeLink ? 'RouterLink' : 'div';
		}

		get secondaryLogoCtnComponent(): string {
			if (this.hasSecondaryLogoLink) {
				return this.logoContainerComponent;
			}

			return 'div';
		}

		get secondaryLogoLabel(): string | null {
			if (this.hasSecondaryLogoLink && this.secondaryLogo) {
				return `${locales.homeLinkPrefix} ${this.secondaryLogo.alt}`;
			}

			return null;
		}

		get showDivider(): boolean {
			return Boolean(this.hasSecondaryLogo || this.service.title);
		}

		get showServiceSubTitle(): boolean {
			return Boolean(this.service.title && this.service.subTitle && !this.mobileVersion);
		}

		get dividerColor(): string {
			switch (this.theme) {
				case ThemeEnum.CNAM:
				case ThemeEnum.AMELI_PRO: {
					return tokens.colors.secondary;
				}

				case ThemeEnum.COMPTE_ENTREPRISE: {
					return tokens.colors.brick.base;
				}

				default: {
					return tokens.colors.primary;
				}
			}
		}

		get dividerDimensions(): Dimensions {
			const { xSmall, small, normal } = dividerDimensionsMapping;

			if (this.mobileVersion && this.hasSecondaryLogo) {
				return xSmall;
			}

			if (this.mobileVersion) {
				return small;
			}

			return normal;
		}

		get logoSize(): LogoSizeEnum {
			if (this.mobileVersion && this.hasSecondaryLogo) {
				return LogoSizeEnum.X_SMALL;
			}

			if (this.mobileVersion) {
				return LogoSizeEnum.SMALL;
			}

			return LogoSizeEnum.NORMAL;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-brand-section {
		overflow: hidden;

		.vd-header-title {
			line-height: 1.45 !important;
		}

		.vd-compte-entreprise-title {
			font-weight: 700 !important;

			span {
				color: #cd545b;
			}
		}

		:deep(img) {
			width: auto;
			height: 100%;
			flex: none;
		}

		svg,
		.vd-header-home-link {
			flex: none;
		}
	}
</style>
