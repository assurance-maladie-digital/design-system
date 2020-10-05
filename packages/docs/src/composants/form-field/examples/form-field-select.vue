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

	import { Field, FieldItem } from '@cnamts/form-builder/src/components/FormField/types';

	const defaultItems: FieldItem[] = [
		{
			text: 'S',
			value: 'S'
		},
		{
			text: 'M',
			value: 1
		},
		{
			text: 'L',
			value: 2
		}
	];

	@Component
	export default class FormFieldChoiceEx extends Vue {
		fields: Field[] = [
			{
				type: 'select',
				value: null,
				title: 'Choix simple',
				items: defaultItems,
				fieldOptions: {
					outlined: true
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix multiple',
				items: defaultItems,
				multiple: true,
				fieldOptions: {
					autoGrow: true,
					rows: 2,
					outlined: true
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix de type slide',
				items: defaultItems,
				fieldOptions: {
					outlined: true,
					type: 'choiceSlider'
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix de type bouton',
				items: defaultItems,
				fieldOptions: {
					type: 'choiceButton',
					outlined: true
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix autre',
				items: defaultItems,
				other: {
					fieldOptions: {
						placeholder: 'Autre'
					}
				},
				fieldOptions: {
					outlined: true
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix boutons autre',
				items: defaultItems,
				other: {
					fieldOptions: {
						placeholder: 'Autre'
					}
				},
				fieldOptions: {
					type: 'choiceButton',
					outlined: true
				}
			},
			{
				type: 'select',
				title: 'Question choix bouton en ligne',
				items: defaultItems,
				fieldOptions: {
					inline: true,
					type: 'choiceButton'
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix boutons avec autre choix conditionnel',
				items: [
					...defaultItems,
					{
						value: 'autre',
						text: 'Autre'
					}
				],
				other: {
					selectedChoice: 'autre'
				},
				fieldOptions: {
					type: 'choiceButton',
					outlined: true
				}
			},
			{
				type: 'select',
				value: null,
				title: 'Choix boutons multiple et seul sur certain choix',
				multiple: true,
				items: [
					...defaultItems,
					{
						text: 'Seul 1',
						value: 'alone1',
						alone: true
					},
					{
						text: 'Seul 2',
						value: 'alone2',
						alone: true
					}
				],
				fieldOptions: {
					type: 'choiceButton',
					outlined: true
				}
			}
		];
	}
</script>
