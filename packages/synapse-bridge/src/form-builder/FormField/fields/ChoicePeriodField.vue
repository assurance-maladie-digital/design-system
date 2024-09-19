<script lang="ts">
import { defineComponent } from 'vue'

import PeriodField from '@/patterns/PeriodField'

import FieldComponent from '../mixins/fieldComponent'
import { type PeriodValue } from '../types';

export default defineComponent({
	components: {
		PeriodField,
	},
	emits: ['update:modelValue'],
	mixins: [FieldComponent],
})
</script>

<template>
	<PeriodField
		v-bind="field.fieldOptions"
		:model-value="(field.value as PeriodValue)"
		:vuetify-options="field.fieldOptions"
		outlined
		@update:modelValue="emitChangeEvent"
	/>
</template>
