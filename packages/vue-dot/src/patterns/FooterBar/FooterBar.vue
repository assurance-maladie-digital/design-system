<template>
	<VFooter
		v-bind="{
			...options.footer,
			...$attrs
		}"
		min-height="40px"
		class="vd-footer-bar text-center d-flex justify-center pa-0 w-100"
	>
		<slot name="prepend" />

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

		<slot name="append" />
	</VFooter>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { config } from './config';
	import { locales } from './locales';
	import { A11yComplianceEnum, A11Y_COMPLIANCE_ENUM_VALUES } from './A11yComplianceEnum';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			a11yCompliance: {
				type: String as PropType<A11yComplianceEnum>,
				default: A11yComplianceEnum.NON_COMPLIANT,
				validator: (value: A11yComplianceEnum) => propValidator('a11y-compliance', A11Y_COMPLIANCE_ENUM_VALUES, value)
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
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false
	})
	export default class FooterBar extends MixinsDeclaration {
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
