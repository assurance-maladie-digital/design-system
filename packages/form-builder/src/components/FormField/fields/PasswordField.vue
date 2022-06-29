<template>
	<VTextField
		v-bind="field.fieldOptions"
		:value="field.value"
		:append-icon="showEyeIcon ? eyeIcon : eyeOffIcon"
		:type="showEyeIcon ? 'text' : 'password'"
		class="vd-form-input"
		@click:append="showEyeIcon = !showEyeIcon"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { mdiEye, mdiEyeOff } from '@mdi/js';

	const MixinsDeclaration = mixins(FieldComponent);

	@Component
	export default class PasswordField extends MixinsDeclaration {
		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		showEyeIcon = false;
	}
</script>
