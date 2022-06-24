<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<FooterBar
			v-bind="$attrs"
			v-on="$listeners"
			cgu-route="/"
			legal-notice-route="/"
			a11y-statement-route="/"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { A11yComplianceEnum } from '@cnamts/vue-dot/src/patterns/FooterBar/A11yComplianceEnum';

	@Component({
		inheritAttrs: false
	})
	export default class FooterBarUsage extends Vue {
		defaultProps = {
			a11yCompliance: A11yComplianceEnum.NON_COMPLIANT
		};

		propsHiddenByDefault = [
			'a11yCompliance'
		];

		options = {
			selects: {
				a11yCompliance: [
					A11yComplianceEnum.NON_COMPLIANT,
					A11yComplianceEnum.PARTIALLY_COMPLIANT,
					A11yComplianceEnum.FULLY_COMPLIANT
				]
			},
			booleans: [
				'hideSitemapLink',
				'hideCguLink',
				'hideLegalNoticeLink',
				'hideA11yLink'
			],
			textFields: [
				'version'
			]
		};
	}
</script>
