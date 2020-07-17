<template>
	<VLayout
		column
		class="vd-form-field mb-1"
	>
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

				<span>{{ field.tooltip }}</span>
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
			:is="getFieldType()"
			:field="field"
			@change="$emit('change', $event)"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Field } from './types';

	import { FieldMap } from './mixins/fieldMap';

	import { mdiInformationOutline } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/** v-model value */
			field: {
				type: Object as PropType<Field>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props, FieldMap);

	/**
	 * FormField is a component used to display a field
	 * with a description and/or a tooltip
	 */
	@Component({
		model: {
			prop: 'field',
			event: 'change'
		}
	})
	export default class FormField extends MixinsDeclaration {
		informationIcon = mdiInformationOutline;

		/**
		 * Get the field type from fieldOptions or default type
		 *
		 * @returns {string} The field type
		 */
		getFieldType(): string {
			return this.getField(this.field.type);
		}

		/**
		 * Color of the description text (changes in light/dark mode)
		 *
		 * @returns {string} The color class
		 */
		get descriptionColor(): string {
			let color = 'grey--text ';

			// Only the modifier changes
			color += this.$vuetify.theme.dark ? 'text--lighten-1' : 'text--darken-1';

			return color;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-form-field + .vd-form-field {
		margin-top: 12px;
	}
</style>
