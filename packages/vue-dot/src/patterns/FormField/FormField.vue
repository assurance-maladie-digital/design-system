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
		 * Get the field type from metadata or default type
		 *
		 * @returns {string} The field type
		 */
		getFieldType(): string {
			const metadataType: string | undefined = this.field.metadata?.type ?? undefined;

			return this.getField(metadataType || this.field.type);
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
		width: 328px;

		+ .vd-form-field {
			margin-top: 12px;
		}
	}
</style>
