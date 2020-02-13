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
					<LayoutSections
						v-model="questionnaire.sections"
						@change="getSectionsValues"
						@refresh="sectionsRefresh"
					/>
				</VExpansionPanelContent>
			</VExpansionPanel>
		</VExpansionPanels>

		<VBtn
			class="mt-5"
			color="accent"
			@click="getSectionsValues(questionnaire.sections)"
		>
			Get sections values
		</VBtn>

		<pre
			v-if="sectionsValues"
			class="mt-4"
			:class="[
				$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
			]"
			v-html="sectionsValues"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { questionnaire } from '../../src/patterns/LayoutQuestionnaire/tests/data/questionnaire';

	import { getSectionsValues } from '../../src/functions/getSectionsValues';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class LayoutQuestionnaireEx extends Vue {
		notify!: (obj: object) => void;

		questionnaire = questionnaire;
		sectionsValues: FormValues | null = null;

		sectionsRefresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé'
			});
		}

		getSectionsValues(sections) {
			this.sectionsValues = getSectionsValues(sections);
		}
	}
</script>
