<template>
	<DocSection title="Questionnaire : réponse courte">
		<h2 class="subtitle-1 mb-2 font-weight-bold">
			Réponse courte
		</h2>

		<textarea  class="blue-grey lighten-5" style="width:100%" rows=14 v-html="question" @change="question = JSON.parse($event.target.value)"></textarea>
		<QuestionField :value="question" />

		<h2>avec le formbuilder </h2>
		<textarea  class="blue-grey lighten-5" style="width:100%" rows=14 v-html="form" @change="form = JSON.parse($event.target.value)"></textarea>

		<FormBuilder v-model="form" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class QuestionTextshortEx extends Vue {

		form =  {
			q1: {
				title: 'Question 1 ?',
				type: 'short_text',
				value: '',
				description: 'information supplémentaire',
				tooltip: 'tooltip info',
				metadata: {
					label: 'label',
					placeholder: 'placeholder',
					hint: 'hint',
					persistentHint: true,
					outlined: true
				}
			},
			q2: {
				title: 'Question 2 ?',
				type: 'short_text',
				value: '',
				description: 'information supplémentaire',
				tooltip: 'tooltip info',
				metadata: {
					label: 'label',
					placeholder: 'placeholder',
					hint: 'hint',
					persistentHint: true,
					outlined: true
				}
			}
		};

		question =  {
			title: 'Question 1 ?',
			type: 'short_text',
			value: '',
			description: 'information supplémentaire',
			tooltip: 'tooltip info',
			metadata: {
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
