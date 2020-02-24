<template>
	<div
		v-if="computedLayout"
		class="vd-form-section"
	>
		<h3
			v-if="title"
			class="title font-weight-bold mb-7"
		>
			{{ title }}
		</h3>
		<FormLayout
			v-for="(formLayout, index) in computedLayout"
			:key="'layout-' + index"
			:layout="formLayout"
		>
			<template #default="{ field }">
				<FormField
					:value="field"
					@change="sectionUpdated"
				/>
			</template>
		</FormLayout>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { FormSectionCore } from './mixins/formSectionCore';

	import FormLayout from '../FormLayout';
	import FormField from '../FormField';

	const MixinsDeclaration = mixins(FormSectionCore);

	/**
	 * FormSection is a component that displays a fieldGroup
	 * from a JSON object
	 */
	@Component({
		components: {
			FormLayout,
			FormField
		}
	})
	export default class FormSection extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-form-section {
		width: 100%;
	}
</style>
