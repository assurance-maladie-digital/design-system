<template>
	<div
		class="vd-field-list w-100"
		:class="{ 'theme--dark': $vuetify.theme.dark }"
	>
		<h3
			v-if="listTitle"
			class="text-h6 font-weight-bold mb-2"
		>
			{{ listTitle }}
		</h3>

		<slot
			name="description"
			v-bind="description"
		>
			<p v-if="description">
				{{ description }}
			</p>
		</slot>

		<FormField
			v-for="(field, fieldName) in fields"
			:key="'field-' + fieldName"
			:field="field"
			@change="fieldUpdated($event, fieldName)"
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
		</FormField>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import FormField from '../FormField';
	import { Field } from '../FormField/types';

	import { Fields } from './types';

	const Props = Vue.extend({
		props: {
			listTitle: {
				type: String,
				default: undefined
			},
			description: {
				type: String,
				default: undefined
			},
			fields: {
				type: Object as PropType<Fields>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * FormFieldList is a component that
	 * displays a group of fields
	 */
	@Component({
		components: {
			FormField
		},
		model: {
			prop: 'fields',
			event: 'change'
		}
	})
	export default class FormFieldList extends MixinsDeclaration {
		/**
		 * When a field is updated, emit a
		 * change event with updated fields
		 * Also emit 'refresh' event if the field is dynamic
		 *
		 * @param {Field} field The updated field with new value
		 * @param {string} fieldName The name of the field
		 * @returns {void}
		 */
		fieldUpdated(field: Field, fieldName: string): void {
			const fields = { ...this.fields };
			fields[fieldName] = field;

			this.$nextTick(() => {
				this.$emit('change', fields);

				// If the field has the `dynamic` property
				if (field.dynamic) {
					// Also emit 'refresh' event
					this.$emit('refresh');
				}
			});
		}
	}
</script>
