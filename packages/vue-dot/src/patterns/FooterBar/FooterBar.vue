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
				:aria-label="locales.goTopBtn"
				@click="$vuetify.goTo(0, 0)"
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

			<RouterLink
				v-if="!hideSitemapLink"
				v-bind="options.routerLink"
				:to="sitemapRoute"
			>
				{{ locales.sitemapLabel }}
			</RouterLink>

			<RouterLink
				v-if="!hideCguLink"
				v-bind="options.routerLink"
				:to="cguRoute"
			>
				{{ locales.cguLabel }}
			</RouterLink>

			<RouterLink
				v-if="!hideLegalNoticeLink"
				v-bind="options.routerLink"
				:to="legalNoticeRoute"
			>
				{{ locales.legalNoticeLabel }}
			</RouterLink>

			<RouterLink
				v-if="!hideA11yLink && a11yComplianceLabel"
				v-bind="options.routerLink"
				:to="a11yStatementRoute"
			>
				{{ a11yComplianceLabel }}
			</RouterLink>

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
			cguRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'cgu' })
			},
			legalNoticeRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'legalNotice' })
			},
			a11yStatementRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'a11yStatement' })
			},
			hideSitemapLink: {
				type: Boolean,
				default: false
			},
			hideCguLink: {
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
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	// Use deep selector to style user content as well
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
