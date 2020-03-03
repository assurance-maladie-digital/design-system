<template>
	<VLayout
		column
	>
		<template v-for="(section, sectionId) in sectionGroup">
			<VDivider
				v-if="Object.keys(sectionGroup).indexOf(sectionId) > 0"
				:key="`divider-${sectionId}`"
				class="vd-section-separator"
			/>
			<FormSection
				:key="`section-${sectionId}`"
				class="ma-5"
				:title="section.title"
				:form="section.questions"
				default-layout="question"
				@change="emitSectionGroupUpdated($event, sectionId)"
				@refresh="$emit('refresh')"
			/>
		</template>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { FormSectionGroupCore } from './mixins/formSectionGroupCore';

	const MixinsDeclaration = mixins(FormSectionGroupCore);

	/**
	 * FormSectionGroup is a component that displays a list of FormSection
	 */
	@Component
	export default class FormSectionGroup extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-section-separator {
		border-width: medium;
	}
</style>
