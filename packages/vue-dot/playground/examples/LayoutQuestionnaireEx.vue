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
					<FormStep
						:sections="questionnaire.sections"
						@change="sectionsChanged"
						@refresh="sectionsrefresh"
					/>
				</VExpansionPanelContent>
			</VExpansionPanel>
		</VExpansionPanels>

		<pre
			v-if="sections"
			class="mt-4"
			:class="[
				$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
			]"
			v-html="sections"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { questionnaire } from '../../src/patterns/FormQuestionnaire/tests/data/questionnaire';

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
		sections: Sections = null;

		sectionsRefresh() {
			// Notify!
			this.notify({
				type: 'success',
				message: 'champ dynamic changé, rafraichissement demandé'
			});
		}

		sectionsChanged(sections) {
			this.sections = sections;
		}
	}
</script>
