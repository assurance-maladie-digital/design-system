<script lang="ts">
import { defineComponent } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { customizable, Options } from "../../mixins/customizable";

import { required } from "../../rules/required";
import { ValidationRule } from "../../rules/types";

import { mdiEye, mdiEyeOff } from "@mdi/js";
import deepMerge from "deepmerge";

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	emits: ['change'],
	props: {
		value: {
			type: String,
			default: undefined,
		},
		isRequired: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			eyeIcon: mdiEye,
			eyeOffIcon: mdiEyeOff,
			showEyeIcon: false,
			error: false,
		};
	},
	computed: {
		btnLabel(): string {
			return this.showEyeIcon ? locales.hidePassword : locales.showPassword;
		},

		textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		},

		rules(): ValidationRule[] {
			const rules = (this.$attrs.rules as unknown as ValidationRule[]) || [];

			return this.isRequired ? [...rules, required] : rules;
		}
	},
	methods: {
		emitChangeEvent(value: string): void {
			this.$emit('change', value);
		}
	}
});
</script>

<template>
	<VTextField
		v-bind="textFieldOptions"
		:model-value="value"
		:rules="rules"
		:type="showEyeIcon ? 'text' : 'password'"
		@change="emitChangeEvent"
	>
		<template #append>
			<VBtn
				v-bind="options.btn"
				:aria-label="btnLabel"
				class="mt-n2"
				@click="showEyeIcon = !showEyeIcon"
			>
				<VIcon v-bind="options.icon">
					{{ showEyeIcon ? eyeIcon : eyeOffIcon }}
				</VIcon>
			</VBtn>
		</template>
	</VTextField>
</template>

<style lang="scss" scoped>
.v-btn--icon {
	color: rgba(0,0,0,.54);
}
</style>
