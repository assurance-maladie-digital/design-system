<script lang="ts">
import { defineComponent } from "vue";

import { ChoiceComponent } from '../mixins/choiceComponent';

export default defineComponent({
	mixins: [ChoiceComponent],
});
</script>

<template>
	<VSelect
		v-bind="options"
		:model-value="choiceFieldValue"
		:items="items"
		:multiple="multiple"
		:type="undefined"
		:error-messages="errorMessages"
		class="vd-form-input"
		@change="emitChangeEvent($event)"
	/>
</template>
