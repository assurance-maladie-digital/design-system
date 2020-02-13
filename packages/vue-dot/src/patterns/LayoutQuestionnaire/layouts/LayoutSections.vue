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
			<LayoutSection
				:key="`layout-section-${sectionId}`"
				:section="section"
			/>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { Sections } from '../types';

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
	export default class LayoutSections extends Props {
		/**
		 * Get the index of the section
		 *
		 * @param {string} sectionId The section id
		 * @returns {number} The index of the section
		 */
		indexOfSection(sectionId: string): number {
			return Object.keys(this.sections).indexOf(sectionId);
		}
	}
</script>
