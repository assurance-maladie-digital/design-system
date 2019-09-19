<template>
	<!-- DatePicker -->
	<VMenu
		ref="menu"
		v-model="menu"
		v-bind="options.menu"
		:return-value.sync="date"
	>
		<template #activator="{ on }">
			<!-- TextField to enter date by hand -->
			<VTextField
				ref="input"
				v-model="dateFormatted"
				v-mask="maskValue"
				v-bind="options.textField"
				:success-messages="options.textField.successMessages || successMessages"
				:class="textFieldClasses"
				@blur="textFieldBlur"
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

	import config from './config';

	import customizable, { Options } from '../../mixins/customizable';
	import eventable from '../../mixins/eventable';

	import warningRules from '../../mixins/warningRules';

	import dayjs from 'dayjs';

	import parseDate from '../../helpers/parseDate';

	import { Refs } from '../../../types';

	import { mdiCalendar } from '@mdi/js';

	/** Date format used internally */
	const INTERNAL_FORMAT = 'YYYY-MM-DD';

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
			/**
			 * Custom mask string.
			 * By default it's computed from dateFormat
			 *
			 * If false is passed, don't apply a mask
			 */
			mask: {
				type: [String, Boolean],
				default: undefined
			},
			/** The format of the date inside the text field */
			dateFormat: {
				type: String,
				default: 'DD/MM/YYYY'
			},
			/** The format used in the v-model for the user */
			dateFormatReturn: {
				type: String,
				default: 'DD/MM/YYYY'
			},
			/** Enables birthdate mode: select year, month then day */
			birthdate: {
				type: Boolean,
				default: false
			},
			/** The v-model value */
			value: {
				type: String,
				default: ''
			}
		}
	});

	/**
	 * DatePicker is a component that makes the date picker
	 * from Vuetify simplier to use
	 */
	@Component<DatePicker>({
		mixins: [
			// Default configuration
			customizable(config),
			warningRules,
			eventable
		],
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			// See https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker
			menu(val) {
				// If birthdate mode is activated
				if (this.birthdate && val) {
					setTimeout(() => {
						// Se the active picker to year
						this.$refs.picker.activePicker = 'YEAR';
					});
				}
			},
			/** Update the date when value is provided by the user */
			value: {
				handler(date: string) {
					// If the date is cleared
					if (!date) {
						// Clear internal models
						this.date = '';
						this.textFieldDate = '';

						return;
					}

					// Format the date to internal format using dateFormatReturn
					this.date = this.parseDateForModel(date);
					this.setTextFieldModel();

					// Validate warning rules
					this.validate(this.textFieldDate);
					// Validate Vuetify rules
					this.validateVuetify();
				},
				immediate: true
			},
			/**
			 * This method is fired every time textFieldDate changes,
			 * that means on every key strokes, so don't validate
			 * on input if validateOnBlur is true
			 */
			textFieldDate(value: string) {
				if (!this.options.textField.validateOnBlur) {
					this.validate(value);
				}
			}
		}
	})
	export default class DatePicker extends Props {
		// Mixin computed data
		options!: Options;
		// eventable
		showWeekEnds!: boolean;
		calendarEvents!: (date: string) => any;
		// warning rules
		successMessages!: string[];
		validate!: (value: string) => void;
		warningRules!: any;

		// Extend $refs
		$refs!: Refs<{
			menu: {
				save: (date: string) => void;
			};
			picker: {
				activePicker: string;
			};
			input: {
				validate: () => boolean;
			};
		}>;

		// Icon
		calendarIcon = mdiCalendar;

		/** The v-model of VMenu */
		menu = false;

		/**
		 * The v-model of the component
		 *
		 * @example
		 * Format is '2018-03-25'
		 *
		 * Set initial value by parsing if there is one
		 */
		date = this.value ? this.parseDateForModel(this.value) : '';

		/**
		 * The v-model of the text field
		 * it's different od this.date because the formatting
		 * isn't the same
		 *
		 * @example
		 * Format is '25032018'
		 */
		textFieldDate = '';

		/** If birthdate is enabled, max is the current date */
		max = this.birthdate ? new Date().toISOString().substr(0, 10) : null;
		/** If birthdate is enabled, min is 01/01/1950 */
		min = this.birthdate ? '1950-01-01' : null;

		/** Parse a date with dateFormatReturn format to interal format */
		parseDateForModel(date: string) {
			return parseDate(date, this.dateFormatReturn).format(INTERNAL_FORMAT);
		}

		parseTextFieldDate(date: string) {
			const formatted = parseDate(date, this.dateFormat);

			// If the formatted date isn't valid, return empty string
			if (!formatted.isValid()) {
				return '';
			}

			return formatted.format(INTERNAL_FORMAT);
		}

		/** Set textField model by parsing this.date */
		setTextFieldModel() {
			this.textFieldDate = parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormat);
		}

		/**
		 * Return the mask to apply to the TextField
		 *
		 * @example
		 * '##/##/####' for default dateFormat
		 */
		get maskValue() {
			// If the mask is false, don't apply mask
			if (this.mask === false) {
				// Undefined is the default value for mask property
				return undefined;
			}

			// If a mask is specified by the user, use it
			if (typeof this.mask === 'string') {
				return this.mask;
			}

			// Else, compute the mask from dateFormat

			// Match every letter, case insensitive
			const regexp = /[a-z]/gmi;

			// Replace every letter by # (in Vuetify masks, # matches any digit)
			return this.dateFormat.replace(regexp, '#');
		}

		/**
		 * Format date with dayjs and dateFormat
		 *
		 * @example
		 * Format is '25/03/2018' with default dateFormat
		 */
		// Getter
		get dateFormatted() {
			/**
			 * If the date is empty, return now
			 * to avoid date parsing errors
			 */
			if (this.date === '') {
				return '';
			}

			/** Format this.date with dateFormat */
			const formatted = dayjs(this.date).format(this.dateFormat);

			return formatted;
		}

		// Setter
		set dateFormatted(value: string) {
			this.textFieldDate = value;
			this.saveFromTextField();
		}

		/** Save the date from calendar */
		saveFromCalendar() {
			// Save the date using Vuetify method
			this.$refs.menu.save(this.date);

			// Update textField model
			this.setTextFieldModel();

			// Apply validation because when the calendar is clicked,
			// the input loose focus and fire textFieldBlur
			this.validate(this.textFieldDate);

			// If validateOnBlur is true
			if (this.options.textField.validateOnBlur) {
				// Validate the text field
				// because no blur event is emitted
				this.validateVuetify();
			}

			this.emitChangeEvent();
		}

		/** Save the date from text field blur */
		saveFromTextField() {
			// Return if empty/falsy
			if (!this.textFieldDate) {
				// Clear v-model
				this.$emit('change', '');
				return;
			}

			const formatted = this.parseTextFieldDate(this.textFieldDate);

			// If formatted is an empty string, the date isn't valid, don't continue
			if (!formatted) {
				return;
			}

			// Set the internal date
			this.date = formatted;

			this.emitChangeEvent();
		}

		/** Update v-model */
		emitChangeEvent() {
			// Parse the date with interal format,
			// and return the date with dateFormatRetun format
			this.$emit('change', parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormatReturn));
		}

		/** Validate Vuetify rules */
		validateVuetify() {
			this.$nextTick(() => this.$refs.input.validate());
		}

		/** Compute the classes for VTextField */
		get textFieldClasses() {
			return [
				{ 'vd-warning-rules': this.warningRules.length },
				...this.options.textField.class as string[]
			];
		}

		/** Fired on blur event of the textField */
		textFieldBlur() {
			this.saveFromTextField();

			// If validateOnBlur is true, validate
			if (this.options.textField.validateOnBlur) {
				this.validate(this.textFieldDate);
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
</style>
