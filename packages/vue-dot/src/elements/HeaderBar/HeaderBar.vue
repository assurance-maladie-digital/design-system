<template>
	<div
		class="vd-header"
		:class="headerBarHeight"
	>
		<dir class="vd-header-container">
			<div>
				Header LOGO
			</div>
			<div>
				SLOT
			</div>
		</dir>
		<HeaderNavBar
			v-if="navBar"
			:nav-bar="navBar"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import HeaderNavBar from './HeaderNavBar';

	import { NavBar } from './types';

	const Props = Vue.extend({
		components: {
			HeaderNavBar
		},
		props: {
			navBar: {
				type: Object as PropType<NavBar>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * HeaderBar is a component that can be used as the app main header
	 * it contains the HeaderNavBar component
	 */
	@Component
	export default class HeaderBar extends MixinsDeclaration {
		get headerBarHeight() :string {
			return this.navBar ? 'long' : 'short';
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			width: 100%;
			box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

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
		}
	}
</style>
