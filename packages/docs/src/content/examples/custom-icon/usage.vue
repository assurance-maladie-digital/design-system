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

	@Component({
		inheritAttrs: false
	})
	export default class CustomIconUsage extends Vue {
		defaultProps = {
			icon: 'digital',
			xLarge: true
		};

		options = {
			selects: {
				color: [
					'#0c419a'
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
