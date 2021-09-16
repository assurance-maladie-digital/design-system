<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar
			theme="cnam"
			responsive-menu-position="sub-header"
		>
			<template #navigation>
				<nav class="d-flex ml-7">
					<div class="ma-2">
						Nav Item 1
					</div>
					<div class="ma-2">
						Nav Item 2
					</div>
					<div class="ma-2">
						Nav Item 3
					</div>
				</nav>
			</template>
			<template #responsive-nav>
				<nav class="ml-5">
					<div class="ma-2">
						Nav Item 1
					</div>
					<div class="ma-2">
						Nav Item 2
					</div>
					<div class="ma-2">
						Nav Item 3
					</div>
				</nav>
			</template>
		</HeaderBar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class HeaderNavigationUsage extends Vue {
		defaultProps = {};

		propsHiddenByDefault = [
			'theme',
			'displaySearchBar',
			'navBar',
			'responsiveMenuPosition'
		];

		options = {
			booleans: [
				'displaySearchBar',
				'navBar'
			],
			textFields: [
			],
			selects: {
				theme: [
					'ameli.fr',
					'ameli-pro',
					'risque-pro',
					'cnam',
					'custom'
				],
				responsiveMenuPosition: [
					'header',
					'sub-header',
					'hide'
				]
			}
		};
	}
</script>
