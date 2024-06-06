<script lang="ts">
import '@vuepic/vue-datepicker/dist/main.css';
import {defineComponent} from 'vue';
import type {PropType} from "vue";
import {mdiCalendar} from '@mdi/js';
import VueDatePicker from '@vuepic/vue-datepicker';
import dayjs from "dayjs";
import {WarningRules} from '@/mixins/warningRules/index.ts';
import {ErrorProp} from './mixins/errorProp';
import {customizable} from '@/mixins/customizable/index.ts';
import {config} from '@/patterns/DatePicker/config.ts';

type DatePickerFlow = ("calendar" | "month" | "year" | "time" | "minutes" | "hours" | "seconds")[];

interface DatePickerData {
	date: Date | null | any[] | string;
	dateRangeTemp: any[];
	format: string;
	inputValue: string;
	calendarIcon: string;
	errorMessages: string[] | any;
	birthdateFlow: DatePickerFlow;
	isCalOpen: boolean;
	lastTypeAddedDate: string;
	dayNames: string[];
}

export default defineComponent({
	emits: ['change', 'update:model-value', 'update:endDate', 'update:startDate', 'input'],
	components: {VueDatePicker},
	mixins: [ErrorProp, WarningRules, customizable(config)],
	props: {
		birthdate: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		appendIcon: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		noCalendar: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		noPrependIcon: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		showWeekends: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		outlined: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		textFieldActivator: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		clearable: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		modelValue: {
			type: [String, Number, Boolean, Array, Object, null] as PropType<string | number | boolean | Array<any> | Record<string, any> | null>,
			default: () => [],
		},
		label: {
			type: String as PropType<string>,
			default: '',
		},
		range: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
		rules: {
			type: Array as PropType<Array<any>>,
			default: () => [],
		},
		textFieldClass: {
			type: [String, Array] as PropType<string | Array<string>>,
			default: '',
		},
		hint: {
			type: String as PropType<string>,
			default: 'Format JJ/MM/AAAA',
		},
		dateFormat: {
			type: String as PropType<string>,
			default: 'DD/MM/YYYY',
		},
		dateFormatReturn: {
			type: String as PropType<string>,
			default: 'DD/MM/YYYY',
		},
	},
	data(): DatePickerData {
		return {
			date: null as Date | null | any[],
			dateRangeTemp: [] as any[],
			format: 'dd/MM/yyyy',
			inputValue: '',
			calendarIcon: mdiCalendar,
			errorMessages: [] as string[],
			birthdateFlow: ['year', 'month', 'calendar'],
			isCalOpen: false,
			lastTypeAddedDate: '',
			dayNames: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
		};
	},
	computed: {
		indexedThis(): { [key: string]: any } {
			return this as any;
		},
		textFieldOptions() {
			let errorMessages = this.$attrs.errorMessages;
			return {
				value: this.lastTypeAddedDate === 'date' ? this.formatDate(this.date) : this.inputValue,
				type: "text",
				hideDetails: "auto",
				label: this.label,
				"aria-describedby": this.label,
				variant: this.getVariant,
				disabled: this.disabled,
				hint: this.hint,
				prependIcon: !this.outlined ? this.prependIconValue : 'undefined',
				appendInnerIcon: (this.outlined || this.appendIcon) ? this.calendarIcon : undefined,
				persistentHint: true,
				color: "#0C419A",
				rules: this.rules,
				class: ['textFieldClasses', {'warning-style': this.errorMessages.length > 0}],
				errorMessages: errorMessages || [],
			};
		},

		hasError() {
			return this.errorMessages.includes('La date saisie n\'est pas valide') || this.errorMessages.includes('Une erreur est survenue');
		},
		textFieldClasses() {
			const textFieldClasses = this.buildTextFieldClasses();

			if (this.hasError) {
				textFieldClasses.push('error-style');
			}

			return textFieldClasses;
		},
		getVariant() {
			return this.determineVariant();
		},
		prependIconValue() {
			if (!this.appendIcon && !this.noPrependIcon) {
				return this.calendarIcon;
			}
			return undefined;
		},
	},
	mounted() {
		// Check if the error prop is true
		if (this.error) {
			// If it is, add an error message
			this.errorMessages.push('Une erreur est survenue');
		}
		this.$emit('update:model-value', this.formatDate(this.date));
	},
	watch: {
		date(newVal, oldVal) {
			if (newVal === oldVal) {
				return;
			}
			if (newVal) {
				this.lastTypeAddedDate = 'date';
				this.$emit('change', newVal);
				if (newVal.length === 10) {
					this.validate(newVal);
				}
				if (typeof newVal === 'string' && newVal.length === 10) {
					this.$emit('update:model-value', this.formatDate(newVal));
				}
				if (Array.isArray(newVal) && newVal.length === 2) {
					// TODO : add returnFormat for range
				}
			}
		},
		modelValue(newVal, oldVal) {
			if (newVal === oldVal) {
				return;
			}
			if (typeof newVal === 'string' && this.dateFormatReturn === 'DD/MM/YYYY') {
				const [day, month, year] = newVal.split(/[-/]/);
				this.date = new Date(Number(year), Number(month) - 1, Number(day));
				if (newVal.length === 10) {
					this.validate(newVal);
				}
			} else if (typeof newVal === 'string' && this.dateFormatReturn !== 'DD/MM/YYYY') {
				const dateToFormat = dayjs(newVal, 'DD/MM/YYYY');
				const formatedDate = dateToFormat.toDate();
				if (formatedDate.toString() !== 'Invalid Date') {
					this.date = formatedDate;
				}
			} else if (Array.isArray(newVal) && this.dateFormatReturn === 'DD/MM/YYYY') {
				this.date = newVal.map((date: any) => {
					const [day, month, year] = date.split(/[-/]/);

					return new Date(Number(year), Number(month) - 1, Number(day));
				});
			} else if (Array.isArray(newVal) && this.dateFormatReturn !== 'DD/MM/YYYY') {
				this.date = newVal.map((date: any) => {
					const dateToFormat = dayjs(date, 'DD/MM/YYYY').format(this.dateFormatReturn);
					if (dateToFormat.toString() !== 'Invalid Date') {
						return dateToFormat;
					}
				});
			}
		},
		inputValue(newVal, oldVal) {
			if (newVal === oldVal) {
				return;
			}
			if (!/^[\d/-]+$/.test(newVal)) {
				this.inputValue = newVal.slice(0, -1);
			}
			if (newVal.length > 10) {
				this.inputValue = newVal.slice(0, 10);
			}
			// if (newVal.length === 0) {
			// 	this.$emit('update:model-value', null);
			// }
			this.lastTypeAddedDate = 'inputValue'
		},
	},
	created() {
		if (typeof this.modelValue === 'string') {
			const [day, month, year] = this.modelValue.split(/[-/]/);
			this.date = new Date(Number(year), Number(month) - 1, Number(day));
		}
	},
	methods: {
		emitUpdateEvent() {
			if (this.date) {
				this.$emit('update:model-value', this.formatDate(this.date));
			}
		},
		isWeekend(date: any) {
			const dayOfWeek = date.getDay();
			return dayOfWeek === 0 || dayOfWeek === 6;
		},
		handleIconClickGeneric(event: any, datePickerRef: any) {
			const datePicker = this.$refs[datePickerRef];
			event.stopPropagation();
			this.isCalOpen = !this.isCalOpen;
			if (!this.noCalendar && datePicker && !this.textFieldActivator) {
				// from https://vue3datepicker.com/methods-and-events/methods/#openmenu
				// @ts-ignore
				this.isCalOpen ? datePicker.openMenu() : datePicker.closeMenu();
			}
		},
		handleIconClick(event: any) {
			this.handleIconClickGeneric(event, 'datePicker');
		},
		rangeHandleIconClick(event: any) {
			this.handleIconClickGeneric(event, 'rangeDatePicker');
		},
		blockOpenOnclickGeneric(datePickerRef: any) {
			const datePicker = this.$refs[datePickerRef] as InstanceType<typeof VueDatePicker>;
			if (!this.isCalOpen && !this.noPrependIcon && !this.textFieldActivator || this.noCalendar) {
				datePicker.closeMenu();
			} else {
				this.isCalOpen = !this.isCalOpen;
			}
		},
		blockOpenOnclick() {
			this.blockOpenOnclickGeneric('datePicker');
		},
		blockOpenOnclickRangePicker() {
			this.blockOpenOnclickGeneric('rangeDatePicker');
		},
		handleClose() {
			this.isCalOpen = false;
		},
		formatDate(date: any): any {
			if (!date) {
				return;
			}
			if (Array.isArray(date)) {
				return date.map(d => this.formatDate(d));
			}
			if (!dayjs(date).isValid()) {
				return this.inputValue || null;
			}
			if (this.range) {
				return dayjs(date).format(this.dateFormat);
			}
			if (this.dateFormatReturn) {
				this.$emit('update:model-value', dayjs(date).format(this.dateFormatReturn));
			}
			return dayjs(date).format(this.dateFormat);
		},
		createDateRegEx(format: string) {
			const day = "(0[1-9]|[12][0-9]|3[01])";
			const month = "(0[1-9]|1[012])";
			const year = "(19|20)\\d\\d";

			const formatMapping: { [key: string]: string } = {
				"DD": day,
				"MM": month,
				"YYYY": year
			};

			// Determine the position of the separator based on the date format
			const separatorPosition = format.indexOf("/") !== -1 ? format.indexOf("/") : format.indexOf("-");
			const separator = format[separatorPosition];

			const parts = format.split(separator);

			const regexParts = parts.map(part => formatMapping[part]);

			// Check if all parts are supported
			for (const part of parts) {
				if (!formatMapping.hasOwnProperty(part)) {
					throw new Error(`Unsupported date format part: ${part}`);
				}
			}

			const regexString = `^${regexParts.join('[- /.]')}$`;

			return new RegExp(regexString);
		},
		updateInputValue(value: { data: string | null }, historyKey: string): void {
			// If the input is cleared, remove the last character from the current value
			if (value.data === null) {
				this.indexedThis[historyKey] = this.indexedThis[historyKey].slice(0, -1);
				return;
			}

			// If the current value is already 10 characters long, don't add more
			if (this.indexedThis[historyKey].length >= 10) {
				return;
			}

			// If the current value is at 2 or 5 characters, add a separator (slash or dash)
			if (this.indexedThis[historyKey].length === 2 || this.indexedThis[historyKey].length === 5) {
				const separator = this.dateFormat.includes('/') ? '/' : '-';
				this.indexedThis[historyKey] += separator;
			}

			// If the input is a slash or dash, don't add it to the current value
			if (value.data !== '/' && value.data !== '-') {
				this.indexedThis[historyKey] += value.data;
			}

			// If the current value is 10 characters long, validate and format the date
			if (this.indexedThis[historyKey].length === 10) {
				const date = dayjs(this.indexedThis[historyKey], this.dateFormat);
				const formattedDateReturn = dayjs(date).format(this.dateFormatReturn);

				// If the date format is not 'DD/MM/YY', validate the date format and the date itself
				if (this.dateFormatReturn !== 'DD/MM/YY') {
					let dateRegEx = this.createDateRegEx(this.dateFormat);
					const isValidFormat = dateRegEx.test(this.inputValue);

					// If the date format and the date are valid, update the date and emit an update event
					if (isValidFormat){
						this.date = this.inputValue;
						this.$emit('update:model-value', this.indexedThis[historyKey]);
					} else {
						// If the date format or the date is not valid, add an error message
						this.errorMessages.push('La date saisie n\'est pas valide');
					}
				} else {
					// If the date format is 'DD/MM/YY', emit an update event with the formatted date
					this.$emit('update:model-value', formattedDateReturn);
					this.$emit('input', formattedDateReturn);
				}
			}
		},
		getInput(value: any) {
			this.updateInputValue(value, 'inputValue');
		},

		stopInput() {
			this.indexedThis.inputValue = this.indexedThis.inputValue.slice(0, 10);
		},

		validate(value: any) {
			const allRules = [...(this.warningRules || []), ...(this.rules || [])];
				const ruleErrors = allRules
					.map((rule: any) => rule(value))
					.filter(result => result !== true);
				this.errorMessages = ruleErrors.length > 0 ? ruleErrors : [];
			// Check if the error prop is true
			if (this.error) {
				// If it is, add an error message
				this.errorMessages.push('Une erreur est survenue');
			}
		},
		buildTextFieldClasses() {
			const textFieldClasses = [];

			if (this.warningRules && this.warningRules.length) {
				textFieldClasses.push('vd-warning-rules');
			}

			if (this.noPrependIcon) {
				textFieldClasses.push('vd-no-prepend-icon');
			}

			if (this.appendIcon) {
				textFieldClasses.push('vd-append-icon');
			}

			if (this.textFieldClass) {
				if (Array.isArray(this.textFieldClass)) {
					textFieldClasses.push(...this.textFieldClass);
				} else {
					textFieldClasses.push(this.textFieldClass);
				}
			}

			return textFieldClasses;
		},
		determineVariant() {
			return (this.disabled || this.noPrependIcon || !this.outlined) ? 'underlined' : 'outlined';
		},
		onClear() {
			this.date = null;
			this.inputValue = '';
			this.$emit('update:model-value', null);
		},
		handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Backspace' || event.key === 'Delete') {
				this.inputValue = '';
				this.date = null;
				this.$emit('update:model-value', null);
			}
		},
	},
});
</script>

<template>
	<div class="vd-date-picker">
		<!--	doc:	https://vue3datepicker.com-->
		<VueDatePicker
			v-model="date"
			ref="datePicker"
			auto-apply
			calendar-cell-class-name="dp-custom-cell"
			hide-offset-dates
			input-class-name="dp-custom-input"
			locale="fr"
			:clearable="false"
			:day-names="dayNames"
			:enable-time-picker="false"
			:flow="birthdate ? birthdateFlow : undefined"
			:format="format"
			:range="range"
			@close="handleClose"
			@input="getInput"
			@blur="stopInput"
			@open="blockOpenOnclick"
			@update:model-value="emitUpdateEvent"
		>
			<template #day="{ date }">
				<div :class="showWeekends && isWeekend(date) ? 'week-ends' : ''">
					{{ date.getDate() }}
				</div>
			</template>
			<template #dp-input="{}">
				<v-text-field
					:model-value="date"
					v-bind="textFieldOptions"
					color="#0C419A"
					hide-details="auto"
					:append-inner-icon="(outlined || appendIcon) ? calendarIcon : undefined"
					:aria-describedby="label"
					:class="['textFieldClasses', {'warning-style': errorMessages.length > 0, 'error-style': hasError, 'range': range}]"
					:clearable="clearable"
					:disabled="disabled"
					:error-messages="errorMessages"
					:hint="hint"
					:label="label"
					:prepend-icon="!outlined ? prependIconValue : undefined"
					:persistent-hint="true"
					:rules="rules"
					:readonly="range"
					:value="lastTypeAddedDate === 'date' ? formatDate(date) : inputValue"
					:variant="getVariant"
					@blur="emitUpdateEvent"
					@keydown="handleKeyDown"
					@click:append="handleIconClick"
					@click:append-inner="handleIconClick"
					@click:clear="onClear"
					@click:prepend="handleIconClick"
					@click:prepend-inner="handleIconClick"
				></v-text-field>
			</template>
		</VueDatePicker>
	</div>
</template>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

//surcharge du style du composant VueDatePicker
:deep(.dp__button) {
	display: none !important;
}

.week-ends {
	background-color: #b3b4b5;
	border-radius: 57%;
	width: 39px;
	height: 25px;
	display: inline-block;
	padding-bottom: 1px;
}

:deep(.dp__today) {
	border: 1px solid #2eb5e4 !important;
	color: #2eb5e4;
	border-radius: 50%;
}

:deep(.dp__active_date) {
	background: #2eb5e4;
	color: var(--dp-primary-text-color);
	border-radius: 50%;
}

:deep(.dp__date_hover:hover) {
	border-radius: 50%;
}

:deep(.v-field__input) {
	min-height: 0;
}

:deep(.v-input__details) {
	padding-top: 0;
}

:deep(.v-field--variant-outlined .v-field__outline__notch::after) {
	height: calc(100% - 1px);
}

:deep(.v-field--variant-outlined.v-field--focused .v-field__outline__notch::after) {
	height: calc(100% - 2px);
}

:deep(.dp__clear_icon) {
	top: 35%;
	right: 4%;
	border-radius: 50%;
	height: 20px;
	min-width: 16px;
}

:deep(.vd-append-icon ~.dp__clear_icon) {
	right: 35px;
}

.warning-style {
	:deep(.v-icon) {
		color: #F0B323 !important;
	}

	:deep(.v-label) {
		color: #F0B323 !important;
	}

	:deep(.v-messages) {
		color: #F0B323 !important;
	}

	:deep(.v-text-field) {
		border-color: #F0B323 !important;
	}

	:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
		color: #F0B323;
	}
}

.error-style {
	:deep(.v-icon) {
		color: #B33F2E !important;
	}

	:deep(.v-label) {
		color: #B33F2E !important;
	}

	:deep(.v-messages) {
		color: #B33F2E !important;
	}

	:deep(.v-text-field) {
		border-color: #B33F2E !important;
	}

	:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
		color: #B33F2E;
	}
}
</style>
