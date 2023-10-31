<script lang="ts">
import Vue, { defineComponent, PropType } from "vue";

import { tokens } from "@cnamts/design-tokens";

import { LogoSizeEnum } from "../../elements/Logo/LogoSizeEnum";

import { ThemeEnum } from "../../constants/enums/ThemeEnum";
import { Dimensions, Next } from "../../types";

import Logo from "../Logo";
import { LogoInfo, Service } from "./types";
import { locales } from "./locales";
import { secondaryLogoMapping } from "./secondaryLogoMapping";
import { dividerDimensionsMapping } from "./dividerDimensionsMapping";

/** Define a local interface since Nuxt isn't a dependency */
interface MaybeNuxtInstance extends Vue {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	$nuxt: any;
}

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
					subTitle,
				};
			}

			return {
				title: this.serviceTitle,
				subTitle: this.serviceSubTitle,
			};
		},

		height(): string {
			if (this.mobileVersion && this.hasSecondaryLogo) {
				return "32px";
			}

			return this.mobileVersion ? "40px" : "64px";
		},

		isRisquePro(): boolean {
			if (this.reduceLogo) {
				return false;
			}

			return this.theme === ThemeEnum.RISQUE_PRO;
		},

		isCompteEntreprise(): boolean {
			return this.theme === ThemeEnum.COMPTE_ENTREPRISE;
		},

		isCompteAmeliMobile(): boolean {
			return this.theme === ThemeEnum.COMPTE_AMELI && this.mobileVersion;
		},

		hideSignature(): boolean {
			if (
				this.reduceLogo ||
				this.isCompteEntreprise ||
				this.isCompteAmeliMobile
			) {
				return true;
			}

			return Boolean(this.$slots.default);
		},

		secondaryLogo(): LogoInfo | undefined {
			return secondaryLogoMapping[this.theme];
		},

		hasSecondaryLogo(): boolean {
			return Boolean(this.$slots.default || this.secondaryLogo);
		},

		hasSecondaryLogoLink(): boolean {
			return (
				this.theme === ThemeEnum.AMELI_PRO ||
				this.theme === ThemeEnum.AMELI
			);
		},

		isNuxt(): boolean {
			return this.$data.$nuxt as unknown as MaybeNuxtInstance !== undefined;
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
			if (this.hasSecondaryLogoLink) {
				return this.logoContainerComponent;
			}

			return "div";
		},

		secondaryLogoLabel(): string | null {
			if (this.hasSecondaryLogoLink && this.secondaryLogo) {
				return `${locales.homeLinkPrefix} ${this.secondaryLogo.alt}`;
			}

			return null;
		},

		avatar(): boolean {
			if (this.reduceLogo) {
				return this.hasSecondaryLogo;
			}

			return false;
		},

		showBrandContent(): boolean {
			return Boolean(
				this.service.title ||
					this.service.subTitle ||
					this.$slots["brand-content"] ||
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
		},

		dividerDimensions(): Dimensions {
			const { xSmall, small, normal } = dividerDimensionsMapping;

			if (this.mobileVersion && this.hasSecondaryLogo) {
				return xSmall;
			}

			if (this.mobileVersion) {
				return small;
			}

			return normal;
		},

		logoSize(): LogoSizeEnum {
			if (this.mobileVersion && this.hasSecondaryLogo) {
				return LogoSizeEnum.X_SMALL;
			}

			if (this.mobileVersion) {
				return LogoSizeEnum.SMALL;
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
			:aria-label="locales.homeLinkLabel"
			:to="homeLink"
			:href="homeHref"
			class="vd-home-link"
		>
			<Logo
				:hide-signature="hideSignature"
				:hide-organism="isCompteAmeliMobile"
				:risque-pro="isRisquePro"
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
				:to="homeLink"
				:href="homeHref"
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
