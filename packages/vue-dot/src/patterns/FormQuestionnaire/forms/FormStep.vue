<template>
	<div>
		<template
			v-for="(section, sectionId) in sections"
		>
			<!-- don't show the divider on the first section -->
			<VDivider
				v-if="indexOfSection(sectionId) > 0"
				:key="sectionId"
			/>
			<FormSection
				:key="`layout-section-${sectionId}`"
				:section="section"
				@refresh="$emit('refresh')"
				@change="sectionChanged(sectionId, $event)"
			/>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { Sections, Section } from '../types';

	import { deepCopy } from '../../../helpers/deepCopy';

	const Props = Vue.extend({
		props: {
			/** The sections object */
			sections: {
				type: Object as PropType<Sections>,
				required: true
			}
		}
	});

	// The Layout sections for list of the sections
	@Component({
		model: {
			prop: 'sections',
			event: 'change'
		}
	})
	export default class FormStep extends Props {
		/**
		 * Get the index of the section
		 *
		 * @param {string} sectionId The section id
		 * @returns {number} The index of the section
		 */
		indexOfSection(sectionId: string): number {
			return Object.keys(this.sections).indexOf(sectionId);
		}

		/**
		 * Emit the new sections when one of the internal section change
		 *
		 * @param {string} sectionId The section id changed
		 * @param {Section} section The new section object changed
		 */
		sectionChanged(sectionId: string, section: Section) {
			let newSections = deepCopy(this.sections);

			newSections[sectionId] = deepCopy(section);

			this.$emit('change', newSections);
		}
	}
</script>
