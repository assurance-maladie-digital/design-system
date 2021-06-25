<template>
	<div class="d-flex flex-wrap align-center justify-center flex-grow-1">
		<TableToolbar
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
	export default class TableToolbarUsage extends Vue {
		defaultProps = {
			searchLabel: 'Rechercher',
			rowText: 'ligne',
			addBtnLabel: 'Ajouter',
			nbTotal: 2
		};

		propsHiddenByDefault = [
			'searchLabel',
			'rowText',
			'addBtnLabel',
			'nbTotal'
		];

		options = {
			booleans: [
				'showAddBtn',
				'loading'
			],
			textFields: [
				'searchLabel',
				'rowText',
				'addBtnLabel'
			],
			sliders: {
				nbTotal: {
					label: 'nbTotal',
					min: 1,
					max: 5,
					step: 1
				}
			}
		};
	}
</script>
