<template>
	<PasswordField
		v-bind="field.fieldOptions"
		:value="field.value"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import PasswordField from '@cnamts/vue-dot/src/patterns/PasswordField';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	@Component({
		components: {
			PasswordField
		}
	})
	export default class FormPasswordField extends MixinsDeclaration {}
</script>
