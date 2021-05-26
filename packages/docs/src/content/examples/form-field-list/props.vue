<template>
	<FormFieldList
		v-model="fields"
		list-title="Votre état de santé"
		description="Vos symptômes et leur date d'apparition."
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListProps extends Vue {
		fields: Fields = {
			questionStringId: {
				type: 'textarea',
				value: null,
				fieldOptions: {
					label: 'Décrivez vos symptômes',
					outlined: true
				}
			},
			questionDateId: {
				type: 'date',
				value: null,
				fieldOptions: {
					label: 'Date d\'apparition',
					outlined: true
				}
			}
		};
	}
</script>
