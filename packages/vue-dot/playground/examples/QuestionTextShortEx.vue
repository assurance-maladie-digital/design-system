<template>
	<DocSection title="Questionnaire : réponse courte">
		<h2 class="subtitle-1 mb-2 font-weight-bold">
			Réponse courte
		</h2>

		<textarea  class="blue-grey lighten-5" style="width:100%" rows=14 v-html="question" @change="question = JSON.parse($event.target.value)"></textarea>
		<Question :value="question" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class QuestionTextshortEx extends Vue {

		question =  {
			title: 'Question 1 ?',
			type: 'textShort',
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
