<template>
	<div class="vd-form-field">
		<h4
			v-if="field.title"
			class="text-body-1"
			:class="{ 'mb-2': !field.tooltip }"
		>
			<span>{{ field.title }}</span>

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
					class="field-tooltip-text"
					v-text="field.tooltip"
				/>
			</VTooltip>
		</h4>

		<p
			v-if="field.description"
			:class="descriptionColor"
			class="text-body-2"
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
			let fieldType: string = this.field.type;

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

		get descriptionColor(): string {
			let color = 'grey--text ';

			// Only the modifier changes
			color += this.$vuetify.theme.dark ? 'text--lighten-1' : 'text--darken-1';

			return color;
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

	.field-tooltip-text {
		white-space: pre-wrap;
	}
</style>
