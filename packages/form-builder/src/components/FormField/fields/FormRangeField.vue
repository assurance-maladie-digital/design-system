<template>
	<RangeField
		v-bind="field.fieldOptions"
		:min="field.min"
		:max="field.max"
		:value="field.value"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import RangeField from '@cnamts/vue-dot/src/patterns/RangeField';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	@Component({
		components: {
			RangeField
		}
	})
	export default class FormRangeField extends MixinsDeclaration {}
</script>
