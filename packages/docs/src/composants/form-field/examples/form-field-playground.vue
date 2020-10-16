<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="field.dynamic"
				label="Champ dynamique"
				class="mt-0"
				hide-details
				clearable
			/>

			<VSelect
				v-model="field.type"
				:items="fieldTypes"
				label="Type du champ"
				class="mt-8"
				hide-details
				clearable
				outlined
				@change="setFieldValue"
			/>

			<VTextField
				v-model="field.title"
				label="Titre du champ"
				class="mt-8"
				hide-details
				clearable
				outlined
			/>

			<VExpandTransition mode="out-int">
				<VTextField
					v-if="field.title"
					v-model="field.tooltip"
					label="Texte d'aide"
					class="mt-8"
					hide-details
					clearable
					outlined
				/>
			</VExpandTransition>

			<VTextField
				v-model.number="field.description"
				label="Description du champ"
				class="mt-8"
				hide-details
				clearable
				outlined
			/>

			<VExpandTransition mode="out-int">
				<VTextField
					v-if="field.type === 'number'"
					v-model="field.fieldOptions.mask"
					label="Masque du champ"
					class="mt-8"
					hide-details
					clearable
					outlined
				/>
			</VExpandTransition>

			<VExpandTransition mode="out-int">
				<div v-if="field.type === 'select'">
					<VSelect
						v-model="field.fieldOptions.type"
						:items="selectFieldTypes"
						label="Sous-type"
						class="mt-8"
						hide-details
						outlined
					/>

					<VSwitch
						v-model="field.multiple"
						label="Multiple"
						class="mt-8"
						hide-details
					/>

					<VSwitch
						v-model="otherSelected"
						label="Champ autre"
						class="mt-8"
						hide-details
					/>

					<VExpandTransition mode="out-int">
						<div v-if="otherSelected">
							<VSelect
								v-model.number="field.other.selectedChoice"
								:items="otherFieldItems"
								label="Valeur correspondante"
								class="mt-8"
								hide-details
								clearable
								outlined
							/>

							<VTextField
								v-model="field.other.label"
								label="Label du champ autre"
								class="mt-8"
								hide-details
								clearable
								outlined
							/>
						</div>
					</VExpandTransition>
				</div>
			</VExpandTransition>
		</VCol>

		<VCol
			v-if="field.type"
			cols="12"
			md="6"
		>
			<FormField v-model="field" />

			<h3 class="text-h6 font-weight-bold mt-4 mb-1">
				Structure du champ
			</h3>

			<pre
				:class="codeBlockColor"
				class="px-2 py-1"
				v-html="displayField"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class FormFieldPlayground extends Vue {
		field: Field = {
			type: 'text',
			title: '',
			tooltip: '',
			description: '',
			multiple: false,
			dynamic: false,
			items: [
				{
					text: 'S',
					value: 0
				},
				{
					text: 'M',
					value: 1
				},
				{
					text: 'L',
					value: 2
				}
			],
			value: null,
			other: {
				selectedChoice: 0,
				label: 'Champ autre'
			},
			fieldOptions: {
				label: 'Champ à remplir',
				outlined: true,
				type: null,
				mask: '##',
				from: {
					outlined: true,
					textField: {
						label: 'Date de début'
					}
				},
				to: {
					outlined: true,
					textField: {
						label: 'Date de fin'
					}
				}
			}
		};

		otherSelected = false;

		get displayField(): string {
			const field: Field = {
				...this.field,
				fieldOptions: {
					...this.field.fieldOptions
				}
			};

			if (field.type !== 'select') {
				delete field.multiple;
				delete field.items;
				delete field.other;
				delete field.fieldOptions?.type;
			}

			if (field.type !== 'period') {
				delete field.fieldOptions?.to;
				delete field.fieldOptions?.from;
			}

			if (field.type !== 'number') {
				delete field.fieldOptions?.mask;
			}

			return JSON.stringify(field, null, '\t');
		};

		fieldTypes = [
			{
				text: 'Texte',
				value: 'text'
			},
			{
				text: 'Zone de texte',
				value: 'textarea'
			},
			{
				text: 'Nombre',
				value: 'number'
			},
			{
				text: 'Date',
				value: 'date'
			},
			{
				text: 'Période',
				value: 'period'
			},
			{
				text: 'Select',
				value: 'select'
			}
		];

		selectFieldTypes = [
			{
				text: 'Aucun',
				value: null
			},
			{
				text: 'Slider',
				value: 'choiceSlider'
			},
			{
				text: 'Bouton',
				value: 'choiceButton'
			}
		];

		otherFieldItems = [
			{
				text: 'S',
				value: 0
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

		get codeBlockColor(): string {
			return this.$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4';
		}

		setFieldValue(): void {
			let value = null;

			if (this.field.type === 'select') {
				value = {
					value: null,
					other: null
				};
			}

			if (this.field.type === 'period') {
				value = {
					from: null,
					to: null
				};
			}

			this.field.value = value;
		}
	}
</script>
