<template>
	<DocSection title="Questionnaire : réponse courte">
		<h2 class="subtitle-1 mb-2 font-weight-bold">
			plusieur réponse courte simple dans un formulaire
		</h2>
		<textarea
			class="blue-grey lighten-5"
			style="width:100%"
			rows="14"
			@change="form = JSON.parse($event.target.value)"
			v-html="form"
		/>

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
	export default class QuestionTextshortEx extends Vue {

		formLayout = [
			{
				type: 'question',
				fields: ['q1']
			},
			{
				type: 'question',
				fields: ['q2']
			}
		];

		form =  {
			q1: {
				title: 'Question 1 ?',
				type: 'string',
				value: '',
				description: 'information supplémentaire',
				tooltip: 'tooltip info',
				label: 'label',
				placeholder: 'placeholder',
				hint: 'hint',
				persistentHint: true,
				outlined: true
			},
			q2: {
				title: 'Question 2 ?',
				type: 'string',
				value: '',
				description: 'information supplémentaire',
				tooltip: 'tooltip info',
				label: 'label',
				placeholder: 'placeholder',
				hint: 'hint',
				persistentHint: true,
				outlined: true
			}
		};

	}
</script>

<style scoped>

</style>
