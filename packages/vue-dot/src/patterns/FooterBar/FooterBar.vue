<template>
	<VFooter
		v-bind="{
			...options.footer,
			...$attrs
		}"
		min-height="40px"
		class="vd-footer-bar text-sm-center d-flex flex-column flex-sm-row align-start justify-center w-100"
	>
		<VContainer>
			<VIcon
				v-if="complexMode"
				class="go-top"
				small
				color="primary"
				@click="$vuetify.goTo(0, 0)"
			>
				{{ arrowTopIcon }}
			</VIcon>
			<VRow
				v-if="complexMode"
				no-gutters
				class="mb-2"
			>
				<VCol
					class="d-sm-flex justify-space-between"
				>
					<slot
						name="logo"
					>
						<Logo
							v-if="!hideLogo"
							class="default-logo pt-3 ml-n5"
						/>
					</slot>
					<VCol
						class="pr-4"
					>
						<slot name="socials">
							<SocialLinks
								v-if="!hideSocials"
								:links="links"
							/>
						</slot>
					</VCol>
				</VCol>
			</VRow>

			<VDivider v-if="complexMode" />

			<div
				class="mb-5 mt-5"
				no-gutters
			>
				<slot />
			</div>

			<VDivider v-if="complexMode" />

			<VRow
				class="links"
				:class="{ 'mt-2 caption': complexMode }"
				justify="center"
			>
				<RouterLink
					v-if="!hideSitemapLink"
					:to="sitemapRoute"
					class="my-3 mx-4"
				>
					{{ locales.sitemapLabel }}
				</RouterLink>

				<RouterLink
					v-if="!hideCguLink"
					:to="cguRoute"
					class="my-3 mx-4"
				>
					{{ locales.cguLabel }}
				</RouterLink>

				<RouterLink
					v-if="!hideLegalNoticeLink"
					:to="legalNoticeRoute"
					class="my-3 mx-4"
				>
					{{ locales.legalNoticeLabel }}
				</RouterLink>

				<RouterLink
					v-if="!hideA11yLink && a11yComplianceLabel"
					:to="a11yStatementRoute"
					class="my-3 mx-4"
				>
					{{ a11yComplianceLabel }}
				</RouterLink>

				<p
					v-if="version"
					class="grey--text text--darken-1 my-3 mx-4"
				>
					{{ locales.versionLabel }} {{ version }}
				</p>
			</VRow>
		</VContainer>
	</VFooter>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import SocialLinks from './SocialLinks';

	import { RawLocation } from 'vue-router';

	import { config } from './config';
	import { locales } from './locales';
	import { A11yComplianceEnum, A11Y_COMPLIANCE_ENUM_VALUES } from './A11yComplianceEnum';
	import { mdiArrowUp, mdiTwitter, mdiLinkedin } from '@mdi/js';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';

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
		// icon list
		arrowTopIcon = mdiArrowUp;

		locales = locales;

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

.vd-footer-bar ::v-deep {
	.links {
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
	.go-top {
		position: absolute;
		top: 30px; right: 30px;
		&:hover {
			color: $vd-primary;
		}
	}
}
</style>
