<template>
	<component
		:is="getFieldType()"
		v-model="field"
		class="vd-form-field"
	/>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Field } from './types';

	import { FieldMap } from './mixins/fieldMap';

	const Props = Vue.extend({
		props: {
			/** v-model value */
			value: {
				type: Object as PropType<Field>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props, FieldMap);

	/** FormField is a component used to display */
	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FormField extends MixinsDeclaration {
		/**
		 * Get the field type from fieldOptions or default type
		 *
		 * @returns {string} The field type
		 */
		getFieldType(): string {
			const fieldOptionsType = this.field.fieldOptions ? this.field.fieldOptions.type as string : undefined;

			return this.getField(fieldOptionsType || this.field.type);
		}

		get field() {
			return this.value;
		}

		set field(value: Field) {
			this.$emit('change', value);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-form-field {
		width: 100%;
	}
</style>
