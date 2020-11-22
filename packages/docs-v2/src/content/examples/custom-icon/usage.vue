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
	export default class Usage extends Vue {
		defaults = {
			icon: 'digital',
			color: null,
			large: false,
			medium: false,
			small: false,
			'x-large': true,
			'x-small': false
		};

		options = {
			selects: {
				color: [
					'#0c419a'
				]
			},
			radioGroups: {
				size: [
					'x-small',
					'small',
					'medium',
					'large',
					'x-large'
				]
			}
		};
	}
</script>
