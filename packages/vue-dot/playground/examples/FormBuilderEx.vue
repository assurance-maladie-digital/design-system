<template>
	<DocSection title="FormBuilder">
		<!-- editable live configuration -->
		<VRow wrap>
			<VCol>
				Liste des champs du formulaire
				<textarea
					class="blue-grey lighten-5"
					style="width:100%"
					rows="14"
					@change="form = JSON.parse($event.target.value)"
					v-html="form"
				/>
			</VCol>
			<VCol>
				disposition des champs
				<textarea
					class="blue-grey lighten-5"
					style="width:100%"
					rows="14"
					@change="formLayout = JSON.parse($event.target.value)"
					v-html="formLayout"
				/>
			</VCol>
		</VRow>

		<FormBuilder
			v-model="form"
			:layout="formLayout"
		/>

		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Configuration short text
		</h2>
		<VBtn
			v-if="!showShortTextConfig"
			@click="showShortTextConfig = true"
		>
			Voir config
		</VBtn>
		<textarea
			v-else
			class="blue-grey lighten-5"
			style="width:100%"
			cols="50"
			rows="17"
			@change="formShortText = JSON.parse($event.target.value)"
			v-html="formShortText"
		/>

		<FormBuilder
			v-model="formShortText"
			:layout="questionLayoutShortText"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FormBuilderEx extends Vue {
		showShortTextConfig = false;
		formShortText = {
			short_text_1: {
				type: 'string',
				title: 'Question',
				tooltip: 'tooltip information',
				value: null,
				metadata: {
					class: 'pt-1',
					label: 'Votre réponse',
					outlined: true,
					hint: 'Texte informatif',
					persistentHint: true
				}
			},
			short_text_2: {
				type: 'string',
				title: 'Question',
				description: 'information supplémentaire',
				tooltip: 'tooltip information',
				value: null,
				metadata: {
					label: 'Votre réponse',
					counter: false,
					outlined: true,
					clearable: true,
					prefix: '',
					suffix: '',
					placeholder: 'placeholder'
				}
			}
		};

		questionLayoutShortText = [
			{
				type: 'question',
				fields: ['short_text_1']
			},
			{
				type: 'question',
				fields: ['short_text_2']
			}
		];

		form = {
			streetNumber: {
				type: 'number',
				value: null,
				mask: '#####',
				metadata: {
					label: 'Numéro de voie'
				}
			},
			streetNumberComplement: {
				type: 'select',
				value: null,
				items: [
					'bis',
					'ter',
					'quater'
				],
				metadata: {
					label: 'Complément de voie'
				}
			},
			streetType: {
				type: 'autocomplete',
				rules: [{
					name: 'required'
				}],
				value: null,
				items: [
					'Allée',
					'Avenue',
					'Boulevard',
					'Aucun'
				],
				metadata: {
					label: 'Type de voie'
				}
			},
			streetLabel: {
				type: 'string',
				rules: [{
					name: 'required'
				}],
				value: null,
				metadata: {
					label: 'Libellé de la voie'
				}
			},
			streetComplement: {
				type: 'string',
				value: null,
				metadata: {
					label: 'Complément d\'adresse'
				}
			},
			postalCode: {
				type: 'number',
				rules: [{
					name: 'required'
				}],
				value: null,
				mask: '#####',
				metadata: {
					label: 'Code postal'
				}
			},
			city: {
				type: 'string',
				rules: [{
					name: 'required'
				}],
				value: null,
				metadata: {
					label: 'Ville'
				}
			},
			question1: {
				type: 'string',
				title: 'Question ?',
				description: 'information supplémentaire',
				tooltip: 'tooltip information',
				value: null,
				metadata: {
					label: 'label',
					placeholder: 'placeholder'
				}
			}
		};

		formLayout = [
			{
				type: 'mm',
				fields: [
					'streetNumber',
					'streetNumberComplement'
				]
			},
			{
				type: 'm',
				fields: ['streetType']
			},
			{
				type: 'm',
				fields: ['streetLabel']
			},
			{
				type: 'm',
				fields: ['streetComplement']
			},
			{
				type: 'mm',
				fields: [
					'postalCode',
					'city'
				]
			},
			{
				type: 'question',
				fields: ['question1']
			}
		];
	}
</script>
