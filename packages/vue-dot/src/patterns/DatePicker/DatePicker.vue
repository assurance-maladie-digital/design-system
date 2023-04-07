<template>
	<VMenu
		ref="menu"
		v-bind="menuOptions"
		v-model="menu"
	>
		<template #activator="{}">
			<VTextField
				ref="input"
				v-facade="maskValue"
				v-bind="textFieldOptions"
				:value="dateFormatted"
				:outlined="outlined"
				:class="textFieldClasses"
				:success-messages="textFieldOptions.successMessages || successMessages"
				:error-messages="textFieldOptions.errorMessages || errorMessages"
				:error.sync="internalErrorProp"
				:disabled="disabled"
				class="vd-date-picker-text-field"
				@blur="textFieldBlur"
				@click.native="textFieldClicked"
				@paste.prevent="saveFromPasted"
				@keydown.enter.prevent="saveFromTextField"
				@input="errorMessages = null"
				@change="dateFormatted = $event"
				v-on="listeners"
			>
				<template #prepend>
					<VBtn
						v-show="showPrependIcon"
						v-bind="options.btn"
						:aria-label="locales.openCalendar"
						:disabled="disabled"
						@click="menu = true"
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
						@click="menu = true"
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
			v-model="date"
			v-bind="options.datePicker"
			type="date"
			:active-picker.sync="activePicker"
			:picker-date.sync="internalPickerDate"
			:max="options.datePicker.max || max"
			:min="options.datePicker.min || min"
			:events="calendarEvents"
			@change="saveFromCalendar"
		/>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable, Options } from '../../mixins/customizable';
	import { Eventable } from '../../mixins/eventable';
	import { WarningRules } from '../../mixins/warningRules';

	import { DateLogic } from './mixins/dateLogic';
	import { MaskValue } from './mixins/maskValue';
	import { Birthdate } from './mixins/birthdate';
	import { PickerDate } from './mixins/pickerDate';
	import { ErrorProp } from './mixins/errorProp';

	import { mdiCalendar } from '@mdi/js';

	import deepMerge from 'deepmerge';

	const Props = Vue.extend({
		props: {
			noCalendar: {
				type: Boolean,
				default: false
			},
			noPrependIcon: {
				type: Boolean,
				default: false
			},
			outlined: {
				type: Boolean,
				default: false
			},
			appendIcon: {
				type: Boolean,
				default: false
			},
			textFieldActivator: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			textFieldClass: {
				type: [String, Array] as PropType<string | string[]>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		customizable(config),
		Eventable,
		WarningRules,
		DateLogic,
		MaskValue,
		Birthdate,
		PickerDate,
		ErrorProp
	);

	@Component<DatePicker>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class DatePicker extends MixinsDeclaration {
		locales = locales;

		calendarIcon = mdiCalendar;

		menu = false;

		get showPrependIcon(): boolean {
			return !this.noPrependIcon && !this.showAppendIcon;
		}

		get showAppendIcon(): boolean {
			return this.appendIcon || this.outlined;
		}

		get menuOptions(): Options {
			const position: Options = {
				nudgeBottom: this.outlined ? 56 : 45,
				nudgeRight: this.outlined ? 0 : 45
			};

			return deepMerge<Options>(position, this.options.menu);
		}

		get textFieldOptions(): Options {
			return deepMerge<Options>(this.options.textField, this.$attrs);
		}

		get textFieldClasses(): (string | string[])[] {
			const textFieldClasses = [];

			if (this.warningRules.length) {
				textFieldClasses.push('vd-warning-rules');
			}

			if (!this.showPrependIcon) {
				textFieldClasses.push('vd-no-prepend-icon');
			}

			if (this.textFieldClass) {
				const classes = typeof this.textFieldClass === 'object' ? this.textFieldClass : [this.textFieldClass];

				textFieldClasses.push(classes);
			}

			return textFieldClasses;
		}

		/* eslint-disable @typescript-eslint/ban-types */
		get listeners(): Record<string, Function | Function[]> {
			// Remove 'change' event to avoid event duplication
			delete this.$listeners.change;
			return this.$listeners;
		}

		textFieldClicked(): void {
			if (this.textFieldActivator) {
				this.menu = true;
			}
		}
	}
</script>

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
						opacity: .4;
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
