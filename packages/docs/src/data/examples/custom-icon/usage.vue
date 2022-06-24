<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<CustomIcon
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component({
		inheritAttrs: false
	})
	export default class CustomIconUsage extends Vue {
		defaultProps = {
			icon: 'digital',
			color: '#000',
			xLarge: true
		};

		propsHiddenByDefault = [
			'color'
		];

		options = {
			selects: {
				color: [
					'#000',
					tokens.colors.primary,
					tokens.colors.secondary
				]
			},
			radioGroups: {
				size: [
					'small',
					'medium',
					'large',
					'xLarge'
				]
			}
		};
	}
</script>
