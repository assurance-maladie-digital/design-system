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
				:success-messages="options.textField.successMessages || successMessages"
				v-bind="options.textField"
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
			@change="saveFromCalendar"
		/>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import customizable, { Options } from '../mixins/customizable';

	import dayjs from 'dayjs';

	import maskit from '../functions/maskit';
	import parseDate from '../helpers/parseDate';

	import { ValidationRule } from '../rules/types';

	import { Refs } from '../../types';

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
			/** Same has validation rules from Vuetify, but for warnings */
			warningRules: {
				type: [Array, Object],
				default: () => [] as string[]
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
			customizable({
				textField: {
					hint: 'Format JJ/MM/AAAA',
					label: 'Date',
					persistentHint: true,
					validateOnBlur: true,
					class: 'vd-date-picker-text-field'
				},
				menu: {
					closeOnContentClick: false,
					minWidth: '290px',
					nudgeBottom: 45,
					nudgeRight: 50,
					zIndex: 1,
					contentClass: 'vd-date-picker-menu'
				},
				btn: {
					icon: true,
					small: true
				},
				datePicker: {
					firstDayOfWeek: 1,
					noTitle: true,
					locale: 'fr'
				},
				icon: {
					color: '#808080'
				}
			})
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
			value(date: string) {
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
				this.validate(this.textFieldDate);
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

		// Extend $refs
		$refs!: Refs<{
			menu: {
				save: (date: string) => void;
			};
			picker: {
				activePicker: string;
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

		/**
		 * The messages from warningRules.
		 * Not used is already passed as a prop
		 */
		successMessages: string[] = [];

		/** Parse a date with dateFormatReturn format to interal format */
		parseDateForModel(date: string) {
			return parseDate(date, this.dateFormatReturn).format(INTERNAL_FORMAT);
		}

		/** Set textField model by parsing this.date */
		setTextFieldModel() {
			this.textFieldDate = parseDate(this.date, 'DDMMYYYY').format(this.dateFormat);
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

			const formatted = this.formatDate(this.textFieldDate, this.maskValue);

			/** If formatted is an empty string, the date isn't valid, don't continue */
			if (!formatted) {
				return;
			}

			// Else, the format is valid, we can parse the date
			const [day, month, year] = formatted.split('/');
			// Then we set the v-model (internal format)
			this.date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

			this.emitChangeEvent();
		}

		/** Update v-model */
		emitChangeEvent() {
			// Parse the date with interal format,
			// and return the date with dateFormatRetun format
			this.$emit('change', parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormatReturn));
		}

		formatDate(date: string, mask: string = '##/##/####') {
			// Mask the value
			// by default textFieldDate is 25032018 format,
			// and maskValue is ##/##/####
			// masked will be 25/03/2018

			// It also supports other formats, eg.:
			// 20180325 & ####/##/## => 2018/03/25
			const masked = maskit(date, mask, true);

			// Parse the date to the "standard" format
			// It masked value is incomplete, eg. "25/",
			// the result will be "Invalid Date",
			// so it won't match the regex
			const formatted = parseDate(masked, this.dateFormat).format('DD/MM/YYYY');

			// Validate DD/MM/YYYY format
			const dateFormatRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

			// If the formatted date doesn't match regex, format is invalid
			if (!formatted.match(dateFormatRegex)) {
				return '';
			}

			return formatted;
		}

		/** Custom validation for warningRules */
		validate(value: string) {
			this.successMessages = [];

			this.warningRules.forEach((rule: ValidationRule) => {
				/** The result of the validation rule */
				const result = rule(value);

				// If it's a string, push it to successMessages
				// If it's a boolean we don't do anything
				if (typeof result === 'string') {
					this.successMessages.push(result);
				}
			});
		}

		/** Compute the classes for VTextField */
		get textFieldClasses() {
			return [
				{
					'warning-rules': this.warningRules.length
				},
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
	}

	// Change the main color when a warning is present
	.vd-date-picker-text-field.warning-rules {
		&.success--text,
		::v-deep .success--text {
			color: orange !important;
		}
	}
</style>
