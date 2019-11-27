<template>
	<VTextField
		v-model="field.value"
		:append-icon="showEyeIcon ? eyeIcon : eyeOffIcon"
		:type="showEyeIcon ? 'text' : 'password'"
		:label="field.label"
		@click:append="showEyeIcon = !showEyeIcon"
		@change="emitChangeEvent(field)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldProp from '../mixins/fieldProp';

	import { mdiEye, mdiEyeOff } from '@mdi/js';

	/**
	 * Form field to enter a password.
	 * Adds a button to show/hide the password
	 */
	@Component
	export default class PasswordField extends FieldProp {
		// Icons
		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		showEyeIcon = false;
	}
</script>
