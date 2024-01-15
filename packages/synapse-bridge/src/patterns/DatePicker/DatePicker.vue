<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { customizable, type Options } from "../../mixins/customizable";
import { WarningRules } from "../../mixins/warningRules";

import { DateLogic } from "./mixins/dateLogic";
import { MaskValue } from "./mixins/maskValue";
import { ErrorProp } from "./mixins/errorProp";
import { Birthdate } from "./mixins/birthdate";

import { mdiCalendar } from "@mdi/js";
import { vMaska } from "maska";

import deepMerge from "deepmerge";
import { VDatePicker } from 'vuetify/components/VDatePicker';

export default defineComponent({
	components: {
		VDatePicker
	},
	inheritAttrs: false,
	directives: { maska: vMaska },
	emits: ["update:modelValue"],
	mixins: [
		customizable(config),
		WarningRules,
		DateLogic,
		MaskValue,
		ErrorProp,
		Birthdate,
	],
	props: {
		noCalendar: {
			type: Boolean,
			default: false,
		},
		noPrependIcon: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		appendIcon: {
			type: Boolean,
			default: false,
		},
		textFieldActivator: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		textFieldClass: {
			type: [String, Array] as PropType<string | string[]>,
			default: undefined,
		},
	},
	data() {
		return {
			locales: locales,
			calendarIcon: mdiCalendar,
			menuOpen: false,
		};
	},
	computed: {
		showPrependIcon(): boolean {
			return !this.noPrependIcon && !this.showAppendIcon;
		},

		showAppendIcon(): boolean {
			return this.appendIcon || this.outlined;
		},

		menuOptions(): Options {
			// TODO: add Nudge when the field is outlined
			return deepMerge<Options>(this.menuOptions, this.options.menu);
		},

		textFieldOptions(): Options {
			return deepMerge<Options>(this.options?.textField, this.$attrs);
		},

		textFieldClasses() {
			const classes: (string | Record<string, boolean>)[] = [
				{
					"vd-warning-rules": !!this.warningRules.length,
					"vd-no-prepend-icon": !this.showPrependIcon,
				}
			];

			return classes.concat(this.textFieldClass || []);
		},
	},
	methods: {
		textFieldClicked(): void {
			if (this.textFieldActivator) {
				this.menuOpen = true;
			}
		},
	},
});
</script>

<template>
	<div>

		<VMenu ref="menu" v-bind="menuOptions" v-model="menuOpen">
			<template #activator="{}">

				<VTextField
					ref="input"
					v-maska:[maskValue]
					v-bind="textFieldOptions"
					:model-value="dateFormatted"
					:variant="outlined ? 'outlined' : undefined"
					:class="textFieldClasses"
					:success-messages="
						textFieldOptions.successMessages || successMessages
					"
					:error-messages="
						textFieldOptions.errorMessages || errorMessages
					"
					v-model:error="internalErrorProp"
					:disabled="disabled"
					class="vd-date-picker-text-field"
					@blur="textFieldBlur"
					@click="textFieldClicked"
					@paste.prevent="saveFromPasted"
					@keydown.enter.prevent="saveFromTextField"
					@update:model-value="(e:string)=>{errorMessages = null; dateFormatted = e;}"
				>
					<template #prepend>
						<VBtn
							v-show="showPrependIcon"
							v-bind="options.btn"
							:aria-label="locales.openCalendar"
							:disabled="disabled"
							@click="menuOpen = true"
						>
							<slot name="prepend-icon">
								<VIcon v-bind="options.icon">
									{{ calendarIcon }}
								</VIcon>
							</slot>
						</VBtn>
					</template>

					<template #append>
						<VBtn
							v-show="showAppendIcon"
							v-bind="options.btn"
							:aria-label="locales.openCalendar"
							:disabled="disabled"
							@click="menuOpen = true"
						>
							<slot name="append-icon">
								<VIcon v-bind="options.icon">
									{{ calendarIcon }}
								</VIcon>
							</slot>
						</VBtn>
					</template>

					<!--
						Pass down slots
						@see https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component/52823029#52823029
					-->
					<slot
						v-for="name in Object.keys($slots)"
						:slot="name"
						:name="name"
					/>
				</VTextField>
			</template>
			<VDatePicker
				v-if="!noCalendar"
				v-model="dateObject"
				v-model:viewMode="activePicker"
				v-bind="options.datePicker"
				@update:modelValue="saveFromCalendar"
				@update:viewMode="log"
				:max="options.datePicker.max || max"
				:min="options.datePicker.min || min"
			/>
		</VMenu>
	</div>
</template>

<style lang="scss" scoped>
.vd-date-picker-menu {
	// Hide scrollbar in VMenu
	overflow: hidden;

	// Custom events
	// Disabled when the btn is active
	:deep() {
		.v-btn:not(.v-btn--active) {
			.v-date-picker-table__events {
				// Make the container take full space
				height: 100%;
				bottom: 0 !important;

				// Put the content in front
				.v-btn__content {
					z-index: 2;
				}

				// Make the dot take full space
				.vd-custom-event {
					position: absolute;
					height: 100%;
					width: 100%;
					margin: 0;
					left: 0;
					// Make sure we still see the text
					opacity: 0.4;
				}
			}
		}

		// Don't show custom events when the date is selected
		.v-btn.v-btn--active {
			.vd-custom-event {
				display: none;
			}
		}

		// Fix https://github.com/vuetifyjs/vuetify/issues/11809
		.v-picker--date {
			display: flex;
		}
	}
}

// Fix margin-top on enclosed text field
// since we're using a slot with a button
.vd-date-picker-text-field.v-text-field--enclosed :deep() {
	.v-input__prepend-outer,
	.v-input__prepend-inner,
	.v-input__append-inner,
	.v-input__append-outer {
		.v-btn--icon {
			margin-top: -7px;
		}
	}
}

// Remove spacing on prepend slot since we're using v-show
// @see https://github.com/assurance-maladie-digital/design-system/issues/907
.vd-no-prepend-icon :deep() .v-input__prepend-outer {
	margin: 0 !important;
}
</style>
