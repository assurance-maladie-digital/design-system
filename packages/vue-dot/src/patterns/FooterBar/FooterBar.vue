<template>
	<VFooter
		v-bind="{
			...options.footer,
			...$attrs
		}"
		min-height="40px"
		class="vd-footer-bar text-sm-center d-flex flex-column flex-sm-row align-start justify-center w-100"
	>
		<v-container>
			<VIcon
				class="go-top"
				small
				color="#0c4199"
				@click="goTop"
			>
				{{ arrowTopIcon }}
			</VIcon>
			<v-row
				v-if="complexMode"
				no-gutters
				class="mb-2"
			>
				<v-col
					class="d-sm-flex justify-space-between"
				>
					<slot
						name="logo"
					>
						<Logo
							v-if="!hideLogo"
							class="default-logo"
							:hide-organism="logoHideOrganism"
							:hide-signature="logoHideSignature"
							:risque-pro="logoRisquePro"
						/>
					</slot>
					<v-col
						class="pr-4"
					>
						<slot name="socials">
							<SocialsButtons
								v-if="!hideSocials"
								:custom-socials-list="customSocialsList"
							/>
						</slot>
					</v-col>
				</v-col>
			</v-row>

			<VDivider v-if="complexMode" />

			<v-row
				v-if="complexMode && centerSlotsNumber"
				class="mb-5 mt-5"
				no-gutters
			>
				<v-col
					v-for="n in limitedSlotsNumber"
					:key="n"
				>
					<div
						class="m-2"
					>
						<slot
							v-if="limitedSlotsNumber > 1"
							:name="`center-slot-${n}`"
						>
							{{ n }}
						</slot>
						<slot />
					</div>
				</v-col>
			</v-row>

			<VDivider v-if="complexMode && centerSlotsNumber" />

			<v-row
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
			</v-row>
		</v-container>
	</VFooter>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import SocialsButtons from './SocialsButtons';

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
			centerSlotsNumber: {
				type: Number,
				default: 1
			},
			complexMode: {
				type: Boolean,
				default: false
			},
			logoHideSignature: {
				type: Boolean,
				default: false
			},
			logoHideOrganism: {
				type: Boolean,
				default: false
			},
			logoRisquePro: {
				type: Boolean,
				default: false
			},
			hideSocials: {
				type: Boolean,
				default: false
			},
			hideLogo: {
				type: Boolean,
				default: false
			},
			customSocialsList: {
				type: Array,
				default: () => [
					{ icon: mdiLinkedin, href: 'https://www.linkedin.com/company/assurance-maladie/' },
					{ icon: mdiTwitter, href: 'https://twitter.com/Assur_Maladie' }
				]
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<FooterBar>({
		inheritAttrs: false,
		components: {
			SocialsButtons
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

		get limitedSlotsNumber(): number {
			let number = this.centerSlotsNumber;

			if (number > 5) {
				number = 5;
			}

			return number;
		}
		goTop(): void {
			window.scrollTo(0, 0);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-footer-bar ::v-deep {
		a {
			color: inherit;
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
		.follow-us-text {
			color: #0c4199;
			font-size: 11px;
			font-weight: 550;
		}
		.go-top{
			position: absolute;
			top: 30px; right: 30px;
			&:hover {
				color: #0c4199;
			}
		}
		.default-logo {
			padding: 5px 0 10px 0;
			margin-left: -25px;
		}
	}
</style>
