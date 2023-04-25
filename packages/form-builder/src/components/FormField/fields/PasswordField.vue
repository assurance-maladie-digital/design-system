<template>
	<VTextField
		v-bind="field.fieldOptions"
		:value="field.value"
		:type="showEyeIcon ? 'text' : 'password'"
		class="vd-form-input"
		@change="emitChangeEvent"
	>
		<template #append>
			<VBtn
				icon
				:aria-label="showEyeIcon ? 'Hide password' : 'Show password'"
				class="mt-n2"
				@click="showEyeIcon = !showEyeIcon"
			>
				<VIcon>
					{{ showEyeIcon ? eyeIcon : eyeOffIcon }}
				</VIcon>
			</VBtn>
		</template>
	</VTextField>
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
