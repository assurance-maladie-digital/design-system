<template>
	<DocSection title="Form builder">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Sections
		</h2>

		<FormBuilder
			:section-group="sectionGroup"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { questionForm } from '../../src/patterns/FormSection/tests/data/questionForm';
	import { sectionGroup } from '../../src/patterns/FormSectionGroup/tests/data/sectionGroup';

	import { SectionGroup } from '../../src/patterns/FormSectionGroup/types';

	@Component
	export default class LayoutQuestionnaireEx extends Vue {
		questionForm = questionForm;
		sectionGroup: SectionGroup = sectionGroup;
	}
</script>
