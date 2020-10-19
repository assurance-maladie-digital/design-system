<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model="props.listTitle"
				label="Titre du formulaire"
				hide-details
				clearable
				outlined
			/>

			<VTextField
				v-model="props.description"
				label="Description du formulaire"
				class="mt-8"
				hide-details
				clearable
				outlined
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<FormFieldList
				v-model="fields"
				v-bind="props"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Fields } from '@cnamts/form-builder/src/components/FormFieldList/types';

	@Component
	export default class FormFieldListPlayground extends Vue {
		props = {
			listTitle: null,
			description: null
		};

		fields: Fields = {
			questionStringId: {
				type: 'text',
				value: null,
				fieldOptions: {
					label: 'Numéro de Sécurité Sociale',
					outlined: true
				}
			},
			questionDateId: {
				type: 'date',
				value: null,
				fieldOptions: {
					label: 'Date de naissance',
					outlined: true
				}
			}
		}
	}
</script>
