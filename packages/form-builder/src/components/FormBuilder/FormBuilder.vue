<template>
	<div class="vd-form-builder w-100">
		<FormFieldList
			v-for="(section, sectionName) in form"
			:key="'section-' + sectionName"
			:list-title="section.title"
			:description="section.description"
			:fields="section.questions"
			@change="sectionUpdated($event, sectionName)"
			@refresh="$emit('refresh')"
		>
			<!--
				Pass down the scoped slots
				see https://github.com/vuejs/vue/pull/7765 for the official discussion
				and https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component/52823029#52823029
				for the source of this solution
			-->
			<template
				v-for="slot in Object.keys($scopedSlots)"
				#[slot]="scope"
			>
				<slot
					:name="slot"
					v-bind="scope"
				/>
			</template>
		</FormFieldList>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FormBuilderCore } from './mixins/formBuilderCore';

	import FormFieldList from '../FormFieldList';

	const MixinsDeclaration = mixins(FormBuilderCore);

	/**
	 * FormBuilder is a component that displays a form
	 * from a JSON object
	 */
	@Component({
		components: {
			FormFieldList
		}
	})
	export default class FormBuilder extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-field-list + .vd-field-list {
		padding-top: 46px;
		border-top: solid 1px rgba(0, 0, 0, .12);

		&.theme--dark {
			border-color: rgba(255, 255, 255, .12);
		}
	}
</style>
