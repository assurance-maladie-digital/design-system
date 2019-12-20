<template>
	<div
		v-if="computedLayout"
		class="vd-form-builder"
	>
		<FormLayout
			v-for="(formLayout, index) in computedLayout"
			:key="'layout-' + index"
			:layout="formLayout"
		>
			<template #default="{ field }">
				<FormField
					:value="field"
					@change="formUpdated"
				/>
			</template>
		</FormLayout>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import FormBuilderCore from './mixins/formBuilderCore';

	import FormLayout from '../FormLayout';

	const MixinsDeclaration = mixins(FormBuilderCore);

	/**
	 * FormBuilder is a component that displays a form
	 * from a JSON object
	 */
	@Component({
		components: {
			FormLayout
		}
	})
	export default class FormBuilder extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-form-builder {
		width: 100%;
	}
</style>
