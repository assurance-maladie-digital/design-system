<script lang="ts">
import { customizable } from '@/mixins/customizable'
import type { ValidationRule } from '@/rules/types'
import { mdiCalendar } from '@mdi/js'
import VueDatePicker from '@vuepic/vue-datepicker'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { vMaska } from 'maska'
import {
	type ComponentPublicInstance,
	defineComponent,
	nextTick,
	type PropType,
} from 'vue'
import { VTextField } from 'vuetify/lib/components/index.mjs'
import { config } from './config'
import WarningMixin from './WarningMixin'
import { isDateValid } from '@/rules/isDateValid'

dayjs.extend(customParseFormat)

export default defineComponent({
	mixins: [WarningMixin, customizable(config)],
	directives: { maska: vMaska },
	emits: ['update:modelValue'],
	components: {
		VueDatePicker,
	},
	data: () => ({
		textFieldValue: '',
		calendarValue: undefined as Date | undefined | [Date, Date] | [Date],
		calendarIcon: mdiCalendar,
		errorMessages: null as string[] | null,
	}),
	props: {
		modelValue: String as PropType<string | null>,
		dateFormat: {
			type: String as PropType<string>,
			default: 'DD/MM/YYYY',
		},
		dateFormatReturn: {
			type: String as PropType<string>,
			default: 'DD/MM/YYYY',
		},
		rules: {
			type: Array as PropType<Array<ValidationRule>>,
			default: () => [],
		},
		label: { type: String, default: '' },
		hint: { type: String, default: 'Format JJ/MM/AAAA' },
		clearable: { type: Boolean, default: false },
		noIcon: { type: Boolean, default: false },
		appendIcon: { type: Boolean, default: false },
		/** YYYY-MM-DD */
		startDate: {
			type: [String, Boolean] as PropType<string | false>,
			default: false,
		},
		birthdate: { type: Boolean, default: false },
		textFieldClass: { type: String, default: '' },
		showWeekends: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		textFieldActivator: { type: Boolean, default: false },
		noCalendar: { type: Boolean, default: false },
		outlined: { type: Boolean, default: false },
	},
	computed: {
		calendarDateFormat() {
			// cf : https://vue3datepicker.com/props/formatting/#format
			return this.dateFormat
				.split('')
				.map((char: string) =>
					char === 'M' ? 'M' : char.toLowerCase()
				)
				.join('')
		},
		textFieldFormat() {
			const mask = this.dateFormat.replace(/[a-zA-Z]/g, '#')
			return { mask: mask }
		},
		textFieldOptions() {
			return {
				...this.options.textField,
				type: 'text',
				label: this.label,
				hint: this.hint,
				variant: this.outlined ? 'outlined' : 'underlined',
				class: [
					{
						'warning-style': this.warningMessages.length,
						'error-style': this.errorMessages?.length,
					},
					this.textFieldClass,
				],
			}
		},
		internalValue() {
			// value to be used for validation
			if (!this.textFieldValue) return ''
			const date = dayjs(this.textFieldValue, this.dateFormat, true)
			return date.format('DD/MM/YYYY')
		},
		startDateFormatted() {
			return this.startDate
				? dayjs(this.startDate, 'YYYY-MM-DD').format(
						this.dateFormatReturn
					)
				: null
		},
		inputRules() {
			return [isDateValid, ...this.rules]
		},
		showAppendIcon() {
			return this.outlined || (!this.noIcon && this.appendIcon)
		},
		showPrependIcon() {
			return !this.noIcon && !this.showAppendIcon
		},
		iconSlotName() {
			if (this.showAppendIcon) {
				return 'append-inner'
			} else if (this.showPrependIcon) {
				return 'prepend'
			}
			return null
		},
	},
	watch: {
		modelValue: {
			handler(newValue) {
				const date = dayjs(newValue, this.dateFormatReturn)

				const newCalendarDate = date.isValid()
					? date.toDate()
					: undefined

				if (this.startDateFormatted) {
					const startDate = dayjs(
						this.startDate as string,
						'YYYY-MM-DD'
					).toDate()

					this.calendarValue = newCalendarDate
						? [startDate, newCalendarDate]
						: [startDate]
				} else {
					this.calendarValue = newCalendarDate
				}
				this.textFieldValue = newCalendarDate
					? dayjs(newCalendarDate).format(this.dateFormat)
					: ''
			},
			immediate: true,
		},
		startDate(newValue: string) {
			const start = dayjs(newValue, 'YYYY-MM-DD')
			const end = dayjs(this.textFieldValue, this.dateFormat, true)

			if (!start.isValid()) {
				this.calendarValue = end.toDate()
			} else if (!end.isValid()) {
				this.textFieldValue = ''
				this.calendarValue = [start.toDate()]
			} else if (start.isAfter(end)) {
				this.calendarValue = [start.toDate(), start.toDate()]
				this.textFieldValue = start.format(this.dateFormat)
				this.$emit(
					'update:modelValue',
					start.format(this.dateFormatReturn)
				)
			} else {
				this.calendarValue = [start.toDate(), end.toDate()]
			}
		},
	},
	methods: {
		toggleCalendar() {
			if (!this.$refs.calendar) return
			const calendar = this.$refs.calendar as ComponentPublicInstance<
				typeof VueDatePicker
			>
			if (!this.noCalendar && !this.textFieldActivator) {
				calendar.toggleMenu()
			}
		},
		handleCalendarUpdate(date: Date | [Date, Date]) {
			if (!date) return

			const selectedValue = Array.isArray(date) ? date[1] : date

			this.textFieldValue = dayjs(selectedValue).format(this.dateFormat)
			const emitDate = dayjs(selectedValue).format(this.dateFormatReturn)
			this.$emit('update:modelValue', emitDate)
			this.updateMessages()
		},
		handleFocusChange(focus: boolean) {
			if (!focus) {
				this.updateMessages()
			} else {
				if (this.textFieldActivator || this.noIcon) {
					if (!this.$refs.calendar) return
					const calendar = this.$refs
						.calendar as ComponentPublicInstance<
						typeof VueDatePicker
					>
					calendar.toggleMenu()
				}
			}
		},
		/**
		 * Store the errors and warnings message to display then ourselves
		 */
		async updateMessages() {
			const textField = this.$refs[
				'text-field'
			] as ComponentPublicInstance<typeof VTextField>
			if (!textField) return

			this.validateWarning(this.internalValue)
			await nextTick()
			this.errorMessages = await textField.validate()
		},
		handleTextInput(date: string, updateCalendar: (s: string) => void) {
			if (date === '') {
				updateCalendar('Invalid Date')
				this.$emit('update:modelValue', '')
				return
			}

			const newDate = dayjs(date, this.dateFormat, true)
			if (newDate.isValid()) {
				if (this.startDateFormatted) {
					// range mode
					const startDate = dayjs(
						this.startDate as string,
						'YYYY-MM-DD'
					).format(this.dateFormat)
					const endDate = newDate.format(this.dateFormat)
					updateCalendar(`${startDate} - ${endDate}`)
				} else {
					updateCalendar(date)
				}
			}

			if (date.length === this.dateFormat.length) {
				this.updateMessages()
			}
		},
		isWeekend(date: Date) {
			const dayOfWeek = date.getDay()
			return dayOfWeek === 0 || dayOfWeek === 6
		},
	},
})
</script>

<template>
	<div class="vd-date-picker">
		<VueDatePicker
			v-model="calendarValue"
			ref="calendar"
			v-bind="options.datePicker"
			@update:model-value="handleCalendarUpdate"
			:enable-time-picker="false"
			auto-apply
			:text-input="{ openMenu: false }"
			:format="calendarDateFormat"
			:range="startDate === false ? false : { fixedStart: true }"
			:flow="birthdate ? ['year', 'month', 'calendar'] : undefined"
			:clearable="false"
		>
			<template #dp-input="{ onInput, onFocus, onBlur, onClear }">
				<VTextField
					v-model="textFieldValue"
					ref="text-field"
					:clearable
					:rules="inputRules"
					:disabled="disabled"
					:validation-value="internalValue"
					v-bind="textFieldOptions"
					v-maska:[textFieldFormat]
					@update:modelValue="handleTextInput($event, onInput)"
					@update:focused="
						(e: boolean) => {
							handleFocusChange(e)
							e ? onFocus() : onBlur()
						}
					"
					@click:clear="onClear"
				>
					<template v-if="iconSlotName" #[iconSlotName]>
						<VIcon
							@click="toggleCalendar"
							v-bind="options.icon"
							tabindex="-1"
						>
							{{ calendarIcon }}
						</VIcon>
					</template>
					<template #message></template>
					<template #details>
						<div
							v-if="errorMessages?.length"
							role="alert"
							aria-live="polite"
							class="error-message"
						>
							<ul>
								<li v-for="error in errorMessages" :key="error">
									{{ error }}
								</li>
							</ul>
						</div>
						<div
							v-else-if="warningMessages.length"
							role="alert"
							aria-live="polite"
							class="warning-message"
						>
							<ul>
								<li
									v-for="warning in warningMessages"
									:key="warning"
								>
									{{ warning }}
								</li>
							</ul>
						</div>
						<div v-if="hint" class="hint-message">
							{{ hint }}
						</div>
					</template>
				</VTextField>
			</template>
			<template #day="{ date }">
				<div
					:class="showWeekends && isWeekend(date) ? 'week-ends' : ''"
				>
					{{ date.getDate() }}
				</div>
			</template>
		</VueDatePicker>
	</div>
</template>

<style lang="scss">
@import '@vuepic/vue-datepicker/dist/main.css';
:root {
	--dp-cell-border-radius: 99px; /*Specific border radius for the calendar cell*/
	--dp-cell-size: 31px; /*Width and height of calendar cell*/
	--dp-cell-padding: 5px; /*Padding in the cell*/
}
</style>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

:deep(.dp__theme_light) {
	--dp-primary-color: #2eb5e4;
	--dp-range-between-dates-background-color: #98daf2;
	--dp-range-between-dates-text-color: rgba(0, 0, 0, 0.87);
}

.vd-date-picker {
	:deep(.dp__button) {
		display: none !important;
	}

	:deep(.v-input__prepend > .v-icon) {
		opacity: 1;
	}

	.week-ends {
		background-color: #b3b4b5;
		border-radius: 57%;
		width: 39px;
		height: 25px;
		display: inline-block;
		padding-bottom: 1px;
	}

	:deep(.dp__cell_inner) {
		border-radius: 99px !important;
	}

	:deep(.dp__today) {
		border: 1px solid #2eb5e4 !important;
	}

	:deep(.dp__active_date) {
		background: #2eb5e4;
		color: var(--dp-primary-text-color);
	}

	:deep(.dp__range_start) {
		background: var(--dp-range-between-dates-background-color);
		color: var(--dp-range-between-dates-text-color);
	}

	:deep(.v-field__input) {
		min-height: 0;
	}

	:deep(.v-input__details) {
		padding-top: 0;
	}
}

:deep(.v-field--variant-outlined .v-field__outline__notch::after) {
	box-sizing: border-box;
}

:deep(.v-input__details) {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: rgba(0, 0, 0, 0.6);

	li {
		list-style-type: none;
		line-height: 1.3;
	}
}

:deep(.v-messages) {
	display: none;
}

.warning-style {
	:deep(.v-icon) {
		color: #f0b323 !important;
	}

	:deep(.v-label) {
		color: #f0b323 !important;
	}

	:deep(.warning-message) {
		color: #f0b323 !important;
	}

	:deep(.v-text-field) {
		border-color: #f0b323 !important;
	}

	:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
		color: #f0b323;
	}
}

.error-style {
	:deep(.v-icon) {
		color: #b33f2e !important;
	}

	:deep(.v-label) {
		color: #b33f2e !important;
	}

	:deep(.error-message) {
		color: #b33f2e !important;
	}

	:deep(.v-text-field) {
		border-color: #b33f2e !important;
	}

	:deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
		color: #b33f2e !important;
	}
}
</style>
