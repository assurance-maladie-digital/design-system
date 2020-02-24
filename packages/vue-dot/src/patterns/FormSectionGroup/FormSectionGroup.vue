<template>
	<div>
		<template v-for="(section, index) in sectionGroup">
			<VDivider
				v-if="Object.keys(sectionGroup).indexOf(index) > 0"
				:key="`divider-${index}`"
				class="vd-section-separator"
			/>
			<FormSection
				:key="`section-${index}`"
				class="ma-5"
				:title="section.title"
				:field-group="section.questions"
				default-layout="question"
			/>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { SectionGroup } from './types';

	import FormSection from '../FormSection';

	const Props = Vue.extend({
		props: {
			/** The section group object */
			sectionGroup: {
				type: Object as PropType<SectionGroup>,
				required: true
			}
		}
	});

	/**
	 * FormSectionGroup is a component that displays a list of FormSection
	 */
	@Component({
		model: {
			prop: 'sectionGroup',
			event: 'change'
		},
		components: {
			FormSection
		}
	})
	export default class FormSectionGroup extends Props {}
</script>

<style lang="scss" scoped>
	.vd-section-separator {
		border-width: medium;
	}
</style>
