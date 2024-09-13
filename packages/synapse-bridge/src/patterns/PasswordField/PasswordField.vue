<script lang="ts">
import { defineComponent } from 'vue'

import { config } from './config'
import { locales } from './locales'

import { customizable, type Options } from '@/mixins/customizable'

import { required } from '@/rules/required'
import { type ValidationRule } from '@/rules/types'

import { mdiEye, mdiEyeOff } from '@mdi/js'
import deepMerge from 'deepmerge'

export default defineComponent({
	inheritAttrs: false,
	mixins: [customizable(config)],
	emits: ['update:modelValue', 'submit'],
	props: {
		modelValue: {
			type: String as () => string | null,
			default: null,
		},
		outlined: {
			type: Boolean,
			default: false,
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
		}
	},
	computed: {
		btnLabel(): string {
			return this.showEyeIcon
				? locales.hidePassword
				: locales.showPassword
		},

		textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs)
		},

		rules(): ValidationRule[] {
			const rules =
				(this.$attrs.rules as unknown as ValidationRule[]) || []

			return this.required ? [...rules, required] : rules
		},
	},
	methods: {
		emitChangeEvent(value: string): void {
			this.$emit('update:modelValue', value)
		},
		handleKeydown(event: KeyboardEvent): void {
			if (event.key === 'Enter') {
				this.$emit('submit')
			}
		},
	},
})
</script>

<template>
	<VTextField
		v-bind="textFieldOptions"
		:model-value="modelValue"
		color="primary"
		:variant="outlined ? 'outlined' : 'underlined'"
		:rules="rules"
		:type="showEyeIcon ? 'text' : 'password'"
		class="vd-password"
		@keydown="handleKeydown"
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
.vd-password {
	.v-btn--icon.v-btn--density-default {
		width: var(--v-btn-height);
		height: var(--v-btn-height);
	}
	:deep(.v-field.v-field--variant-underlined .v-field__append-inner) {
		padding-top: 0;
		padding-bottom: 0;
		display: flex;
		align-items: center;
	}
	:deep(.v-field.v-field--variant-underlined .v-field__input) {
		padding-top: calc(var(--v-field-input-padding-top) - 15px);
	}
}
</style>
