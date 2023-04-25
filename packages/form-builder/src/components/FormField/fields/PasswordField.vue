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
				:aria-label="btnLabel"
				icon
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

	const locales = {
		hidePassword: 'Masquer le mot de passe',
		showPassword: 'Afficher le mot de passe'
	};

	const MixinsDeclaration = mixins(FieldComponent);

	@Component
	export default class PasswordField extends MixinsDeclaration {
		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		showEyeIcon = false;

		get btnLabel(): string {
			return this.showEyeIcon ? locales.hidePassword : locales.showPassword;
		}
	}
</script>
