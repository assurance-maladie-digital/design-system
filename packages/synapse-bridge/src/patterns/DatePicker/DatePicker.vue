<script lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
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
	errorMessages: string[] | any
	warningErrorMessages: string[] | any
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
			type: [String, Number, Boolean, Array, Object] as PropType<
				| string
				| number
				| boolean
				| Array<any>
				| Record<string, any>
				| null
			>,
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
		customErrorMessages: {
			type: Array as PropType<Array<string>>,
			default: () => [],
		},
	},
	data(): DatePickerData {
		return {
			date: null as Date | null | any[],
			dateRangeTemp: [] as any[],
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
		indexedThis(): { [key: string]: any } {
			return this as any
		},
		textFieldOptions() {
			let errorMessages = this.$attrs.errorMessages
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
				errorMessages: errorMessages || [],
			}
		},

		hasError() {
			return (
				this.errorMessages.includes(
					"La date saisie n'est pas valide"
				) ||
				this.errorMessages.includes('Une erreur est survenue') ||
				this.customErrorMessages.some((msg) =>
					this.errorMessages.includes(msg)
				)
			)
		},
		textFieldClasses() {
			const textFieldClasses = this.buildTextFieldClasses()

			if (this.hasError) {
				textFieldClasses.push('error-style')
			}

			return textFieldClasses
		},
		getVariant() {
			return this.determineVariant()
		},
		prependIconValue() {
			if (!this.appendIcon && !this.noPrependIcon) {
				return this.calendarIcon
			}
			return undefined
		},
	},
	mounted() {
		// Check if the error prop is true
		if (this.error) {
			// If it is, add an error message
			this.errorMessages.push('Une erreur est survenue')
		}
		if (this.date) {
			this.$emit('update:model-value', this.formatDate(this.date))
		} else {
			this.$emit('update:model-value', null)
		}
	},
	watch: {
		date(newVal, oldVal) {
			if (newVal === oldVal) {
				return
			}
			if (newVal) {
				this.lastTypeAddedDate = 'date'
				this.$emit('change', newVal)
				if (typeof newVal === 'string' && newVal.length === 10) {
					this.$emit('update:model-value', this.formatDate(newVal))
					this.validate(newVal) // Add validate call
				}
			}
		},
		modelValue(newVal, oldVal) {
			if (newVal === oldVal) {
				return
			}

			const parseDate = (dateStr: string) => {
				const [day, month, year] = dateStr.split(/[-/]/)
				return new Date(Number(year), Number(month) - 1, Number(day))
			}

			const formatAndValidateDate = (dateStr: string) => {
				const dateToFormat = dayjs(dateStr, 'DD/MM/YYYY')
				const formattedDate = dateToFormat.toDate()
				if (formattedDate.toString() !== 'Invalid Date') {
					this.date = formattedDate
					this.validate(dateStr)
				}
			}

			if (typeof newVal === 'string') {
				if (this.dateFormatReturn === 'DD/MM/YYYY') {
					this.date = parseDate(newVal)
					if (newVal.length === 10) {
						this.validate(newVal)
						this.inputValue = newVal
					}
				} else {
					formatAndValidateDate(newVal)
				}
			} else if (Array.isArray(newVal)) {
				if (this.dateFormatReturn === 'DD/MM/YYYY') {
					this.date = newVal.map((date) => parseDate(date))
				} else {
					this.date = newVal
						.map((date) => {
							const formattedDate = dayjs(
								date,
								'DD/MM/YYYY'
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
		inputValue(newVal, oldVal) {
			if (newVal === oldVal) {
				return
			}

			const isValidInput = (value: string) => /^[\d/-]+$/.test(value)
			const truncateInput = (value: string, maxLength: number) =>
				value.slice(0, maxLength)

			if (!isValidInput(newVal)) {
				this.inputValue = truncateInput(newVal, newVal.length - 1)
			}

			if (newVal.length > 10) {
				this.inputValue = truncateInput(newVal, 10)
			}

			if (newVal.length === 0) {
				this.clearErrors()
				this.date = null
				this.$emit('update:model-value', null)
			}

			this.lastTypeAddedDate = 'inputValue'
		},
	},
	created() {
		if (typeof this.modelValue === 'string') {
			const [day, month, year] = this.modelValue.split(/[-/]/)
			this.date = new Date(Number(year), Number(month) - 1, Number(day))
			this.inputValue = this.modelValue
		}
	},
	methods: {
		clearErrors() {
			this.errorMessages = []
			this.warningErrorMessages = []
		},
		resetErrorMessages() {
			this.clearErrors()
			this.isNotValid = false
		},
		emitUpdateEvent() {
			if (this.date) {
				this.resetErrorMessages()
				const formattedDate = this.formatDate(this.date)
				this.$emit('update:model-value', formattedDate)

				// Mise à jour explicite de indexedThis[historyKey] si le format de retour est différent de DD/MM/YYYY
				if (this.dateFormatReturn !== 'DD/MM/YYYY') {
					this.indexedThis['inputValue'] = formattedDate
				}
			}
		},
		isWeekend(date: any) {
			const dayOfWeek = date.getDay()
			return dayOfWeek === 0 || dayOfWeek === 6
		},
		handleIconClickGeneric(event: any, datePickerRef: any) {
			const datePicker = this.$refs[datePickerRef]
			event.stopPropagation()
			this.isCalOpen = !this.isCalOpen
			if (!this.noCalendar && datePicker && !this.textFieldActivator) {
				// from https://vue3datepicker.com/methods-and-events/methods/#openmenu
				// @ts-ignore
				this.isCalOpen ? datePicker.openMenu() : datePicker.closeMenu()
			}
		},
		handleIconClick(event: any) {
			this.handleIconClickGeneric(event, 'datePicker')
		},
		rangeHandleIconClick(event: any) {
			this.handleIconClickGeneric(event, 'rangeDatePicker')
		},
		blockOpenOnclickGeneric(datePickerRef: any) {
			const datePicker = this.$refs[datePickerRef] as InstanceType<
				typeof VueDatePicker
			>
			if (
				(!this.isCalOpen &&
					!this.noPrependIcon &&
					!this.textFieldActivator) ||
				this.noCalendar
			) {
				datePicker.closeMenu()
			} else {
				this.isCalOpen = !this.isCalOpen
			}
		},
		blockOpenOnclick() {
			this.blockOpenOnclickGeneric('datePicker')
		},
		blockOpenOnclickRangePicker() {
			this.blockOpenOnclickGeneric('rangeDatePicker')
		},
		handleClose() {
			this.isCalOpen = false
		},
		formatDate(date: any): any {
			if (!date) {
				return
			}
			if (Array.isArray(date)) {
				return date.map((d) => this.formatDate(d))
			}
			if (!dayjs(date).isValid()) {
				return this.inputValue || null
			}
			if (this.range) {
				return dayjs(date).format(this.dateFormat)
			}
			if (this.dateFormatReturn) {
				this.$emit(
					'update:model-value',
					dayjs(date).format(this.dateFormatReturn)
				)
			}
			return dayjs(date).format(this.dateFormat)
		},
		createDateRegEx(format: string) {
			const day = '(0[1-9]|[12][0-9]|3[01])'
			const month = '(0[1-9]|1[012])'
			const year = '(19|20)\\d\\d'

			const formatMapping: { [key: string]: string } = {
				DD: day,
				MM: month,
				YYYY: year,
			}

			// Determine the position of the separator based on the date format
			const separatorPosition =
				format.indexOf('/') !== -1
					? format.indexOf('/')
					: format.indexOf('-')
			const separator = format[separatorPosition]

			const parts = format.split(separator)

			const regexParts = parts.map((part) => formatMapping[part])

			// Check if all parts are supported
			for (const part of parts) {
				if (!formatMapping.hasOwnProperty(part)) {
					throw new Error(`Unsupported date format part: ${part}`)
				}
			}

			const regexString = `^${regexParts.join('[- /.]')}$`

			return new RegExp(regexString)
		},
		updateInputValue(
			value: { data: string | null },
			historyKey: string
		): void {
			// Gérer la suppression de caractères
			if (value.data === null) {
				this.removeLastCharacter(historyKey)
				return
			}

			// Limiter la longueur de l'input à 10 caractères
			if (this.isMaxLength(historyKey, 10)) {
				return
			}

			// Ajouter un séparateur après le deuxième et cinquième caractère
			if (this.shouldAddSeparator(historyKey)) {
				this.addSeparator(historyKey)
			}

			// Ajouter le caractère saisi si ce n'est pas un séparateur
			if (this.isNotSeparator(value.data)) {
				this.appendCharacter(historyKey, value.data)
			}

			// Valider et formater la date lorsque la longueur atteint 10 caractères
			if (this.isMaxLength(historyKey, 10)) {
				this.validateAndFormatDate(historyKey)
			}
		},

		removeLastCharacter(historyKey: string) {
			this.indexedThis[historyKey] = this.indexedThis[historyKey].slice(
				0,
				-1
			)
		},

		isMaxLength(historyKey: string, maxLength: number) {
			return this.indexedThis[historyKey].length >= maxLength
		},

		shouldAddSeparator(historyKey: string) {
			const length = this.indexedThis[historyKey].length
			return length === 2 || length === 5
		},

		addSeparator(historyKey: string) {
			const separator = this.dateFormat.includes('/') ? '/' : '-'
			this.indexedThis[historyKey] += separator
		},

		isNotSeparator(char: string | null) {
			return char !== '/' && char !== '-'
		},

		appendCharacter(historyKey: string, char: string) {
			this.indexedThis[historyKey] += char
		},

		validateAndFormatDate(historyKey: string) {
			const date = dayjs(this.indexedThis[historyKey], this.dateFormat)
			const formattedDateReturn = dayjs(date).format(
				this.dateFormatReturn
			)

			if (!this.isShortDateFormat()) {
				this.validateFullDate(historyKey)
			} else {
				this.validateShortDate(historyKey, formattedDateReturn)
			}
		},

		isShortDateFormat() {
			return (
				this.dateFormatReturn === 'DD/MM/YY' ||
				this.dateFormatReturn === 'DD-MM-YY'
			)
		},

		validateFullDate(historyKey: string) {
			const dateRegEx = this.createDateRegEx(this.dateFormat)
			const isValidFormat = dateRegEx.test(this.inputValue)

			if (
				isValidFormat &&
				dayjs(this.inputValue, this.dateFormat, true).isValid()
			) {
				this.date = this.inputValue
				this.isNotValid = false
				this.$emit('update:model-value', this.indexedThis[historyKey])
			} else {
				this.isNotValid = true
				this.errorMessages.push(
					this.customErrorMessages.length > 0
						? this.customErrorMessages[0]
						: "La date saisie n'est pas valide"
				)
			}
		},

		validateShortDate(historyKey: string, formattedDateReturn: string) {
			this.validate(this.indexedThis[historyKey])
			this.$emit('update:model-value', formattedDateReturn)
		},
		validateDateFormat(): boolean | string {
			if (this.isNotValid) {
				return (
					ruleMessage(this.errorMessages, 'default') ||
					"La date saisie n'est pas valide"
				)
			}
			return true
		},
		getInput(value: any) {
			this.updateInputValue(value, 'inputValue')
		},

		stopInput() {
			this.indexedThis.inputValue = this.indexedThis.inputValue.slice(
				0,
				10
			)
		},

		validate(value: any) {
			const applyRules = (rules: any[]) =>
				rules
					.map((rule) => rule(value))
					.filter((result) => result !== true)

			this.errorMessages = this.rules ? applyRules(this.rules) : []
			this.warningErrorMessages = this.warningRules
				? applyRules(this.warningRules)
				: []

			if (this.error) {
				this.errorMessages.push('Une erreur est survenue')
			}

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
		buildTextFieldClasses() {
			const textFieldClasses = []

			if (this.warningRules && this.warningRules.length) {
				textFieldClasses.push('vd-warning-rules')
			}

			if (this.noPrependIcon) {
				textFieldClasses.push('vd-no-prepend-icon')
			}

			if (this.appendIcon) {
				textFieldClasses.push('vd-append-icon')
			}

			if (this.textFieldClass) {
				if (Array.isArray(this.textFieldClass)) {
					textFieldClasses.push(...this.textFieldClass)
				} else {
					textFieldClasses.push(this.textFieldClass)
				}
			}

			return textFieldClasses
		},
		determineVariant() {
			return this.disabled || this.noPrependIcon || !this.outlined
				? 'underlined'
				: 'outlined'
		},
		onClearInput() {
			this.date = null
			this.inputValue = ''
			this.$emit('update:model-value', null)
		},
		async handleCut(event?: ClipboardEvent) {
			if (event && event.clipboardData) {
				this.inputValue = ''
				this.date = null
				this.$emit('update:model-value', this.date)
			}
		},
		async handlePaste(event?: ClipboardEvent) {
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
					this.errorMessages.push(
						this.customErrorMessages.length > 0
							? this.customErrorMessages[0]
							: "La date saisie n'est pas valide"
					)
				}
			}
		},
	},
})
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
					:error-messages="[
						...errorMessages,
						...warningErrorMessages,
					]"
					:hint="hint"
					:label="label"
					:persistent-hint="true"
					:rules="[validateDateFormat, ...rules]"
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
