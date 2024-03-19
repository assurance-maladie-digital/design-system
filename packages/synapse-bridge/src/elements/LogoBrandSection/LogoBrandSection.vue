<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { dividerDimensionsMapping } from "./dividerDimensionsMapping";
import { locales } from "./locales";
import { LogoSizeEnum } from "@/elements/Logo/LogoSizeEnum";
import { secondaryLogoMapping } from "./secondaryLogoMapping";
import { ThemeEnum } from "@/constants/enums/ThemeEnum";
import { tokens } from "@cnamts/design-tokens";
import Logo from "../Logo";

import type { Dimensions, Next } from "@/types";
import type { LogoInfo, Service } from "./types";
import type { PropType } from "vue";

export default defineComponent({
	components: {
		Logo,
	},
	props: {
		theme: {
			type: String as PropType<ThemeEnum>,
			default: ThemeEnum.DEFAULT,
		},
		serviceTitle: {
			type: String,
			default: undefined,
		},
		serviceSubTitle: {
			type: String,
			default: undefined,
		},
		mobileVersion: {
			type: Boolean,
			default: false,
		},
		reduceLogo: {
			type: Boolean,
			default: false,
		},
		homeLink: {
			type: [String, Boolean, Object] as PropType<Next>,
			default: "/",
		},
		homeHref: {
			type: String,
			default: undefined,
		},
		homeArialabel: {
			type: String,
			default: undefined
		}
	},
	data() {
		return {
			locales,
		};
	},
	computed: {
		service(): Service {
			if (this.theme === ThemeEnum.COMPTE_ENTREPRISE) {
				const { title, subTitle } = locales.compteEntreprise;

				return {
					title,
					subTitle
				};
			}

			return {
				title: this.serviceTitle || "",
				subTitle: this.serviceSubTitle || "",
			};
		},

		mobileWithSecondaryLogo(): boolean {
			return this.mobileVersion && this.hasSecondaryLogo;
		},

		height(): string {
			if (this.mobileWithSecondaryLogo) {
				return '32px';
			}

			return this.mobileVersion ? '40px' : '64px';
		},

		isRisquePro(): boolean {
			return !this.reduceLogo && this.theme === ThemeEnum.RISQUE_PRO;
		},

		isCompteEntreprise(): boolean {
			return this.theme === ThemeEnum.COMPTE_ENTREPRISE;
		},

		isCompteAmeliMobile(): boolean {
			return this.theme === ThemeEnum.COMPTE_AMELI && this.mobileVersion;
		},

		hideSignature(): boolean {
			return (this.reduceLogo || this.isCompteEntreprise || this.isCompteAmeliMobile);
		},

		secondaryLogo(): LogoInfo | undefined {
			return secondaryLogoMapping[this.theme];
		},

		hasSecondaryLogo(): boolean {
			return Boolean(this.secondaryLogo);
		},

		hasSecondaryLogoLink(): boolean {
			return this.theme === ThemeEnum.AMELI_PRO || this.theme === ThemeEnum.AMELI;
		},

		isNuxt(): boolean {
			return !!getCurrentInstance()?.appContext.config.globalProperties.$nuxt;
		},

		logoContainerComponent(): string {
			if (this.homeHref) {
				return "a";
			}

			if (!this.homeLink) {
				return "div";
			}

			return this.isNuxt ? "nuxt-link" : "router-link";
		},

		secondaryLogoCtnComponent(): string {
			return this.hasSecondaryLogoLink ? this.logoContainerComponent : "div";
		},

		secondaryLogoLabel(): string | null {
			return (this.hasSecondaryLogoLink && this.secondaryLogo) ? `${locales.homeLinkPrefix} ${this.secondaryLogo.alt}` : null;
		},

		avatar(): boolean {
			return this.reduceLogo ? this.hasSecondaryLogo : false;
		},

		hasBrandSlot() {
			return Boolean(
				this.$slots["brand-content"] &&
				(this.$slots["brand-content"]()[0] as any)?.children?.length > 0
			);
		},

		showBrandContent(): boolean {
			return Boolean(
				this.service.title ||
				this.service.subTitle ||
				this.hasBrandSlot ||
				this.hasSecondaryLogo
			);
		},

		showDivider(): boolean {
			if (this.reduceLogo) {
				return false;
			}

			return this.showBrandContent;
		},

		showServiceSubTitle(): boolean {
			return Boolean(
				this.service.title &&
				this.service.subTitle &&
				!this.mobileVersion
			);
		},

		dividerColor(): string {
			switch (this.theme) {
				case ThemeEnum.CNAM:
				case ThemeEnum.AMELI_PRO:
					return tokens.colors.secondary;
				case ThemeEnum.COMPTE_ENTREPRISE:
					return tokens.colors.brick.base;
				default:
					return tokens.colors.primary;
			}
		},

		dividerDimensions(): Dimensions {
			if (this.mobileVersion) {
				return this.hasSecondaryLogo ? dividerDimensionsMapping.xSmall : dividerDimensionsMapping.small;
			}
			return dividerDimensionsMapping.normal;
		},

		logoSize(): LogoSizeEnum {
			if (this.mobileVersion) {
				return this.hasSecondaryLogo ? LogoSizeEnum.X_SMALL : LogoSizeEnum.SMALL;
			}
			return LogoSizeEnum.NORMAL;
		},
	},
});
</script>

<template>
	<VSheet :height="height" class="vd-logo-brand-section d-flex">
		<component
			:is="logoContainerComponent"
			:aria-current-value="null"
			:to="homeLink"
			:href="homeHref"
			class="vd-home-link"
		>
			<Logo
				:hide-signature="hideSignature"
				:hide-organism="isCompteAmeliMobile"
				:risque-pro="isRisquePro"
				:aria-label="homeArialabel"
				:avatar="avatar"
				:size="logoSize"
				:class="{ 'mr-2': avatar }"
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
				class="vd-divider"
			>
				<path
					d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z"
				/>
			</svg>

			<component
				:is="secondaryLogoCtnComponent"
				v-if="secondaryLogo"
				:aria-current-value="null"
				:aria-label="secondaryLogoLabel"
				:to="secondaryLogoCtnComponent !== 'div' ? homeLink : undefined"
				:href="secondaryLogoCtnComponent !== 'div' ? homeHref : undefined"
				class="vd-home-link"
			>
				<img :src="secondaryLogo.src" :alt="secondaryLogo.alt" />
			</component>

			<div
				v-else-if="showBrandContent"
				class="vd-title-container d-flex justify-center flex-column text-primary"
			>
				<slot name="brand-content">
					<h1
						v-if="service.title"
						:class="{
							'vd-compte-entreprise-title': isCompteEntreprise,
						}"
						class="vd-title text-caption text-md-subtitle-1 font-weight-medium"
					>
						<template v-if="typeof service.title === 'string'">
							{{ service.title }}
						</template>

						<template v-else>
							{{ service.title.text }}
							<span>{{ service.title.highlight }}</span>
						</template>
					</h1>

					<h2
						v-if="showServiceSubTitle"
						class="vd-title text-caption"
					>
						{{ service.subTitle }}
					</h2>
				</slot>
			</div>
		</slot>
	</VSheet>
</template>

<style lang="scss" scoped>
.vd-logo-brand-section {
	.vd-title-container {
		overflow: hidden;
	}

	.vd-title {
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
	.vd-home-link {
		flex: none;
	}
}
</style>
