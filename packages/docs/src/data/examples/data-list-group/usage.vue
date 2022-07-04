<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<DataListGroup
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	const items: DataListGroupItems = [
		{
			title: 'Informations patient',
			items: [
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
				}
			]
		},
		{
			title: 'Médecin traitant',
			items: [
				{
					key: 'Nom du praticien',
					value: 'Gérard Leblanc'
				},
				{
					key: 'N° RPPS',
					value: 'XXXXX'
				}
			]
		}
	];

	@Component({
		inheritAttrs: false
	})
	export default class DataListGroupUsage extends Vue {
		defaultProps = {
			items,
			itemWidth: '200px',
		};

		propsHiddenByDefault = [
			'itemWidth'
		];

		options = {
			booleans: [
				'loading'
			],
			textFields: [
				'itemWidth'
			]
		};
	}
</script>
