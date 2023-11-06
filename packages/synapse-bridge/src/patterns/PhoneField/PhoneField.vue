<script lang="ts">
import { defineComponent } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { Options } from "../../mixins/customizable";

import { required } from "../../rules/required";
import { exactLength } from "../../rules/exactLength";
import { ValidationRule } from "../../rules/types";

import { mdiPhone } from "@mdi/js";

import { vMaska } from "maska";

import deepMerge from "deepmerge";

const PHONE_LENGTH = 10;

export default defineComponent({
	inheritAttrs: false,
	directives: { maska: vMaska },
	emits: ["change", "update:modelValue"],
	props: {
		value: {
			type: String,
			default: undefined,
		},
		required: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			locales,
			phoneIcon: mdiPhone,
			internalValue: null as string | null,
			counter: PHONE_LENGTH,
			phonemask: { mask: "## ## ## ## ##" },
		};
	},
	computed: {
		textFieldOptions(): Options {
			return deepMerge<Options>(config, this.$attrs);
		},

		rules(): ValidationRule[] {
			const rules = [];

			if (this.required) {
				rules.push(required);
			}

			rules.push(exactLength(PHONE_LENGTH, true));

			return rules;
		},

		computedValue(): string | null {
			return this.value ? this.formatPhone(this.value) : null;
		},
	},
	methods: {
		formatPhone(value: string): string {
			const phone = value.match(/.{1,2}/g);

			if (!phone) {
				return "";
			}

			return phone.join(" ");
		},

		noSpacesCounter(value?: string | undefined): number {
			return value?.replace(/\s/g, "").length || 0;
		},

		setInternalValue(event: any): void {
			this.internalValue = event.target.value.replace(/\s/g, "");
		},

		emitChangeEvent(): void {
			this.$emit("change", this.internalValue);
		},
	},
});
</script>

<template>
	<VTextField
		v-maska:[phonemask]
		v-bind="textFieldOptions"
		:model-value="computedValue"
		:rules="rules"
		:counter="counter"
		:counter-value="noSpacesCounter"
		:label="locales.label"
		:variant="outlined ? 'outlined' : 'underlined'"
		@input="setInternalValue"
		@change="emitChangeEvent"
	>
		<template #append-inner>
			<VIcon>
				{{ phoneIcon }}
			</VIcon>
		</template>
	</VTextField>
</template>
