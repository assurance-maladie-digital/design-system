<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VTextField
				v-model="field.value"
				:append-icon="showEyeIcon ? eyeIcon : eyeOffIcon"
				:type="showEyeIcon ? 'text' : 'password'"
				:label="field.label"
				@click:append="showEyeIcon = !showEyeIcon"
				@change="emitChangeEvent(field)"
			/>
		</template>
	</FormFieldCtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FormFieldCtn from '../../FormFieldCtn';

	import { mdiEye, mdiEyeOff } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			field: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component({
		components: {
			FormFieldCtn
		}
	})
	export default class PasswordField extends Props {
		// Icons
		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		showEyeIcon = false;
	}
</script>
