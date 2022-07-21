<template>
	<VFooter
		v-bind="{
			...options.footer,
			...$attrs
		}"
		:class="{ 'py-7 px-14': complexMode }"
		min-height="40px"
		class="vd-footer-bar flex-column align-stretch pa-3 w-100"
	>
		<div
			v-if="complexMode"
			class="d-flex align-center mb-6"
		>
			<slot name="logo">
				<Logo v-if="!hideLogo" />
			</slot>

			<VSpacer />

			<slot name="socials">
				<SocialLinks
					v-if="!hideSocials"
					:links="links"
					class="mr-8"
				/>
			</slot>

			<VBtn
				v-if="complexMode"
				small
				icon
				color="primary"
				@click="$vuetify.goTo(0, 0)"
			>
				<VIcon>
					{{ arrowTopIcon }}
				</VIcon>
			</VBtn>
		</div>

		<VDivider v-if="complexMode" />

		<slot />

		<VDivider
			v-if="complexMode"
			class="mb-6"
		/>

		<div class="vd-footer-bar-links text-sm-center d-flex flex-column flex-sm-row flex-wrap align-start justify-center max-width-none mx-n3 my-n4">
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
		</div>
	</VFooter>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import SocialLinks from './SocialLinks';

	import { config } from './config';
	import { locales } from './locales';
	import { A11yComplianceEnum, A11Y_COMPLIANCE_ENUM_VALUES } from './A11yComplianceEnum';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';

	import { mdiArrowUp, mdiTwitter, mdiLinkedin } from '@mdi/js';

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
			hideSocials: {
				type: Boolean,
				default: false
			},
			hideLogo: {
				type: Boolean,
				default: false
			},
			links: {
				type: Array,
				default: () => [
					{
						icon: mdiLinkedin,
						href: 'https://www.linkedin.com/company/assurance-maladie/'
					},
					{
						icon: mdiTwitter,
						href: 'https://twitter.com/Assur_Maladie'
					}
				]
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		components: {
			SocialLinks
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

		get complexMode(): boolean {
			return this.$slots.default ? true : false;
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
	}
</style>
