<template>
	<VTextField
		v-bind="textFieldOptions"
		:value="value"
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

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable, Options } from '../../mixins/customizable';

	import { Refs } from '../../types';
	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { ValidationRule } from '../../rules/types';

	import { mdiEye, mdiEyeOff } from '@mdi/js';
	import deepMerge from 'deepmerge';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: undefined
			},
			required: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		inheritAttrs: false
	})
	export default class PasswordField extends MixinsDeclaration {
		$refs!: Refs<{
			input: {
				hasError: boolean;
				isFocused: boolean;
			};
		}>;

		eyeIcon = mdiEye;
		eyeOffIcon = mdiEyeOff;

		showEyeIcon = false;
		error = false;

		get btnLabel(): string {
			return this.showEyeIcon ? locales.hidePassword : locales.showPassword;
		}

		get textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		}

		get rules(): ValidationRule[] {
			const rules = (this.$attrs.rules as unknown as ValidationRule[]) || [];

			if (this.required) {
				rules.push(required);
			}

			return rules;
		}

		emitChangeEvent(value: string): void {
			this.$emit('change', value);
		}
	}
</script>
