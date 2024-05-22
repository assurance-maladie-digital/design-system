<script lang="ts">
import { defineComponent } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { customizable, type Options } from "@/mixins/customizable";

import { required } from "@/rules/required";
import { type ValidationRule } from "@/rules/types";

import { mdiEye, mdiEyeOff } from "@mdi/js";
import deepMerge from "deepmerge";

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	emits: ['update:modelValue'],
	props: {
		modelValue: {
			type: String as () => string | null,
			default: null,
		},
		outlined: {
			type: Boolean,
			default: false
		},
		required: {
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

			return this.required ? [...rules, required] : rules;
		}
	},
	methods: {
		emitChangeEvent(value: string): void {
			this.$emit('update:modelValue', value);
		}
	}
});
</script>

<template>
	<VTextField
		v-bind="textFieldOptions"
		:model-value="modelValue"
		color="primary"
		:variant="outlined ? 'outlined' : 'underlined'"
		:rules="rules"
		:type="showEyeIcon ? 'text' : 'password'"
		@update:modelValue="emitChangeEvent"
	>
		<template #append-inner>
			<VBtn
				v-bind="options.btn"
				:aria-label="btnLabel"
				class="mx-auto"
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
.v-field__append-inner {
	display: flex;
	align-items: center;
	padding-top: 8px;
}
</style>
