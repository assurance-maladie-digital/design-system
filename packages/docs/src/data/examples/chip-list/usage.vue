<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<ChipList
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
	export default class ChipListUsage extends Vue {
		items = [
			{
				text: 'AT',
				value: 'at'
			},
			{
				text: 'MP',
				value: 'mp'
			},
			{
				text: 'Autre',
				value: 'other'
			}
		];

		defaultProps = {
			items: this.items,
			overflowLimit: 4
		};

		propsHiddenByDefault = [
			'overflowLimit'
		];

		options = {
			sliders: {
				overflowLimit: {
					min: 1,
					max: 6,
					step: 1
				}
			}
		};
	}
</script>
