<template>
	<DocSection title="Questionnaire Layout">
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Section
		</h2>

		<VExpansionPanels
			popout
			:value="0"
		>
			<VExpansionPanel>
				<VExpansionPanelHeader>
					<h4 class="font-weight-bold title">
						{{ questionnaire.title }}
					</h4>
				</VExpansionPanelHeader>
				<VDivider />
				<VExpansionPanelContent>
					<LayoutSections :sections="questionnaire.sections" />
				</VExpansionPanelContent>
			</VExpansionPanel>
		</VExpansionPanels>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { questionnaire } from '../../src/patterns/LayoutQuestionnaire/tests/data/questionnaire';

	@Component
	export default class LayoutQuestionnaireEx extends Vue {
		questionnaire = questionnaire;
	}
</script>
