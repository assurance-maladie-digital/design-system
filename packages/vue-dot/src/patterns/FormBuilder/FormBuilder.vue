<template>
	<div class="vd-form-builder">
		<FormLayout
			v-for="(formLayout, layoutIndex) in newLayout"
			:key="'layout-' + layoutIndex"
			:layout="formLayout"
		>
			<template #default="{field}">
				<FormField
					:value="field"
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

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		components: {
			FormLayout
		}
	})
	export default class FormBuilder extends Props {
		newLayout = {} as any;

		get form() {
			return this.value;
		}

		set form(value: any) {
			this.$emit('change', value);
		}

		magic() {
			// console.log(this.form, this.layout);

			this.newLayout = clonedeep(this.layout);
			// this.newLayout = this.layout;

			this.layout.forEach((layout: any, index: any) => {
				layout.fields.forEach((field: any, fieldIndex: any) => {
					this.newLayout[index].fields[fieldIndex] = this.form[field];
					this.newLayout[index].fields[fieldIndex].name = field;
				});
			});
		}

		created() {
			this.magic();
		}

		mounted() {
			this.magic();
		}
	}
</script>
