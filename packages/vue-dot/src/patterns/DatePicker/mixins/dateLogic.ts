import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { parseDate } from '../../../helpers/parseDate';

import { Options } from '../../../mixins/customizable';

import { Refs } from '../../../types';

export const INTERNAL_FORMAT = 'YYYY-MM-DD';
export const INTERNAL_FORMAT_REGEX = /\d{4}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/;

const locales = {
	invalidDate: 'La date saisie n’est pas valide.'
};

const Props = Vue.extend({
	props: {
		dateFormat: {
			type: String,
			default: 'DD/MM/YYYY'
		},
		dateFormatReturn: {
			type: String,
			default: 'YYYY-MM-DD'
		},
		value: {
			type: String,
			default: ''
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component<DateLogic>({
	watch: {
		value: {
			handler(date: string): void {
				if (!date) {
					this.clearInternalModel();

					return;
				}

				const parsed = this.parseDateForModel(date);

				if (!parsed) {
					return;
				}

				this.date = parsed;
				this.setTextFieldModel();

				this.validate(this.textFieldDate);
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
	$refs!: Refs<{
		menu: {
			save: (date: string) => void;
		};
		input: {
			validate: () => boolean;
			hasFocused: boolean;
			hasError: boolean;
		};
	}>;

	// DatePicker mixin
	options!: Options;
	// WarningRules mixin
	validate!: (value: string) => void;

	/** YYYY-MM-DD format */
	date = '';

	/** DDMMYYYY format */
	textFieldDate = '';

	errorMessages: string[] | null = null;

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
				deep: true // Required since watching $refs object
			}
		);
	}

	get validateOnBlurEnabled(): boolean {
		return Boolean(this.options.textField?.validateOnBlur);
	}

	/** Parse a date with dateFormatReturn format to internal format */
	parseDateForModel(date: string): string | null {
		const parsed = parseDate(date, this.dateFormatReturn);

		if (!parsed.isValid()) {
			return null;
		}

		return parsed.format(INTERNAL_FORMAT);
	}

	parseTextFieldDate(date: string): string | null {
		const parsed = parseDate(date, this.dateFormat);
		const formatted = parsed.format(INTERNAL_FORMAT);

		if (!parsed.isValid() || !formatted.match(INTERNAL_FORMAT_REGEX)) {
			this.errorMessages = [locales.invalidDate];

			return null;
		}

		return formatted;
	}

	setTextFieldModel(): void {
		this.textFieldDate = parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormat);
	}

	get dateFormatted(): string {
		if (this.date === '') {
			return '';
		}

		const formatted = parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormat);

		return formatted;
	}

	set dateFormatted(value: string) {
		this.textFieldDate = value;
	}

	saveFromCalendar(): void {
		this.$refs.menu.save(this.date);

		this.setTextFieldModel();

		// Trigger validation when the calendar is clicked since
		// the input loose focus and fires textFieldBlur
		this.validate(this.textFieldDate);

		if (this.validateOnBlurEnabled) {
			// Validate the VTextField since no blur event is emitted
			this.validateVuetify();
		}

		this.emitChangeEvent();
	}

	saveFromTextField(): void {
		if (!this.textFieldDate) {
			this.$emit('change', '');
			this.clearInternalModel();

			return;
		}

		const formatted = this.parseTextFieldDate(this.textFieldDate);

		if (!formatted) {
			return;
		}

		this.date = formatted;
		this.emitChangeEvent();
	}

	saveFromPasted(event: ClipboardEvent): void {
		const value = event.clipboardData?.getData('text/plain');

		if (!value) {
			return;
		}

		const parsedWithDisplayFormat = parseDate(value, this.dateFormat);

		if (parsedWithDisplayFormat.isValid()) {
			this.date = parsedWithDisplayFormat.format(INTERNAL_FORMAT);
		}

		const parsedWithReturnFormat = parseDate(value, this.dateFormatReturn);

		if (parsedWithReturnFormat.isValid()) {
			this.date = parsedWithReturnFormat.format(INTERNAL_FORMAT);
		}

		this.emitChangeEvent();
	}

	clearInternalModel(): void {
		this.date = '';
		this.textFieldDate = '';
	}

	emitChangeEvent(): void {
		this.$emit('change', parseDate(this.date, INTERNAL_FORMAT).format(this.dateFormatReturn));
	}

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

	textFieldBlur(): void {
		this.saveFromTextField();

		if (this.validateOnBlurEnabled) {
			this.validate(this.textFieldDate);
		}
	}
}
