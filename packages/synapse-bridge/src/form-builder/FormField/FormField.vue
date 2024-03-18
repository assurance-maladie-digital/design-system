<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { Field } from './types';

import { FieldMap } from './mixins/fieldMap';

import { mdiInformationOutline } from '@mdi/js';

export default defineComponent({
	mixins: [FieldMap],
	props: {
		field: {
			type: Object as PropType<Field>,
			required: true
		}
	},
	emits: ['change'],
	data() {
		return {
			informationIcon: mdiInformationOutline
		}
	},
	computed: {
		fieldComponent(): string {
			let fieldType = this.field.type;

			// Handle subtypes that are not in type 'select'
			if (fieldType !== 'select') {
				const fieldOptionsType = this.field.fieldOptions?.type as string || undefined;
				fieldType = fieldOptionsType || fieldType;
			}

			return this.getField(fieldType);
		},

		isDefinedField(): boolean {
			return this.fieldExists(this.field.type);
		}
	},
	methods: {
		emitChangeEvent(value: Field): void {
			this.$emit('change', value);
		}
	}
});
</script>

<template>
	<div class="vd-form-field">
		<h4
			v-if="field.title"
			class="text-body-1"
			:class="{ 'mb-2': !field.tooltip }"
		>
			<span v-html="field.title" />

			<VTooltip
				v-if="field.tooltip"
				location="end"
			>
				<template #activator="{ on }">
					<VBtn
						icon
						class="ml-1"
					>
						<VIcon size="20">
							{{ informationIcon }}
						</VIcon>
					</VBtn>
				</template>

				<span
					class="vd-form-field-tooltip-text"
					v-text="field.tooltip"
				/>
			</VTooltip>
		</h4>

		<p
			v-if="field.description"
			class="text-body-2 grey--text"
		>
			{{ field.description }}
		</p>

		<component
			:is="fieldComponent"
			v-if="isDefinedField"
			:field="field"
			@change="emitChangeEvent"
		/>

		<slot
			v-else
			:name="field.type"
			v-bind="{
				field,
				emitChangeEvent
			}"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.vd-form-field + .vd-form-field {
		margin-top: 12px;
	}

	.vd-form-field-tooltip-text {
		white-space: pre-wrap;
	}
</style>
