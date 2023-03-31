<template>
	<VFooter
		v-bind="{
			...options.footer,
			...$attrs
		}"
		:class="{ 'py-4 py-sm-7 px-4 px-md-14': extendedMode }"
		class="vd-footer-bar flex-column align-stretch pa-3 w-100"
	>
		<div
			v-if="extendedMode"
			class="d-flex align-center mb-6"
		>
			<div class="d-flex flex-grow-1 flex-column flex-sm-row">
				<slot name="logo">
					<Logo
						v-if="!hideLogo"
						:size="logoSize"
						class="mb-2 mb-sm-0"
					/>
				</slot>

				<VSpacer v-bind="options.spacer" />

				<slot name="social-media-links">
					<SocialMediaLinks
						v-if="!hideSocialMediaLinks"
						:links="socialMediaLinks"
						class="mr-8"
					/>
				</slot>
			</div>

			<VBtn
				v-bind="options.goTopBtn"
				:aria-label="locales.goTopBtnLabel"
				@click="scrollToTop"
			>
				<VIcon v-bind="options.goTopBtnIcon">
					{{ arrowTopIcon }}
				</VIcon>
			</VBtn>
		</div>

		<VDivider
			v-if="extendedMode"
			v-bind="options.divider"
		/>

		<slot />

		<VDivider
			v-if="extendedMode"
			v-bind="options.divider"
			class="mb-6"
		/>

		<div
			:class="{ 'py-2 py-sm-0': !extendedMode }"
			class="vd-footer-bar-links text-sm-center d-flex flex-column flex-sm-row flex-wrap align-start justify-center max-width-none mx-n3 my-n3"
		>
			<slot name="prepend" />

			<FooterLink
				v-if="!hideSitemapLink"
				:external-link="sitemapExternalLink"
				:route="sitemapRoute"
				:options="options.routerLink"
			>
				{{ locales.sitemapLabel }}
			</FooterLink>

			<FooterLink
				v-if="!hideCguLink"
				:external-link="cguExternalLink"
				:route="cguRoute"
				:options="options.routerLink"
			>
				{{ locales.cguLabel }}
			</FooterLink>

			<FooterLink
				v-if="!hideCookiesLink"
				:external-link="cookiesExternalLink"
				:route="cookiesRoute"
				:options="options.routerLink"
			>
				{{ locales.cookiesLabel }}
			</FooterLink>

			<FooterLink
				v-if="!hideLegalNoticeLink"
				:external-link="legalNoticeExternalLink"
				:route="legalNoticeRoute"
				:options="options.routerLink"
			>
				{{ locales.legalNoticeLabel }}
			</FooterLink>

			<FooterLink
				v-if="!hideA11yLink"
				:external-link="a11yStatementExternalLink"
				:route="a11yStatementRoute"
				:options="options.routerLink"
			>
				{{ a11yComplianceLabel }}
			</FooterLink>

			<p
				v-if="version"
				class="text--secondary my-3 mx-4"
			>
				{{ locales.versionLabel }} {{ version }}
			</p>

			<slot name="append" />
		</div>
	</VFooter>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { LogoSizeEnum } from '../../elements/Logo/LogoSizeEnum';

	import SocialMediaLinks from './SocialMediaLinks';
	import { SocialMediaLink } from './SocialMediaLinks/types';
	import FooterLink from './FooterLink';

	import { config } from './config';
	import { locales } from './locales';
	import { links } from './links';
	import { A11yComplianceEnum, A11Y_COMPLIANCE_ENUM_VALUES } from './A11yComplianceEnum';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';

	import { mdiArrowUp } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			a11yCompliance: {
				type: String as PropType<A11yComplianceEnum>,
				default: A11yComplianceEnum.NON_COMPLIANT,
				validator: (value: A11yComplianceEnum) => propValidator('a11y-compliance', A11Y_COMPLIANCE_ENUM_VALUES, value)
			},
			sitemapRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'sitemap' })
			},
			sitemapExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			cguRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'cgu' })
			},
			cguExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			cookiesRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'cookies' })
			},
			cookiesExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			legalNoticeRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'legalNotice' })
			},
			legalNoticeExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			a11yStatementRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'a11yStatement' })
			},
			a11yStatementExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			hideSitemapLink: {
				type: Boolean,
				default: false
			},
			hideCguLink: {
				type: Boolean,
				default: false
			},
			hideCookiesLink: {
				type: Boolean,
				default: false
			},
			hideLegalNoticeLink: {
				type: Boolean,
				default: false
			},
			hideA11yLink: {
				type: Boolean,
				default: false
			},
			version: {
				type: String,
				default: undefined
			},
			hideLogo: {
				type: Boolean,
				default: false
			},
			hideSocialMediaLinks: {
				type: Boolean,
				default: false
			},
			socialMediaLinks: {
				type: Array as PropType<SocialMediaLink[]>,
				default: () => links
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		components: {
			FooterBar,
			FooterLink,
			SocialMediaLinks
		}
	})
	export default class FooterBar extends MixinsDeclaration {
		locales = locales;

		arrowTopIcon = mdiArrowUp;

		get a11yComplianceLabel(): string | null {
			const complianceLabel = locales[this.a11yCompliance];

			if (!complianceLabel) {
				return null;
			}

			return locales.a11yLabel(complianceLabel);
		}

		get extendedMode(): boolean {
			return Boolean(this.$slots.default);
		}

		get logoSize(): LogoSizeEnum {
			return this.$vuetify.breakpoint.smAndDown ? LogoSizeEnum.SMALL : LogoSizeEnum.NORMAL;
		}

		scrollToTop(): void {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	$white: #fff;

	// Use deep selector to style user content as well
	.vd-footer-bar.theme--dark :deep() {
		background-color: $vd-grey-darken-20 !important;

		.vd-footer-bar-links a {
			color: $white !important;
		}

		p,
		.primary--text {
			color: rgba($white, .6) !important;
		}

		svg {
			fill: $white !important;
		}
	}

	.vd-footer-bar-links :deep() {
		a {
			transition: .15s;
			text-decoration: none;
			padding-top: 1px; // Add top padding to account for bottom border
			border-bottom: 1px solid transparent;

			&:hover,
			&:focus {
				border-color: currentColor;
			}
		}

		p {
			padding: 1px 0;
		}
	}
</style>
