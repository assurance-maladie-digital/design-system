<template>
	<VContainer>
		<VRow>
			<VCol
				v-for="(field, index) in fields"
				:key="index"
				cols="12"
				sm="6"
			>
				<FormField
					:field="field"
				/>
			</VCol>
		</VRow>
	</VContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldVuetifyEx extends Vue {
		fields: Field[] = [
			{
				type: 'text',
				value: null,
				fieldOptions: {
					label: 'Label du champ',
					outlined: true
				}
			},
			{
				type: 'textarea',
				value: null,
				fieldOptions: {
					label: 'Zone de texte',
					autoGrow: true,
					rows: 2,
					outlined: true
				}
			},
			{
				type: 'number',
				value: null,
				fieldOptions: {
					mask: '##',
					label: 'Nombre d\'enfants',
					outlined: true
				}
			},
			{
				type: 'password',
				value: null,
				fieldOptions: {
					label: 'Mot de passe',
					outlined: true
				}
			}
		];
	}
</script>
