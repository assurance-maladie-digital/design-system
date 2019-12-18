<template>
	<DocSection title="Questionnaire : layout question (QUE-30)">
		<h2 class="subtitle-1 mb-2 font-weight-bold">
			formulaire avec plusieurs questions
		</h2>
		<VContainer fluid>
			<VRow wrap>
				<VCol
					md="6"
					cols="12"
				>
					Liste des champs du formulaire de l'api
					<textarea
						class="blue-grey lighten-5"
						style="width:100%"
						rows="14"
						@change="form = JSON.parse($event.target.value)"
						v-html="form"
					>eslint default</textarea>
				</VCol>
				<VCol
					md="6"
					cols="12"
				>
					disposition des champs
					<textarea
						class="blue-grey lighten-5"
						style="width:100%"
						rows="14"
						@change="formLayout = JSON.parse($event.target.value)"
						v-html="formLayout"
					>eslint default</textarea>
				</VCol>
			</VRow>
		</VContainer>

		<FormBuilder
			v-model="form"
			style="width:100%"
			:layout="formLayout"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class QuestionTextshortEx extends Vue {
		get formText() {
			return JSON.stringify(this.form);
		}

		formLayout = [
			{
				type: 'question',
				fields: ['q1']
			},
			{
				type: 'question',
				fields: ['q2']
			},
			{
				type: 'm',
				fields: ['q3']
			}
		];

		form = {
			q1: {
				title: 'Question 1 ?',
				type: 'string',
				value: '',
				description: 'information supplémentaire',
				tooltip: 'tooltip info',
				metadata: {
					label: 'label1',
					placeholder: 'placeholder1',
					hint: 'hint1',
					persistentHint: true,
					outlined: true
				}
			},
			q2: {
				title: 'Question 2 ?',
				type: 'string',
				value: '',
				description: 'information supplémentaire',
				tooltip: '<p>test paragara</p><p>test</p>',
				metadata: {
					label: 'label2',
					placeholder: 'placeholder2',
					hint: 'hint2',
					persistentHint: true,
					outlined: true
				}
			},
			q3: {
				title: 'Question 3 ?',
				type: 'string',
				value: '',
				description: 'information supplémentaire',
				tooltip: '<p>test paragara</p><p>test</p>',
				metadata: {
					label: 'pas une question',
					placeholder: 'placeholder3',
					hint: 'hint3',
					persistentHint: true,
					outlined: true
				}
			}
		};
	}
</script>

<style scoped>
</style>
