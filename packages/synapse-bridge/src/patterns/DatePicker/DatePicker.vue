<script lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import { defineComponent } from 'vue'
import { ComponentPublicInstance } from 'vue'
import { mdiCalendar, mdiCloseCircle } from '@mdi/js'
import VueDatePicker from '@vuepic/vue-datepicker'
import dayjs from 'dayjs'
import { WarningRules } from '@/mixins/warningRules/index.ts'
import { ErrorProp } from './mixins/errorProp'
import { customizable } from '@/mixins/customizable/index.ts'
import { config } from '@/patterns/DatePicker/config.ts'
import { ruleMessage } from '../../helpers/ruleMessage'

type DatePickerFlow = (
	| 'calendar'
	| 'month'
	| 'year'
	| 'time'
	| 'minutes'
	| 'hours'
	| 'seconds'
)[]

interface DatePickerData {
	date: Date | null | any[] | string
	dateRangeTemp: any[]
	format: string
	inputValue: string
	calendarIcon: string
	closeIcon: string
	errorMessages: string[]
	warningErrorMessages: string[]
	birthdateFlow: DatePickerFlow
	isCalOpen: boolean
	lastTypeAddedDate: string
	dayNames: string[]
	isNotValid: boolean
}

export default defineComponent({
	emits: [
		'change',
		'update:model-value',
		'update:endDate',
		'update:startDate',
		'input',
	],
	components: { VueDatePicker },
	mixins: [ErrorProp, WarningRules, customizable(config)],
	props: {
		birthdate: { type: Boolean, default: false },
		appendIcon: { type: Boolean, default: false },
		noCalendar: { type: Boolean, default: false },
		noPrependIcon: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		showWeekends: { type: Boolean, default: false },
		outlined: { type: Boolean, default: false },
		textFieldActivator: { type: Boolean, default: false },
		clearable: { type: Boolean, default: false },
		modelValue: { type: [String, Date, Array], default: null },
		label: { type: String, default: '' },
		range: { type: Boolean, default: false },
		rules: { type: Array, default: () => [] },
		textFieldClass: { type: [String, Array], default: '' },
		hint: { type: String, default: 'Format JJ/MM/AAAA' },
		dateFormat: { type: String, default: 'DD/MM/YYYY' },
		dateFormatReturn: { type: String, default: 'DD/MM/YYYY' },
		customErrorMessages: { type: Array, default: () => [] },
	},
	data(): DatePickerData {
		return {
			date: null,
			dateRangeTemp: [],
			format: 'dd/MM/yyyy',
			inputValue: '',
			calendarIcon: mdiCalendar,
			closeIcon: mdiCloseCircle,
			errorMessages: [] as string[],
			warningErrorMessages: [] as string[],
			birthdateFlow: ['year', 'month', 'calendar'],
			isCalOpen: false,
			lastTypeAddedDate: '',
			dayNames: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
			isNotValid: false,
		}
	},
	computed: {
		filteredErrorMessages(): string[] {
			// todo: trouver pourquoi les messages d'erreur s'affichent en double (presents dans errorMessages + @/rules)
			return this.errorMessages
				.filter(
					(message: string) =>
						!message.includes(
							'La date doit être antérieure ou égale'
						)
				)
				.filter(
					(message: string) =>
						!message.includes(
							'La date doit être postérieure ou égale'
						)
				)
				.filter(
					(message: string) =>
						message !==
						'La date doit être antérieure ou égale à aujourd’hui.'
				)
				.filter(
					(message: string) =>
						message !==
						'La date doit être postérieure à aujourd’hui.'
				)
				.filter((message: string) => message !== 'Le champ est requis.')
		},
		combinedErrorMessages(): string[] {
			return Array.from(
				new Set([
					...this.filteredErrorMessages,
					...this.warningErrorMessages,
				])
			)
		},
		textFieldOptions(): any {
			return {
				value:
					this.lastTypeAddedDate === 'date'
						? this.formatDate(this.date)
						: this.inputValue,
				type: 'text',
				hideDetails: 'auto',
				label: this.label,
				'aria-describedby': this.label,
				variant: this.getVariant,
				disabled: this.disabled,
				hint: this.hint,
				persistentHint: true,
				rules: [this.validateDateFormat, ...this.rules],
				errorMessages: this.$attrs.errorMessages || [],
			}
		},
		hasError(): boolean {
			return (
				this.errorMessages.includes(
					"La date saisie n'est pas valide"
				) ||
				this.errorMessages.includes('Une erreur est survenue') ||
				this.customErrorMessages.some((msg: any) =>
					this.errorMessages.includes(msg)
				)
			)
		},
		textFieldClasses(): string[] {
			const classes = this.buildTextFieldClasses()
			if (this.hasError) classes.push('error-style')
			return classes
		},
		getVariant(): string {
			return this.determineVariant()
		},
		prependIconValue(): string | undefined {
			return !this.appendIcon && !this.noPrependIcon
				? this.calendarIcon
				: undefined
		},
	},
	mounted() {
		const datePicker = this.$refs.datePicker as ComponentPublicInstance<
			typeof VueDatePicker
		>
		if (datePicker && datePicker.$el) {
			const inputElement = datePicker.$el.querySelector(
				'input'
			) as HTMLInputElement
			if (inputElement) {
				inputElement.addEventListener(
					'keydown',
					this.clearInputOnFullSelection
				)
			}
		}
		if (this.error) this.errorMessages.push('Une erreur est survenue')
		this.initializeDate()
		this.validateAllDates()
	},
	watch: {
		modelValue: {
			immediate: true,
			handler(newVal) {
				this.handleModelValueChange(newVal)
			},
		},
		rules() {
			this.validate(this.date)
			this.validateAllDates()
		},
		inputValue(newVal) {
			this.validate(newVal)
		},
	},
	methods: {
		clearInputOnFullSelection(event: KeyboardEvent): void {
			const input = event.target as HTMLInputElement
			const isBackspaceOrDelete =
				event.key === 'Backspace' || event.key === 'Delete'
			const isAllSelected =
				input.selectionStart === 0 &&
				input.selectionEnd === input.value.length

			if (isBackspaceOrDelete && isAllSelected) {
				event.preventDefault()
				this.inputValue = ''
				this.date = null
				this.$emit('update:model-value', null)
			}
		},
		getInput(value: any): void {
			this.updateInputValue(value)
		},
		clearErrors(): void {
			this.errorMessages = []
			this.warningErrorMessages = []
		},
		resetErrorMessages(): void {
			this.clearErrors()
			this.isNotValid = false
		},
		emitUpdateEvent(): void {
			if (this.date) {
				this.resetErrorMessages()
				const formattedDate = this.formatDate(this.date)
				this.$emit('update:model-value', formattedDate)
				if (this.dateFormatReturn !== 'DD/MM/YYYY') {
					this.inputValue = formattedDate
				}
			}
		},
		isWeekend(date: any): boolean {
			const dayOfWeek = date.getDay()
			return dayOfWeek === 0 || dayOfWeek === 6
		},
		handleIconClick(event: any): void {
			event.stopPropagation()
			this.isCalOpen = !this.isCalOpen
			const datePicker = this.$refs.datePicker as ComponentPublicInstance<
				typeof VueDatePicker
			>
			if (
				datePicker &&
				!this.noCalendar &&
				datePicker &&
				!this.textFieldActivator
			) {
				this.isCalOpen ? datePicker.openMenu() : datePicker.closeMenu()
			}
		},
		blockOpenOnclick(): void {
			const datePicker = this.$refs.datePicker as ComponentPublicInstance<
				typeof VueDatePicker
			>
			if (
				(datePicker &&
					!this.isCalOpen &&
					!this.noPrependIcon &&
					!this.textFieldActivator) ||
				this.noCalendar
			) {
				datePicker.closeMenu()
			} else {
				this.isCalOpen = !this.isCalOpen
			}
		},
		handleClose(): void {
			this.isCalOpen = false
		},
		formatDate(date: any): any {
			if (!date) return
			if (Array.isArray(date)) return date.map((d) => this.formatDate(d))
			if (!dayjs(date).isValid()) return this.inputValue || null
			if (this.range) return dayjs(date).format(this.dateFormat)
			if (this.dateFormatReturn) {
				this.$emit(
					'update:model-value',
					dayjs(date).format(this.dateFormatReturn)
				)
			}
			return dayjs(date).format(this.dateFormat)
		},
		createDateRegEx(format: string): RegExp {
			const day = '(0[1-9]|[12][0-9]|3[01])'
			const month = '(0[1-9]|1[012])'
			const year = '(19|20)\\d\\d'
			const formatMapping: { [key: string]: string } = {
				DD: day,
				MM: month,
				YYYY: year,
			}
			const separator = format.includes('/') ? '/' : '-'
			const parts = format.split(separator)
			const regexParts = parts.map((part) => formatMapping[part])
			const part = parts.join(separator)
			if (parts.some((part) => !formatMapping[part]))
				throw new Error(`Unsupported date format part: ${part}`)
			return new RegExp(`^${regexParts.join('[- /.]')}$`)
		},
		updateInputValue(value: { data: string | null }): void {
			if (value.data === null) {
				this.inputValue = this.inputValue.slice(0, -1)
				return
			}
			if (this.inputValue.length >= 10) return
			if (this.inputValue.length === 2 || this.inputValue.length === 5) {
				this.inputValue += this.dateFormat.includes('/') ? '/' : '-'
			}
			if (value.data !== '/' && value.data !== '-') {
				this.inputValue += value.data
			}
			if (this.inputValue.length === 10) {
				const date = dayjs(this.inputValue, this.dateFormat)
				if (date.isValid()) {
					const formattedDateReturn = date.format(
						this.dateFormatReturn
					)
					if (!this.isShortDateFormat()) {
						this.validateFullDate()
					} else {
						this.validateShortDate(formattedDateReturn)
					}
				}
			}
		},
		isShortDateFormat(): boolean {
			return (
				this.dateFormatReturn === 'DD/MM/YY' ||
				this.dateFormatReturn === 'DD-MM-YY'
			)
		},
		validateFullDate(): void {
			const dateRegEx = this.createDateRegEx(this.dateFormat)
			const isValidFormat = dateRegEx.test(this.inputValue)
			if (
				isValidFormat &&
				dayjs(this.inputValue, this.dateFormat, true).isValid()
			) {
				this.date = this.inputValue
				this.isNotValid = false
				this.$emit('update:model-value', this.inputValue)
			} else {
				this.isNotValid = true
				const customErrorMessage = this.customErrorMessages[0]
				this.errorMessages.push(
					typeof customErrorMessage === 'string'
						? customErrorMessage
						: "La date saisie n'est pas valide"
				)
			}
		},
		validateShortDate(formattedDateReturn: string): void {
			this.validate(this.inputValue)
			this.$emit('update:model-value', formattedDateReturn)
		},
		validateDateFormat(): boolean | string {
			if (this.isNotValid) {
				const errorMessagesObject = this.errorMessages.reduce(
					(acc, message, index) => {
						acc[`error${index}`] = message
						return acc
					},
					{} as Record<string, string>
				)

				return (
					ruleMessage(errorMessagesObject, 'default') ||
					"La date saisie n'est pas valide"
				)
			}
			return true
		},
		stopInput(): void {
			this.inputValue = this.inputValue.slice(0, 10)
		},
		validate(value: any): void {
			const applyRules = (rules: any[]) =>
				rules
					.map((rule) => rule(value))
					.filter((result) => result !== true)
			this.errorMessages = this.rules ? applyRules(this.rules) : []
			this.warningErrorMessages = this.warningRules
				? applyRules(this.warningRules)
				: []
			if (this.error) this.errorMessages.push('Une erreur est survenue')
			if (this.dateFormatReturn !== 'DD/MM/YYYY') {
				const dateToFormat = dayjs(value, 'DD/MM/YYYY')
				const formattedDate = dateToFormat.toDate()
				if (formattedDate.toString() !== 'Invalid Date') {
					this.date = formattedDate
					this.$emit(
						'update:model-value',
						dayjs(formattedDate).format(this.dateFormatReturn)
					)
				}
			}
		},
		validateAllDates(): void {
			document
				.querySelectorAll('.vd-date-picker input')
				.forEach((input) => {
					const inputElement = input as HTMLInputElement
					const value = inputElement.value
					if (value) {
						this.validate(value)
					}
				})
		},
		buildTextFieldClasses(): string[] {
			const classes: string[] = []
			if (this.warningRules && this.warningRules.length)
				classes.push('vd-warning-rules')
			if (this.noPrependIcon) classes.push('vd-no-prepend-icon')
			if (this.appendIcon) classes.push('vd-append-icon')
			if (this.textFieldClass) {
				if (Array.isArray(this.textFieldClass)) {
					this.textFieldClass.forEach((cls) => {
						if (typeof cls === 'string') {
							classes.push(cls)
						}
					})
				} else {
					classes.push(this.textFieldClass)
				}
			}
			return classes
		},
		determineVariant(): string {
			return this.disabled || this.noPrependIcon || !this.outlined
				? 'underlined'
				: 'outlined'
		},
		onClearInput(): void {
			this.date = null
			this.inputValue = ''
			this.$emit('update:model-value', null)
		},
		async handleCut(event?: ClipboardEvent): Promise<void> {
			if (event && event.clipboardData) {
				this.inputValue = ''
				this.date = null
				this.$emit('update:model-value', this.date)
			}
		},
		async handlePaste(event?: ClipboardEvent): Promise<void> {
			if (event && event.clipboardData) {
				this.inputValue = event.clipboardData.getData('text')
				const isValidFormat = this.createDateRegEx(
					this.dateFormat
				).test(this.inputValue)
				if (
					isValidFormat &&
					dayjs(this.inputValue, this.dateFormat, true).isValid()
				) {
					this.resetErrorMessages()
					this.$emit('update:model-value', this.inputValue)
					this.date = this.inputValue
					this.isNotValid = false
				} else {
					this.isNotValid = true
					const customErrorMessage =
						typeof this.customErrorMessages[0] === 'string'
							? this.customErrorMessages[0]
							: "La date saisie n'est pas valide"
					this.errorMessages.push(customErrorMessage)
				}
			}
		},
		initializeDate(): void {
			if (typeof this.modelValue === 'string') {
				const date = dayjs(this.modelValue, this.dateFormat)
				if (date.isValid()) {
					this.date = date.toDate()
					this.inputValue = this.modelValue
				} else {
					this.date = this.modelValue
					this.inputValue = dayjs(this.modelValue).format(
						this.dateFormat
					)
				}
			}
		},
		handleModelValueChange(newVal: any): void {
			if (typeof newVal === 'string') {
				if (this.dateFormatReturn === 'DD/MM/YYYY') {
					this.date = this.parseDate(newVal)
					if (newVal.length === 10) {
						this.validate(newVal)
						this.inputValue = newVal
					}
				} else {
					this.formatAndValidateDate(newVal)
				}
			} else if (Array.isArray(newVal)) {
				if (this.dateFormatReturn === 'DD/MM/YYYY') {
					this.date = newVal.map((date) => this.parseDate(date))
					this.inputValue = newVal.join(', ')
				} else {
					this.date = newVal
						.map((date) => {
							const formattedDate = dayjs(
								date,
								this.dateFormat
							).format(this.dateFormatReturn)
							return formattedDate.toString() !== 'Invalid Date'
								? formattedDate
								: null
						})
						.filter((date) => date !== null)
				}
				this.validate(newVal)
			}
		},
		parseDate(dateStr: string): Date {
			const [day, month, year] = dateStr.split(/[-/]/)
			return new Date(Number(year), Number(month) - 1, Number(day))
		},
		formatAndValidateDate(dateStr: string): void {
			const dateToFormat = dayjs(dateStr, 'DD/MM/YYYY')
			const formattedDate = dateToFormat.toDate()
			if (formattedDate.toString() !== 'Invalid Date') {
				this.date = formattedDate
				this.inputValue = dateStr
				this.validate(dateStr)
			}
		},
	},
	beforeUnmount() {
		const datePicker = this.$refs.datePicker as ComponentPublicInstance<
			typeof VueDatePicker
		>
		if (datePicker && datePicker.$el) {
			const inputElement = datePicker.$el.querySelector(
				'input'
			) as HTMLInputElement
			if (inputElement) {
				inputElement.removeEventListener(
					'keydown',
					this.clearInputOnFullSelection
				)
			}
		}
	},
})
</script>

<template>
	<div class="vd-date-picker">
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
				<div
					:class="showWeekends && isWeekend(date) ? 'week-ends' : ''"
				>
					{{ date.getDate() }}
				</div>
			</template>
			<template #dp-input="{}">
				<VTextField
					:model-value="date"
					v-bind="textFieldOptions"
					hide-details="auto"
					color="#0C419A"
					:aria-describedby="label"
					:class="[
						textFieldClasses,
						{
							'warning-style': warningErrorMessages.length > 0,
							'error-style': hasError,
							range: range,
						},
					]"
					:clearable="clearable"
					:disabled="disabled"
					:error-messages="combinedErrorMessages"
					:hint="hint"
					:label="label"
					:persistent-hint="true"
					:rules="[validateDateFormat, ...rules]"
					:max-errors="5"
					:readonly="range"
					:value="
						lastTypeAddedDate === 'date'
							? formatDate(date)
							: inputValue
					"
					:variant="getVariant"
					@blur="emitUpdateEvent"
					@paste="handlePaste"
					@cut="handleCut"
				>
					<template
						#append-inner
						v-if="outlined || (appendIcon && calendarIcon)"
					>
						<VIcon
							@click="handleIconClick"
							tabindex="-1"
							aria-hidden="true"
						>
							{{ calendarIcon }}
						</VIcon>
					</template>
					<template #prepend v-if="!outlined && prependIconValue">
						<VIcon
							@click="handleIconClick"
							tabindex="-1"
							aria-hidden="true"
						>
							{{ calendarIcon }}
						</VIcon>
					</template>
					<template v-slot:clear v-if="clearable">
						<VIcon
							@click="onClearInput"
							tabindex="-1"
							aria-hidden="true"
						>
							{{ closeIcon }}
						</VIcon>
					</template>
				</VTextField>
			</template>
		</VueDatePicker>
	</div>
</template>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.vd-date-picker {
	//surcharge du style du composant VueDatePicker
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

	:deep(.dp__clear_icon) {
		top: 35%;
		right: 4%;
		border-radius: 50%;
		height: 20px;
		min-width: 16px;
	}

	:deep(.vd-append-icon ~ .dp__clear_icon) {
		right: 35px;
	}

	:deep(.v-icon) {
		color: rgba(0, 0, 0, 0.54) !important;
	}

	.v-text-field .v-field__clearable .v-icon {
		color: rgba(0, 0, 0, 0.54) !important;
		opacity: 1 !important;
	}

	.v-text-field .v-field--focused .v-field__clearable .v-icon {
		color: $vd-primary !important;
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
}
</style>
