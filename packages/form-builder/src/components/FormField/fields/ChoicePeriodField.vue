<template>
	<PeriodField
		v-bind="field.fieldOptions"
		:value="field.value"
		:vuetify-options="field.fieldOptions"
		outlined
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import PeriodField from '@cnamts/vue-dot/src/patterns/PeriodField';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	@Component({
		components: {
			PeriodField
		}
	})
	export default class ChoicePeriodField extends MixinsDeclaration {}
</script>
