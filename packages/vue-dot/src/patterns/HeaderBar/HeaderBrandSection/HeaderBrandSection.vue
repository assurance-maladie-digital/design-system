<template>
	<div class="header-brand-section d-flex">
		<img
			:src="headerLogo.src"
			:alt="headerLogo.alt"
		>

		<template v-if="hasSecondaryLogoSlot || secondaryLogo">
			<svg
				:class="dividerColor"
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="64"
				viewBox="0 0 22 64"
				fill="currentColor"
			>
				<path d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z" />
			</svg>

			<slot v-if="hasSecondaryLogoSlot" />

			<img
				v-else-if="secondaryLogo"
				:src="secondaryLogo.src"
				:alt="secondaryLogo.alt"
			>
		</template>

		<div class="d-flex align-center">
			<div class="title-group d-flex flex-column primary--text">
				<h1 class="text-subtitle-1 font-weight-medium">
					{{ serviceTitle }}
				</h1>

				<h2 class="text-caption">
					{{ serviceSubTitle }}
				</h2>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { LogoInfo } from './types';
	import { headerLogoMapping, secondaryLogoMapping } from './headerLogoMapping';

	function toCamelCase(str: string): string {
		return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
	}

	const Props = Vue.extend({
		props: {
			theme: {
				type: String,
				required: true
			},
			serviceTitle: {
				type: String,
				default: undefined
			},
			serviceSubTitle: {
				type: String,
				default: undefined
			},
			hasSecondaryLogoSlot: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class HeaderBrandSection extends MixinsDeclaration {
		get headerLogo(): LogoInfo {
			const { logoAM, logoRisquePro } = headerLogoMapping;

			return this.theme === 'risque-pro' ? logoRisquePro : logoAM;
		}

		get dividerColor(): string {
			return this.theme === 'ameli-pro' ? 'secondary--text' : 'primary--text';
		}

		get secondaryLogo(): LogoInfo | undefined {
			return secondaryLogoMapping[toCamelCase(this.theme)];
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar {
		.title-group * {
			line-height: 1.45 !important;
		}

		&-brand {
			padding: 27px;

			&-responsive {
				padding: 8px;
			}
		}
	}
</style>
