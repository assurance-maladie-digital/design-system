<template>
	<!-- DatePicker -->
	<VMenu
		ref="menu"
		v-model="menu"
		v-bind="options.menu"
	>
		<template #activator="{}">
			<!-- TextField to enter date by hand -->
			<VTextField
				ref="input"
				v-model="dateFormatted"
				v-mask="maskValue"
				v-bind="options.textField"
				class="vd-date-picker-text-field"
				:class="textFieldClasses"
				:success-messages="options.textField.successMessages || successMessages"
				:error.sync="internalErrorProp"
				@blur="textFieldBlur"
				@click="textFieldClicked"
			>
				<template #prepend>
					<VBtn
						v-if="!noPrependIcon && !appendIcon"
						v-bind="options.btn"
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
						v-if="appendIcon"
						v-bind="options.btn"
						@click="menu = true"
					>
						<slot name="append-icon">
							<VIcon v-bind="options.icon">
								{{ calendarIcon }}
							</VIcon>
						</slot>
					</VBtn>
				</template>
			</VTextField>
		</template>

		<!--
			Calendar

			We bind max & min properties manually
			since we set them when using birthdate mode
		-->
		<VDatePicker
			v-if="!noCalendar"
			ref="picker"
			v-model="date"
			v-bind="options.datePicker"
			:picker-date.sync="internalPickerDate"
			:max="options.datePicker.max || max"
			:min="options.datePicker.min || min"
			:events="calendarEvents"
			@change="saveFromCalendar"
		/>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { config } from './config';

	import { customizable, Options } from '../../mixins/customizable';
	import { Eventable } from '../../mixins/eventable';
	import { WarningRules } from '../../mixins/warningRules';
	import { ValidationRule } from '../../rules/types';

	import { DateLogic } from './mixins/dateLogic';
	import { MaskValue } from './mixins/maskValue';
	import { Birthdate } from './mixins/birthdate';
	import { PickerDate } from './mixins/pickerDate';
	import { ErrorProp } from './mixins/errorProp';

	import { mdiCalendar } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/** Disable the calendar */
			noCalendar: {
				type: Boolean,
				default: false
			},
			/** Disable the prepend icon */
			noPrependIcon: {
				type: Boolean,
				default: false
			},
			/** Use append icon instead of prepend */
			appendIcon: {
				type: Boolean,
				default: false
			},
			/** Open calendar menu when the text field is clicked */
			textFieldActivator: {
				type: Boolean,
				default: false
			}
		}
	});

	/**
	 * DatePicker is a component that makes the date picker
	 * from Vuetify simpler to use
	 */
	@Component<DatePicker>({
		mixins: [
			// Default configuration
			customizable(config),
			Eventable,
			WarningRules,
			DateLogic,
			MaskValue,
			Birthdate,
			PickerDate,
			ErrorProp
		],
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class DatePicker extends Props {
		// Mixin computed data
		options!: Options;
		// eventable
		showWeekEnds!: boolean;
		calendarEvents!: (date: string) => unknown;
		// mask
		maskValue?: string;
		// warning rules
		successMessages!: string[];
		warningRules!: ValidationRule[];
		// date
		date!: string;
		max!: string | null;
		min!: string | null;
		dateFormatted!: string;
		saveFromCalendar!: () => void;
		textFieldBlur!: () => void;
		// picker date
		internalPickerDate!: string;
		internalErrorProp!: boolean;

		// Icon
		calendarIcon = mdiCalendar;

		/** The v-model of VMenu */
		menu = false;

		/** Compute the classes for VTextField */
		get textFieldClasses() {
			return [
				{ 'vd-warning-rules': this.warningRules.length },
				...this.options.textField.class as unknown[] || []
			];
		}

		/** Open calendar menu if textFieldActivator is true */
		textFieldClicked() {
			if (this.textFieldActivator) {
				this.menu = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	// Hide scrollbar in VMenu
	.vd-date-picker-menu {
		overflow: hidden;

		// Custom events
		// Disabled when the btn is active
		::v-deep {
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
		}
	}

	// Fix margin-top on enclosed text field
	// since we're using a slot with a button
	.vd-date-picker-text-field.v-text-field--enclosed ::v-deep {
		.v-input__prepend-outer,
		.v-input__prepend-inner,
		.v-input__append-inner,
		.v-input__append-outer {
			margin-top: 10px !important;
		}
	}
</style>
