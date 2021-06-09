<template>
	<div
		class="vd-header"
		:class="headerBarHeight"
	>
		<div class="vd-header-container">
			<div class="d-flex align-center">
				<div class="vd-header-logo">
					<img
						v-if="header.navBar.pro"
						src="../../assets/images/ameli-pro.png"
						alt=""
					>
					<img
						v-else
						src="../../assets/images/logo.png"
						alt=""
					>
				</div>
				<slot name="company-logo">
					<div
						v-if="header.service"
						class="vd-header-title"
					>
						<VDivider
							v-bind="options.divider"
						/>
						<div class="d-flex flex-column">
							<div
								v-if="header.service.name"
								class="vd-header-title-main"
							>
								{{ header.service.name }}
							</div>
							<div
								v-if="header.service.baseLine"
								class="vd-header-title-sub"
							>
								{{ header.service.baseLine }}
							</div>
						</div>
					</div>
				</slot>
			</div>
			<div class="d-flex align-center">
				<slot name="user-bar" />
			</div>
		</div>
		<HeaderNavBar
			v-if="header.navBar"
			:nav-bar="header.navBar"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import HeaderNavBar from './HeaderNavBar';

	import { HeaderConfig } from './types';

	const Props = Vue.extend({
		components: {
			HeaderNavBar
		},
		props: {
			header: {
				type: Object as PropType<HeaderConfig>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * HeaderBar is a component that can be used as the app main header
	 * it contains the HeaderNavBar component
	 */
	@Component
	export default class HeaderBar extends MixinsDeclaration {
		locales = locales;

		get headerBarHeight() :string {
			return this.header.navBar ? 'long' : 'short';
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			width: 100vw;
			box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
						0px 2px 2px rgba(0, 0, 0, 0.14),
						0px 1px 5px rgba(0, 0, 0, 0.12);

			&-container {
				display: flex;
				height: 120px;
				justify-content: space-between;
			}

			&.short {
				height: 120px;
			}

			&.long {
				height: 160px;
			}

			&-logo {
				display: flex;
				justify-content: center;
			}

			&-title {
				display: flex;
				color: #0C419A;

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
	}
</style>
