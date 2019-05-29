<template>
	<!-- DatePicker -->
	<VMenu
		ref="menu"
		v-model="menu"
		v-bind="options.menu"
		:return-value.sync="date"
	>
		<template v-slot:activator="{ on }">
			<!-- TextField to enter date by hand -->
			<VTextField
				ref="input"
				v-model="dateFormatted"
				:mask="maskValue"
				v-bind="options.textField"
				@blur="saveFromTextField"
			>
				<VBtn
					slot="prepend"
					v-bind="options.btn"
					class="ma-0"
					@click="menu = true"
				>
					<VIcon v-bind="options.icon">
						event
					</VIcon>
				</VBtn>
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
			@input="saveDate"
		/>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import customizable from '../mixins/customizable';

	// import isDateValid from '../rules/isDateValid';

	import dayjs from 'dayjs';

	import maskit from '../functions/maskit';
	import parseDate from '../helpers/parseDate';

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
	 * DatePicker is a component that
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
					rules: [
						// isDateValid
					]
				},
				menu: {
					closeOnContentClick: false,
					minWidth: '290px',
					nudgeBottom: 45,
					nudgeRight: 45,
					lazy: true,
					zIndex: 1,
					contentClass: 'vd-date-picker-menu'
				},
				btn: {
					icon: true
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
		// See https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker
		watch: {
			menu(val) {
				// If birthdate mode is activated
				if (this.birthdate && val) {
					setTimeout(() => {
						// Se the active picker to year
						(this.$refs.picker as any).activePicker = 'YEAR';
					});
				}
			},
			/** Update the date when value is provided by the user */
			value(date) {
				// Format the date to 'YYYY-MM-DD' format using dateFormatReturn
				this.date = parseDate(date, this.dateFormatReturn).format('YYYY-MM-DD');
			}
		}
	})
	export default class DatePicker extends Props {
		/** The v-model of VMenu */
		menu = false;

		/**
		 * The v-model of the component
		 *
		 * @example
		 * Format is '2018-03-25'
		 */
		date = this.value;

		/**
		 * The v-model of the text field
		 * it's different od this.date because the formatting
		 * isn't the same
		 *
		 * @example
		 * Format is '25032018'
		*/
		textFieldDate = this.date;

		/** If birthdate is enabled, max is the current date */
		max = this.birthdate ? new Date().toISOString().substr(0, 10) : null;
		/** If birthdate is enabled, min is 01/01/1950 */
		min = this.birthdate ? '1950-01-01' : null;

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

		/** Save the date from calendar, using Vuetify method */
		saveDate() {
			(this.$refs.menu as any).save(this.date);
		}

		/** Save the date from text field blur to sync calendar */
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
			// Then we set the v-model
			// (YYYY-MM-DD) format
			this.date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

			// Update v-model
			// Parse the date with interal format,
			// and return the date with dateFormatRetun format
			this.$emit('change', parseDate(this.date, 'YYYY-MM-DD').format(this.dateFormatReturn));
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
	}
</script>

<style lang="scss" scoped>
	// Hide scrollbar in VMenu
	.vd-date-picker-menu {
		overflow: hidden;
	}
</style>
