<template>
	<div class="d-flex">
		<img
			:src="headerLogo"
			alt="Caisse Nationale d'Assurance Maladie"
		>
		<div
			v-if="hasDaughterBrand"
			class="d-flex align-center"
		>
			<slot />
		</div>
		<div
			v-else-if="theme === 'ameli.fr' || theme === 'ameli-pro'"
			class="d-flex"
		>
			<img
				:src="dividerModel"
				alt="Caisse Nationale d'Assurance Maladie"
			>
			<img
				:src="daughterBrand"
				alt="Caisse Nationale d'Assurance Maladie"
			>
		</div>
		<div
			v-if="displayServiceSection"
			:style="`color: ${themeColor};`"
			class="d-flex align-center"
		>
			<img
				:src="dividerModel"
				alt="Caisse Nationale d'Assurance Maladie"
			>
			<div class="d-flex flex-column">
				<div class="vd-header-title-main">
					{{ serviceTitle }}
				</div>
				<div class="vd-header-title-sub">
					{{ serviceSubTitle }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { HeaderBarConfig } from '../types';

	const Props = Vue.extend({
		props: {
			hasDaughterBrand: {
				type: Boolean,
				default: false
			},
			headerConfig: {
				type: Object as PropType<HeaderBarConfig>,
				default: undefined
			},
			theme: {
				type: String,
				default: 'ameli.fr',
				validator(value: string): boolean {
					const isValid = value.match(/^(cnam|ameli.fr|ameli-pro|risque-pro|custom)$/) !== null;
					if (!isValid) {
						// eslint-disable-next-line no-console
						console.error(`Wrong value for the \`type\` prop. 
						Given: "${value}", expected "(cnam|ameli.fr|ameli-pro|risque-pro|custom)".`);
					}
					return true;
				}
			},
			isMobileScreen: {
				type: Boolean,
				default: false
			},
			themeColor: {
				type: String,
				default: '#0c419a'
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false
	})
	export default class HeaderBrandSection extends MixinsDeclaration {
		// translations
		locales = locales;

		get imageFolder(): string {
			return this.isMobileScreen ? 'mobile' : 'desktop';
		}

		get daughterBrand(): string {
			let img :string;

			if(this.theme === 'ameli-pro') {
				img = 'amelipro';
			} else if(this.theme === 'ameli.fr') {
				img = 'ameli';
			} else {
				img = 'no-image';
			}

			return require(`../../../assets/marque-fille/${this.imageFolder}/${img}.svg`);
		}

		get dividerModel(): string {
			let img :string;

			if(this.theme === 'ameli-pro') {
				img = 'amelipro';
			} else {
				img = 'bleu-am';
			}

			return require(`../../../assets/dividers/${this.imageFolder}/${img}.svg`);
		}

		get headerLogo(): string {
			let img :string;

			if(this.theme === 'risque-pro') {
				img = 'risquepro';
			} else {
				img = 'assurance-maladie';
			}

			return require(`../../../assets/logos/${this.imageFolder}/${img}.svg`);
		}

		get displayServiceSection(): boolean {
			if(this.headerConfig?.service) {
				if(!this.headerConfig.service.mobileDisplay) {
					return this.isMobileScreen ? false : true;
				}
				return true;
			}
			return false;
		}

		get displayServiceTitle(): boolean {
			if(this.headerConfig?.service?.title) {
				if(!this.headerConfig.service.title.mobileDisplay) {
					return this.isMobileScreen ? false : true;
				}
				return true;
			}
			return false;
		}

		get displayServiceSubTitle(): boolean {
			if(this.headerConfig?.service?.subTitle) {
				if(!this.headerConfig.service.subTitle.mobileDisplay) {
					return this.isMobileScreen ? false : true;
				}
				return true;
			}
			return false;
		}

		get serviceTitle(): string {
			return this.headerConfig?.service?.title?.text ? this.headerConfig.service.title.text as string : '';
		}

		get serviceSubTitle(): string {
			return this.headerConfig?.service?.subTitle?.text ? this.headerConfig.service.subTitle.text as string : '';
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header {
		&-brand {
			padding: 27px;

			&-responsive {
				padding: 8px;
			}
		}

		&-title {
			&-main {
				font-size: 16px;
				line-height: 18px;
			}

			&-sub {
				font-size: 12px;
				line-height: 14px;
			}
		}
	}
</style>
