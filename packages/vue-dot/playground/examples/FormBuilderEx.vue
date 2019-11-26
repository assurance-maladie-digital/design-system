<template>
	<DocSection title="FormBuilder">
		<FormBuilder
			v-model="form"
			:layout="formLayout"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FormBuilderEx extends Vue {
		form = {
			streetNumber: {
				type: 'number',
				value: null,
				mask: '#####',
				label: 'Numéro de voie'
			},
			streetNumberComplement: {
				type: 'select',
				value: null,
				items: [
					'bis',
					'ter',
					'quater'
				],
				label: 'Complément de voie'
			},
			// streetType: {
			// 	type: 'autocomplete',
			// 	rules: [{
			// 		name: 'required'
			// 	}],
			// 	value: null,
			// 	items: [
			// 		'Allée',
			// 		'Avenue',
			// 		'Boulevard',
			// 		'Aucun'
			// 	],
			// 	label: 'Type de voie'
			// },
			streetLabel: {
				type: 'string',
				rules: [{
					name: 'required'
				}],
				value: null,
				label: 'Libellé de la voie'
			},
			streetComplement: {
				type: 'string',
				value: null,
				label: 'Complément d\'adresse'
			},
			postalCode: {
				type: 'number',
				rules: [{
					name: 'required'
				}],
				value: null,
				mask: '#####',
				label: 'Code postal'
			},
			city: {
				type: 'string',
				rules: [{
					name: 'required'
				}],
				value: null,
				label: 'Ville'
			}
		};

		formLayout = [
			{
				type: 'twoColumns',
				fields: [
					'streetNumber',
					'streetNumberComplement'
				]
			},
			{
				type: 'oneColumn',
				fields: [
					'streetLabel'
				]
			}
		];
	}
</script>
