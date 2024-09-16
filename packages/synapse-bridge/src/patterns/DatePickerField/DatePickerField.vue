<script lang="ts">
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
import WarningMixin from './WarningMixin'
import { customizable } from '@/mixins/customizable'
import { config } from './config'

dayjs.extend(customParseFormat)

type DateFormat =
	| 'dd/MM/yyyy'
	| 'MM/dd/yyyy'
	| 'dd-MM-yyyy'
	| 'MM-dd-yyyy'
	| 'yyyy-MM-dd'
	| 'dd/MM/yy'
	| 'MM/dd/yy'
	| 'dd-MM-yy'
	| 'MM-dd-yy'

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
		modelValue: String,
		dateFormat: {
			type: String as PropType<DateFormat>,
			default: 'dd/MM/yyyy',
		},
		dateFormatReturn: {
			type: String as PropType<DateFormat>,
			default: 'dd/MM/yyyy',
		},
		rules: {
			type: Array as PropType<Array<ValidationRule>>,
			default: () => [],
		},
		label: { type: String, default: '' },
		hint: { type: String, default: 'Format JJ/MM/AAAA' },
		variant: {
			type: String as PropType<'outlined' | 'underlined'>,
			default: 'underlined',
		},
		noIcon: { type: Boolean, default: false },
		appendIcon: { type: Boolean, default: false },
		/** YYYY-MM-DD */
		startDate: { type: String, default: null },
		birthdate: { type: Boolean, default: false },
		textFieldClass: { type: String, default: '' },
		showWeekends: { type: Boolean, default: false },
	},
	computed: {
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
				variant: this.variant,
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
			const date = dayjs(
				this.textFieldValue,
				this.dateFormat.toUpperCase(),
				true
			)
			return date.format('DD/MM/YYYY')
		},
		showAppendIcon() {
			return (
				!this.noIcon && (this.variant === 'outlined' || this.appendIcon)
			)
		},
		showPrependIcon() {
			return !this.noIcon && this.variant !== 'outlined'
		},
		startDateFormatted() {
			return this.startDate
				? dayjs(this.startDate, 'YYYY-MM-DD').format(
						this.dateFormatReturn
					)
				: null
		},
	},
	watch: {
		modelValue: {
			handler(newValue) {
				const date = dayjs(
					newValue,
					this.dateFormatReturn.toUpperCase()
				)

				const newCalendarDate = date.isValid() ? date.toDate() : undefined

				if (this.startDateFormatted) {
					const startDate = dayjs(
						this.startDate,
						'YYYY-MM-DD'
					).toDate()

					this.calendarValue = newCalendarDate
						? [startDate, newCalendarDate]
						: [startDate]
				} else {
					this.calendarValue = newCalendarDate
				}
				this.textFieldValue = newCalendarDate
					? dayjs(newCalendarDate).format(this.dateFormat.toUpperCase())
					: ''
			},
			immediate: true,
		},
	},
	methods: {
		toggleCalendar() {
			if (!this.$refs.calendar) return
			const calendar = this.$refs.calendar as ComponentPublicInstance<
				typeof VueDatePicker
			>
			calendar.toggleMenu()
		},
		handleCalendarUpdate(date: Date | [Date, Date]) {
			if (!date) return

			const selectedValue = Array.isArray(date) ? date[1] : date

			this.textFieldValue = dayjs(selectedValue).format(
				this.dateFormat.toUpperCase()
			)
			const emitDate = dayjs(selectedValue).format(
				this.dateFormatReturn.toUpperCase()
			)
			this.$emit('update:modelValue', emitDate)
			this.updateMessages()
		},
		handleFocusChange(focus: boolean) {
			if (!focus) {
				this.updateMessages()
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
		/**
		 * Handle the conversion between the text field and the calendar
		 * in the case of the range mode is enabled by the use of the startDate prop
		 */
		textToCalendar(endDate: string, updateCalendar: (s: string) => void) {
			const format = this.dateFormat.toUpperCase()

			const newDate = dayjs(endDate, format, true)

			if (newDate.isValid()) {
				if (this.startDateFormatted) {
					const calendarFormat =
						dayjs(new Date()).format(format) +
						' - ' +
						newDate.format(format)
					updateCalendar(calendarFormat)
				} else {
					updateCalendar(endDate)
				}
			}
		},
		isWeekend(date: any) {
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
			:format="dateFormat"
			:range="startDate ? { fixedStart: true } : false"
			:flow="birthdate ? ['year', 'month', 'calendar'] : undefined"
		>
			<template #dp-input="{ onInput, onFocus, onBlur }">
				<VTextField
					v-model="textFieldValue"
					ref="text-field"
					:rules
					:validation-value="internalValue"
					v-bind="textFieldOptions"
					v-maska:[textFieldFormat]
					@update:modelValue="textToCalendar($event, onInput)"
					@update:focused="
						(e: boolean) => {
							handleFocusChange(e)
							e ? onFocus() : onBlur()
						}
					"
				>
					<template #append-inner v-if="showAppendIcon">
						<VIcon
							@click="toggleCalendar"
							v-bind="options.icon"
							tabindex="-1"
						>
							{{ calendarIcon }}
						</VIcon>
					</template>
					<template #prepend v-if="showPrependIcon">
						<VIcon
							@click="toggleCalendar"
							v-bind="options.icon"
							tabindex="-1"
						>
							{{ calendarIcon }}
						</VIcon>
					</template>
					<template #message>
						<div v-if="errorMessages">
							<ul>
								<li v-for="error in errorMessages" :key="error">
									{{ error }}
								</li>
							</ul>
						</div>
						<div v-if="warningMessages.length">
							<ul>
								<li
									v-for="warning in warningMessages"
									:key="warning"
								>
									{{ warning }}
								</li>
							</ul>
						</div>
						<div v-if="hint">
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
</style>

<style lang="scss" scoped>
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
}

:deep(.v-field--variant-outlined .v-field__outline__notch::after) {
	box-sizing: border-box;
}

.warning-style {
	:deep(.v-icon) {
		color: #f0b323 !important;
	}

	:deep(.v-label) {
		color: #f0b323 !important;
	}

	:deep(.v-messages) {
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

	:deep(.v-messages) {
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
