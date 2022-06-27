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
			<v-row
				no-gutters
				class="mb-2"
			>
				<v-col
					cols="12"
					class="d-flex justify-space-between"
				>
					<slot
						name="logo"
					>
						<Logo />
					</slot>
					<v-col
						cols="4"
						style="padding: 0"
					>
						<v-row
							no-gutters
						>
							<v-col
								cols="10"
							>
								<v-col
									cols="12"
									class="d-flex justify-end"
									style="padding: 0"
									no-gutters
								>
									<span
										class="caption"
									>
										Suivez-nous
									</span>
								</v-col>
								<v-col
									cols="12"
									class="d-flex justify-end"
									style="padding: 0; margin-top: 6px"
								>
									<VIcon class="mr-2">
										{{ linkedinIcon }}
									</VIcon>
									<VIcon class="mr-2">
										{{ facebookIcon }}
									</VIcon>
									<VIcon class="mr-2">
										{{ instagramIcon }}
									</VIcon>
									<VIcon>
										{{ googleIcon }}
									</VIcon>
								</v-col>
							</v-col>
							<v-col
								cols="2"
								class="d-flex align-center justify-end
"
							>
								<VIcon small>
									{{ arrowTopIcon }}
								</VIcon>
							</v-col>
							<v-row />
						</v-row>
					</v-col>
				</v-col>
			</v-row>

			<VDivider />

			<v-row
				class="mb-5 mt-5"
				no-gutters
			>
				<v-col
					v-for="n in centerSlotsNumber"
					:key="n"
				>
					<div
						class="m-2"
					>
						<slot
							:name="`center-slot-${n}`"
						>
							{{ n }}
						</slot>
					</div>
				</v-col>
			</v-row>

			<VDivider />

			<v-row
				class="mt-2"
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

	import { RawLocation } from 'vue-router';

	import { config } from './config';
	import { locales } from './locales';
	import { A11yComplianceEnum, A11Y_COMPLIANCE_ENUM_VALUES } from './A11yComplianceEnum';
	import { mdiArrowUp, mdiFacebook, mdiGoogle, mdiLinkedin, mdiInstagram } from '@mdi/js';

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
				default: 5
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false
	})
	export default class FooterBar extends MixinsDeclaration {
		arrowTopIcon = mdiArrowUp;

		facebookIcon = mdiFacebook;
		instagramIcon = mdiInstagram;
		linkedinIcon = mdiLinkedin;
		googleIcon = mdiGoogle;

		locales = locales;

		get a11yComplianceLabel(): string | null {
			const complianceLabel = locales[this.a11yCompliance];

			if (!complianceLabel) {
				return null;
			}

			return locales.a11yLabel(complianceLabel);
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
	}
</style>
