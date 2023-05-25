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
				right
			>
				<template #activator="{ on }">
					<VBtn
						icon
						class="ml-1"
						v-on="on"
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

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Field } from './types';

	import { FieldMap } from './mixins/fieldMap';

	import { mdiInformationOutline } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			field: {
				type: Object as PropType<Field>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props, FieldMap);

	@Component({
		model: {
			prop: 'field',
			event: 'change'
		}
	})
	export default class FormField extends MixinsDeclaration {
		informationIcon = mdiInformationOutline;

		get fieldComponent(): string {
			let fieldType = this.field.type;

			// Handle subtypes that are not in type 'select'
			if (fieldType !== 'select') {
				const fieldOptionsType = this.field.fieldOptions?.type as string || undefined;
				fieldType = fieldOptionsType || fieldType;
			}

			return this.getField(fieldType);
		}

		get isDefinedField(): boolean {
			return this.fieldExists(this.field.type);
		}

		emitChangeEvent(value: Field): void {
			this.$emit('change', value);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-form-field + .vd-form-field {
		margin-top: 12px;
	}

	.vd-form-field-tooltip-text {
		white-space: pre-wrap;
	}
</style>
