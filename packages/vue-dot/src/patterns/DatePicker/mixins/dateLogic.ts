import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { parseDate } from '../../../helpers/parseDate';
import { DATE_FORMAT_REGEX } from '../../../functions/validation/isDateValid';

import { Options } from '../../../mixins/customizable';

import { Refs } from '../../../types';

/** Date format used internally */
const INTERNAL_FORMAT = 'YYYY-MM-DD';

const Props = Vue.extend({
	props: {
		/** The format of the date inside the text field */
		dateFormat: {
			type: String,
			default: 'DD/MM/YYYY'
		},
		/** The format used in the v-model for the user */
		dateFormatReturn: {
			type: String,
			default: 'YYYY-MM-DD'
		},
		/** The v-model value */
		value: {
			type: String,
			default: ''
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Handle main logic of the DatePicker */
@Component<DateLogic>({
	watch: {
		/** Update the date when value is provided by the user */
		value: {
			handler(date: string): void {
				// If the date is cleared
				if (!date) {
					// Clear internal models
					this.date = '';
					this.textFieldDate = '';

					return;
				}

				// Format the date to internal format using dateFormatReturn
				const parsed = this.parseDateForModel(date);

				// If parsed is an empty string, the date isn't valid, don't continue
				if (!parsed) {
					return;
				}

				this.date = parsed;
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
		textFieldDate(value: string): void {
			if (!this.validateOnBlurEnabled) {
				this.validate(value);
			}
		}
	}
})
export class DateLogic extends MixinsDeclaration {
	// Extend $refs
	$refs!: Refs<{
		/** VMenu */
		menu: {
			save: (date: string) => void;
		};
		/** VTextField */
		input: {
			validate: () => boolean;
			hasFocused: boolean;
			hasError: boolean;
		};
	}>;

	// DatePicker.options
	options!: Options;

	// Mixin computed data
	// warning rules
	validate!: (value: string) => void;

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

	mounted() {
		// Watch VTextField 'hasError' computed value
		// because 'update:error' event isn't reliable
		// (it's not fired at initial state and 'validateOnBlur'
		// can cause issues as well)
		this.$watch(
			() => this.$refs.input.hasError,
			(error: boolean) => {
				this.$emit('error', error);
			},
			{
				deep: true // Even if we don't watch an object, this is needed
			}
		);
	}

	/** Check if validateOnBlur is enabled */
	get validateOnBlurEnabled(): boolean {
		return Boolean(this.options.textField?.validateOnBlur);
	}

	/** Parse a date with dateFormatReturn format to internal format */
	parseDateForModel(date: string): string {
		const parsed = parseDate(date, this.dateFormatReturn);

		if (!parsed.isValid()) {
			return '';
		}

		return parsed.format(INTERNAL_FORMAT);
	}

	parseTextFieldDate(date: string): string {
		const formatted = parseDate(date, this.dateFormat);

		// If the date isn't valid, return empty string
		if (!date.match(DATE_FORMAT_REGEX) || !formatted.isValid()) {
			return '';
		}

		return formatted.format(INTERNAL_FORMAT);
	}

	/** Set textField model by parsing this.date */
	setTextFieldModel(): void {
		this.textFieldDate = parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormat);
	}

	/**
	 * Format date with dayjs and dateFormat
	 *
	 * @example
	 * Format is '25/03/2018' with default dateFormat
	 */
	// Getter
	get dateFormatted(): string {
		/**
		 * If the date is empty, return now
		 * to avoid date parsing errors
		 */
		if (this.date === '') {
			return '';
		}
		/** Format this.date with dateFormat */
		const formatted = parseDate(this.date, 'YYYY-MM-DD').format(this.dateFormat);


		return formatted;
	}

	// Setter
	set dateFormatted(value: string) {
		this.textFieldDate = value;
	}

	/** Save the date from calendar */
	saveFromCalendar(): void {
		// Save the date using Vuetify method
		this.$refs.menu.save(this.date);

		// Update textField model
		this.setTextFieldModel();

		// Apply validation because when the calendar is clicked,
		// the input loose focus and fire textFieldBlur
		this.validate(this.textFieldDate);

		// If validateOnBlur is true
		if (this.validateOnBlurEnabled) {
			// Validate the text field
			// because no blur event is emitted
			this.validateVuetify();
		}

		this.emitChangeEvent();
	}

	/** Save the date from text field blur */
	saveFromTextField(): void {
		// Return if empty/falsy
		if (!this.textFieldDate) {
			// Clear v-model
			this.$emit('change', '');
			return;
		}

		const formatted = this.parseTextFieldDate(this.textFieldDate);

		// Set the internal date
		this.date = formatted;

		this.emitChangeEvent();
	}

	/** Update v-model */
	emitChangeEvent(): void {
		// Parse the date with internal format,
		// and return the date with dateFormatReturn format
		this.$emit('change', parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormatReturn));
	}

	/** Validate Vuetify rules */
	validateVuetify(): void {
		this.$nextTick(() => {
			// Set hasFocused to true on VTextField
			// to fix https://github.com/vuetifyjs/vuetify/issues/7876
			// (error messages aren't shown if the input hasn't been focused)
			if (this.$refs.input.hasFocused !== undefined) {
				this.$refs.input.hasFocused = true;
			}

			this.$refs.input.validate();
		});
	}

	/** Fired on blur event of the textField */
	textFieldBlur(): void {
		this.saveFromTextField();

		// If validateOnBlur is true, validate
		if (this.validateOnBlurEnabled) {
			this.validate(this.textFieldDate);
		}
	}
}
