<template>
	<div class="vd-form-builder">
		<FormLayout
			v-for="(formLayout, layoutIndex) in newLayout"
			:key="'layout-' + layoutIndex"
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
	import Component from 'vue-class-component';

	import clonedeep from 'lodash.clonedeep';

	import FormLayout from '../FormLayout';

	const Props = Vue.extend({
		props: {
			value: {
				type: [Array, Object],
				required: true
			},
			layout: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component<FormBuilder>({
		model: {
			prop: 'value',
			event: 'change'
		},
		components: {
			FormLayout
		},
		watch: {
			layout: {
				handler() {
					this.computeLayout();
				},
				immediate: true
			}
		}
	})
	export default class FormBuilder extends Props {
		newLayout = {} as any;

		formUpdated(field: any) {
			const form = clonedeep(this.value);

			form[field.name].value = field.value;

			this.$emit('change', form);
		}

		computeLayout() {
			this.newLayout = clonedeep(this.layout);

			this.layout.forEach((layout: any, index: any) => {
				layout.fields.forEach((field: any, fieldIndex: any) => {
					this.newLayout[index].fields[fieldIndex] = {
						...this.value[field]
					};

					this.newLayout[index].fields[fieldIndex].name = field;
				});
			});
		}
	}
</script>
