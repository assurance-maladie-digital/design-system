<script lang="ts">
import { defineComponent } from "vue";

import PeriodField from '@/patterns/PeriodField';

import { FieldComponent } from '../mixins/fieldComponent';

export default defineComponent({
	components: {
		PeriodField
	}
	emits: ['change'],
	mixins: [FieldComponent],
});
</script>

<template>
	<PeriodField
		v-bind="field.fieldOptions"
		:model-value="field.value"
		:vuetify-options="field.fieldOptions"
		outlined
		@change="emitChangeEvent"
	/>
</template>
