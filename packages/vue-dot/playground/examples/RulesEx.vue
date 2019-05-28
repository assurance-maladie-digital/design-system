<template>
	<DocSection
		no-divider
		title="Rules"
	>
		<h2 class="subheading mb-3 font-weight-bold">
			Required with custom message
		</h2>

		<VTextField
			label="Required field"
			:rules="textFieldRules"
		/>

		<h2 class="subheading my-3 font-weight-bold">
			Length & required with default messages
		</h2>

		<VTextarea
			label="Required field"
			rows="1"
			:rules="textareaRules"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import defaultRequired, { required } from '../../src/rules/required';
	import length from '../../src/rules/length';

	@Component
	export default class CustomIconEx extends Vue {
		textFieldRules = [
			required({
				default: 'Field is required.'
			})
		];

		textareaRules = [
			defaultRequired,
			length(10)
		];
	}
</script>
