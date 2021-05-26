<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<DataList
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	const items: DataList = [
		{
			key: 'Nom',
			value: 'Dupont'
		},
		{
			key: 'Prénom',
			value: 'Paul'
		},
		{
			key: 'Date de naissance',
			value: '24/09/1970'
		},
		{
			key: 'Nombre d’enfants',
			value: undefined
		}
	];

	@Component({
		inheritAttrs: false
	})
	export default class DataListUsage extends Vue {
		defaultProps = {
			items,
			placeholder: '…',
			itemsNumberLoading: 1
		};

		propsHiddenByDefault = [
			'placeholder',
			'itemsNumberLoading'
		];

		options = {
			booleans: [
				'loading',
				'headingLoading'
			],
			sliders: {
				itemsNumberLoading: {
					label: 'itemsNumberLoading',
					min: 1,
					max: 5,
					step: 1
				}
			},
			textFields: [
				'listTitle',
				'placeholder'
			]
		};

		tabs = [
			'row'
		];
	}
</script>
