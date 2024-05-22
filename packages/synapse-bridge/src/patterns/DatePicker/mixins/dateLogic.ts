import { defineComponent } from "vue";

import { parseDate } from "@/helpers/parseDate";

import { Refs } from "@/types";
import { VMenu, VTextField } from "vuetify/components";
import { WarningRules } from "@/mixins/warningRules";
import dayjs from 'dayjs';

export const INTERNAL_FORMAT = "YYYY-MM-DD";
export const INTERNAL_FORMAT_REGEX =
	/\d{4}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/;

const locales = {
	invalidDate: "La date saisie n’est pas valide.",
};

export const DateLogic = defineComponent({
	mixins: [WarningRules],
	props: {
		dateFormat: {
			type: String,
			default: "DD/MM/YYYY",
		},
		dateFormatReturn: {
			type: String,
			default: "YYYY-MM-DD",
		},
		modelValue: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			$refs: {} as Refs<{
				menu: VMenu;
				input: VTextField;
			}>,

			/* Js date object */
			dateObject: new Date(this.modelValue),

			/** YYYY-MM-DD format */
			date: "",

			/** DD/MM/YYYY format */
			textFieldDate: "",

			errorMessages: null as string[] | null,
		};
	},
	watch: {
		modelValue: {
			// YYYY-MM-DD format
			handler(newDate: string): void {

				if (!newDate) {
					this.clearInternalModel();

					return;
				}

				const parsed = this.parseDatetoInternalFormat(newDate);

				if (!parsed) {
					return;
				}

				this.date = parsed;
				this.dateObject = new Date(parsed);
				this.setTextFieldModel();

				this.validate(this.textFieldDate);
				this.validateVuetify();
			},
			immediate: true,
		},
		/**
		 * This method is fired every time textFieldDate changes,
		 * that means on every key strokes, so don't validate
		 * on input if validateOnBlur is true
		 */
		textFieldDate(value: string): void {
			this.errorMessages = null;
			if (!this.validateOnBlurEnabled) {
				this.validate(value);
			}
		},
		date(): void {
			this.errorMessages = null;
		}
	},
	mounted() {
		// Watch VTextField 'hasError' computed value since 'update:error' event isn't reliable
		// (it's not fired at initial state and 'validateOnBlur' can cause issues as well)

		this.$watch(
			() => this.$refs.input.hasError,
			(error: boolean) => {
				this.$emit("error", error);
			},
			{
				deep: true, // Required since watching $refs object
			}
		);
	},
	computed: {
		validateOnBlurEnabled(): boolean {
			return true; //Boolean(this.options?.textField?.validateOnBlur);
		},
	},
	methods: {
		/** Parse a date with dateFormatReturn format to internal format */
		parseDatetoInternalFormat(date: string): string | null {
			const parsed = parseDate(date, this.dateFormatReturn);

			if (!parsed.isValid()) {
				return null;
			}

			return parsed.format(INTERNAL_FORMAT);
		},

		// Take a date in DD/MM/YYYY format and return it in YYYY-MM-DD format
		parseTextFieldDate(date: string): string | null {
			const parsed = parseDate(date, this.dateFormat);
			const formatted = parsed.format(INTERNAL_FORMAT);

			if (!parsed.isValid() || !formatted.match(INTERNAL_FORMAT_REGEX)) {
				this.errorMessages = [locales.invalidDate];

				return null;
			}

			return formatted;
		},

		setTextFieldModel(): void {
			this.textFieldDate = parseDate(this.date, INTERNAL_FORMAT).format(
				this.dateFormat
			);
		},

		saveFromCalendar(): void {
			this.date = dayjs(this.dateObject).format(INTERNAL_FORMAT);
			this.setTextFieldModel();

			// Trigger validation when the calendar is clicked since
			// the input loose focus and fires textFieldBlur
			this.validate(this.textFieldDate);

			if (this.validateOnBlurEnabled) {
				// Validate the VTextField since no blur event is emitted
				this.validateVuetify();
			}

			this.emitChangeEvent();
		},

		saveFromTextField(): void {
			if (!this.textFieldDate) {
				this.$emit("update:modelValue", "");
				this.clearInternalModel();

				return;
			}

			const formatted = this.parseTextFieldDate(this.textFieldDate);

			if (!formatted) {
				return;
			}

			this.date = formatted;
			this.emitChangeEvent();
		},

		saveFromPasted(event: ClipboardEvent): void {
			const value = event.clipboardData?.getData("text/plain");

			if (!value) {
				return;
			}

			const parsedWithDisplayFormat = parseDate(value, this.dateFormat);

			if (parsedWithDisplayFormat.isValid()) {
				this.date = parsedWithDisplayFormat.format(INTERNAL_FORMAT);
			}

			const parsedWithReturnFormat = parseDate(
				value,
				this.dateFormatReturn
			);

			if (parsedWithReturnFormat.isValid()) {
				this.date = parsedWithReturnFormat.format(INTERNAL_FORMAT);
			}

			this.emitChangeEvent();
		},

		clearInternalModel(): void {
			this.date = "";
			this.textFieldDate = "";
			this.dateObject = new Date();
		},

		emitChangeEvent(): void {
			this.$emit(
				"update:modelValue",
				parseDate(this.date, INTERNAL_FORMAT).format(
					this.dateFormatReturn
				)
			);
		},

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
		},

		textFieldBlur(): void {
			this.saveFromTextField();

			if (this.validateOnBlurEnabled) {
				this.validate(this.textFieldDate);
			}
		},
	},
});
