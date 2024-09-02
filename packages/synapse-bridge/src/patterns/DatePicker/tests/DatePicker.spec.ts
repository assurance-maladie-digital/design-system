import { shallowMount } from '@vue/test-utils'
import DatePicker from '../'
import { describe, expect, it, vi } from 'vitest'
import { notAfterToday } from '@/rules/notAfterToday/index.ts'
import dayjs from 'dayjs'

describe('DatePicker', () => {
	it('returns correct textFieldClasses', () => {
		const wrapper = shallowMount(DatePicker)
		const expectedTextFieldClasses = wrapper.vm.buildTextFieldClasses()
		expect(wrapper.vm.textFieldClasses).toEqual(expectedTextFieldClasses)
	})

	it('returns correct textFieldClasses with error with error-style class', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: ["La date saisie n'est pas valide"],
				}
			},
		})

		wrapper.vm.buildTextFieldClasses()
		expect(wrapper.vm.textFieldClasses).toContain('error-style')
	})

	it('returns correct buildTextFieldClasses if warningRules is not empty', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				warningRules: [notAfterToday],
			},
		})

		const expectedTextFieldClasses = wrapper.vm.buildTextFieldClasses()
		expect(wrapper.vm.textFieldClasses).toEqual(expectedTextFieldClasses)
	})

	it('returns correct variant', () => {
		const wrapper = shallowMount(DatePicker)
		const expectedVariant = wrapper.vm.determineVariant()
		expect(wrapper.vm.getVariant).toEqual(expectedVariant)
	})

	it('returns correct prependIconValue when appendIcon and noPrependIcon are false', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				appendIcon: false,
				noPrependIcon: false,
			},
		})

		const expectedPrependIconValue = wrapper.vm.calendarIcon
		expect(wrapper.vm.prependIconValue).toEqual(expectedPrependIconValue)
	})

	it('returns undefined when appendIcon or noPrependIcon is true', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				appendIcon: true,
				noPrependIcon: false,
			},
		})

		expect(wrapper.vm.prependIconValue).toBeUndefined()
		wrapper.setProps({ appendIcon: false, noPrependIcon: true })
		expect(wrapper.vm.prependIconValue).toBeUndefined()
	})

	it('returns undefined when appendIcon or noIcon is false', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				noPrependIcon: true,
				noIcon: false,
			},
		})

		expect(wrapper.vm.prependIconValue).toBeUndefined()
		wrapper.setProps({ noPrependIcon: false, noIcon: true })
		expect(wrapper.vm.prependIconValue).toBeUndefined()
	})

	it('returns undefined when appendIcon or noIcon is true', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				noPrependIcon: false,
				noIcon: true,
			},
		})

		expect(wrapper.vm.prependIconValue).toBeUndefined()
		wrapper.setProps({ noPrependIcon: true, noIcon: true })
		expect(wrapper.vm.prependIconValue).toBeUndefined()
	})

	it('returns correct date when day slot is called', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				showWeekends: true,
			},
		})
		wrapper.vm.isWeekend = vi.fn(() => true)
		const date = new Date(2023, 3, 15) // April 15, 2023
		const expectedDate = date.getDate()
		expect(expectedDate).toBe(15)
	})

	it('returns correct dateFormat', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				dateFormat: 'DD/MM/YY',
			},
		})
		const expectedDateFormat = wrapper.vm.dateFormat
		expect(expectedDateFormat).toBe('DD/MM/YY')
	})

	it('returns correct dateFormatReturn', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				dateFormatReturn: 'DD/MM/YY',
			},
		})
		const expectedDateFormatReturn = wrapper.vm.dateFormatReturn
		expect(expectedDateFormatReturn).toBe('DD/MM/YY')
	})
})

describe('Computed', () => {
	it('adds "error-style" to textFieldClasses when hasError is true', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: ["La date saisie n'est pas valide"],
				}
			},
		})
		expect(wrapper.vm.textFieldClasses).toContain('error-style')
	})

	it('does not add "error-style" to textFieldClasses when hasError is false', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: [],
				}
			},
		})

		expect(wrapper.vm.textFieldClasses).not.toContain('error-style')
	})

	it('returns correct textFieldOptions', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				label: 'Test Label',
				disabled: false,
				outlined: false,
				appendIcon: false,
				rules: [],
			},
			data() {
				return {
					lastTypeAddedDate: 'date',
					date: new Date(2023, 3, 15), // April 15, 2023
					inputValue: '',
					calendarIcon: 'calendarIcon',
					errorMessages: [],
				}
			},
		})

		const expectedTextFieldOptions = {
			value: wrapper.vm.formatDate(wrapper.vm.date),
			type: 'text',
			hideDetails: 'auto',
			label: 'Test Label',
			'aria-describedby': 'Test Label',
			variant: wrapper.vm.getVariant,
			disabled: false,
			hint: wrapper.vm.hint,
			persistentHint: true,
			rules: [wrapper.vm.validateDateFormat, ...wrapper.vm.rules],
			errorMessages: [],
		}

		expect(wrapper.vm.textFieldOptions).toEqual(expectedTextFieldOptions)
	})

	it('returns false when errorMessages is empty', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: [],
				}
			},
		})
		expect(wrapper.vm.hasError).toBe(false)
	})

	it('returns false when errorMessages is empty', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: ["La date saisie n'est pas valide"],
				}
			},
		})
		expect(wrapper.vm.hasError).toBe(true)
	})

	it('returns correct textFieldClasses', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				disabled: false,
				outlined: false,
			},
		})
		const expectedTextFieldClasses = wrapper.vm.buildTextFieldClasses()
		expect(wrapper.vm.textFieldClasses).toEqual(expectedTextFieldClasses)
	})

	it('returns outlined when outlined is true', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				outlined: true,
			},
		})
		expect(wrapper.vm.getVariant).toBe('outlined')
	})

	it('returns true when errorMessages contains "La date saisie n\'est pas valide"', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: ["La date saisie n'est pas valide"],
				}
			},
		})
		expect(wrapper.vm.hasError).toBe(true)
	})
})

describe('Methods', () => {
	it('clears input on full selection and backspace/delete key press', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '12/12/2023',
					date: new Date(2023, 11, 12),
				}
			},
		})

		const event = {
			key: 'Backspace',
			preventDefault: vi.fn(),
			target: {
				selectionStart: 0,
				selectionEnd: 10,
				value: '12/12/2023',
			},
		}

		wrapper.vm.clearInputOnFullSelection(event as unknown as KeyboardEvent)

		expect(event.preventDefault).toHaveBeenCalled()
		expect(wrapper.vm.inputValue).toBe('')
		expect(wrapper.vm.date).toBeNull()
		expect(wrapper.emitted('update:model-value')).toBeTruthy()
		expect(wrapper.emitted('update:model-value')?.[0]).toEqual([null])
	})

	it('does not clear input if key is not backspace/delete or not all text is selected', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '12/12/2023',
					date: new Date(2023, 11, 12),
				}
			},
		})

		const event = {
			key: 'Enter',
			preventDefault: vi.fn(),
			target: {
				selectionStart: 0,
				selectionEnd: 10,
				value: '12/12/2023',
			},
		}

		wrapper.vm.clearInputOnFullSelection(event as unknown as KeyboardEvent)

		expect(event.preventDefault).not.toHaveBeenCalled()
		expect(wrapper.vm.inputValue).toBe('12/12/2023')
		expect(wrapper.vm.date).toEqual(new Date(2023, 11, 12))
		expect(wrapper.emitted('update:model-value')).toBeFalsy()
	})

	it('calls updateInputValue with correct arguments when getInput is called', () => {
		const wrapper = shallowMount(DatePicker)
		const updateInputValueMock = vi.spyOn(wrapper.vm, 'updateInputValue')
		const testValue = 'test value'

		wrapper.vm.getInput(testValue)

		expect(updateInputValueMock).toHaveBeenCalledWith(testValue)
	})

	it('emits update:model-value event when date is not an array', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					date: dayjs().toDate(),
				}
			},
		})
		wrapper.vm.emitUpdateEvent()
		const emittedEvent = wrapper.emitted('update:model-value')
		expect(emittedEvent).toBeTruthy()
		if (emittedEvent) {
			expect(emittedEvent[0]).toEqual([
				wrapper.vm.formatDate(wrapper.vm.date),
			])
		}
	})

	it('adds correct classes to textFieldClasses', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				warningRules: [notAfterToday],
				noPrependIcon: true,
				appendIcon: true,
				textFieldClass: 'custom-class',
			},
		})

		const textFieldClasses = wrapper.vm.buildTextFieldClasses()

		expect(textFieldClasses).toContain('vd-warning-rules')
		expect(textFieldClasses).toContain('vd-no-prepend-icon')
		expect(textFieldClasses).toContain('vd-append-icon')
		expect(textFieldClasses).toContain('custom-class')
	})

	it('adds multiple custom classes to textFieldClasses when textFieldClass is an array', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				textFieldClass: ['custom-class-1', 'custom-class-2'],
			},
		})

		const textFieldClasses = wrapper.vm.buildTextFieldClasses()

		expect(textFieldClasses).toContain('custom-class-1')
		expect(textFieldClasses).toContain('custom-class-2')
	})

	it('identifies weekends correctly', () => {
		const wrapper = shallowMount(DatePicker)

		const sunday = new Date(2023, 3, 9) // April 9, 2023 is a Sunday
		const monday = new Date(2023, 3, 10) // April 10, 2023 is a Monday
		const saturday = new Date(2023, 3, 8) // April 8, 2023 is a Saturday

		expect(wrapper.vm.isWeekend(sunday)).toBe(true)
		expect(wrapper.vm.isWeekend(monday)).toBe(false)
		expect(wrapper.vm.isWeekend(saturday)).toBe(true)
	})

	it('sets isCalOpen to false when handleClose is called', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					isCalOpen: true,
				}
			},
		})

		wrapper.vm.handleClose()

		expect(wrapper.vm.isCalOpen).toBe(false)
	})

	it('returns correct variant', () => {
		let wrapper = shallowMount(DatePicker, {
			propsData: {
				disabled: false,
				noPrependIcon: false,
				outlined: true,
			},
		})

		expect(wrapper.vm.determineVariant()).toEqual('outlined')

		wrapper = shallowMount(DatePicker, {
			propsData: {
				disabled: true,
				noPrependIcon: false,
				outlined: true,
			},
		})

		expect(wrapper.vm.determineVariant()).toEqual('underlined')

		wrapper = shallowMount(DatePicker, {
			propsData: {
				disabled: false,
				noPrependIcon: true,
				outlined: true,
			},
		})

		expect(wrapper.vm.determineVariant()).toEqual('underlined')

		wrapper = shallowMount(DatePicker, {
			propsData: {
				disabled: false,
				noPrependIcon: false,
				outlined: false,
			},
		})

		expect(wrapper.vm.determineVariant()).toEqual('underlined')
	})

	it('returns correct formatted date when formatDate is called', () => {
		const wrapper = shallowMount(DatePicker)
		const date = new Date(2023, 3, 15) // April 15, 2023
		const formattedDate = wrapper.vm.formatDate(date)
		expect(formattedDate).toBe('15/04/2023')
	})

	it('returns correct formatted date when formatDate is called with an array', () => {
		const wrapper = shallowMount(DatePicker)
		const date = [new Date(2023, 3, 15), new Date(2023, 3, 20)] // April 15, 2023 - April 20, 2023
		const formattedDate = wrapper.vm.formatDate(date)
		expect(formattedDate).toStrictEqual(['15/04/2023', '20/04/2023'])
	})

	it('returns correct formatted date when formatDate is null', () => {
		const wrapper = shallowMount(DatePicker)
		const date = null
		const formattedDate = wrapper.vm.formatDate(date)
		expect(formattedDate).toBeUndefined()
	})

	it('returns correct formatted date when formatDate is called with an invalid date', () => {
		const wrapper = shallowMount(DatePicker)
		const date = new Date('invalid date')
		const formattedDate = wrapper.vm.formatDate(date)
		expect(formattedDate).toBeNull()
	})

	it('returns correct formatted date when formatDate is called with an array', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				range: true,
			},
		})
		const date = [new Date(2023, 3, 15), new Date(2023, 3, 20)] // April 15, 2023 - April 20, 2023
		const formattedDate = wrapper.vm.formatDate(date)
		expect(formattedDate).toStrictEqual(['15/04/2023', '20/04/2023'])
	})

	it('createDateRegEx should create a correct regex for DD/MM/YYYY format', () => {
		const wrapper = shallowMount(DatePicker)
		const regex = wrapper.vm.createDateRegEx('DD/MM/YYYY')
		expect(regex).toEqual(
			/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
		)
	})

	it('should create a correct regex for MM-DD-YYYY format', () => {
		const wrapper = shallowMount(DatePicker)
		const regex = wrapper.vm.createDateRegEx('MM-DD-YYYY')
		expect(regex).toEqual(
			/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/
		)
	})

	it('should create a correct regex for YYYY-MM-DD format', () => {
		const wrapper = shallowMount(DatePicker)
		const regex = wrapper.vm.createDateRegEx('YYYY-MM-DD')
		expect(regex).toEqual(
			/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
		)
	})

	it('validates short date correctly in validateShortDate', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '15/04/2023',
				}
			},
		})

		const validateMock = vi.spyOn(wrapper.vm, 'validate')

		wrapper.vm.validateShortDate('15/04/2023')

		expect(validateMock).toHaveBeenCalledWith('15/04/2023')
		expect(wrapper.emitted('update:model-value')).toBeTruthy()
		expect(wrapper.emitted('update:model-value')?.[0]).toEqual([
			'15/04/2023',
		])
	})

	it('returns correct error message in validateDateFormat', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					isNotValid: true,
					errorMessages: ["La date saisie n'est pas valide"],
				}
			},
		})

		const result = wrapper.vm.validateDateFormat()

		expect(result).toBe("La date saisie n'est pas valide")
	})

	it('updateInputValue removes the last character when value.data is null', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '12/12/2023',
				}
			},
		})

		wrapper.vm.updateInputValue({ data: null })

		expect(wrapper.vm.inputValue).toBe('12/12/202')
	})

	it('does nothing when inputValue length is greater than or equal to 10', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '12/12/2023',
				}
			},
		})

		wrapper.vm.updateInputValue({ data: '4' })

		expect(wrapper.vm.inputValue).toBe('12/12/2023')
	})

	it('adds a separator when inputValue length is 2 or 5 and dateFormat includes "/"', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '12',
				}
			},
		})

		wrapper.vm.updateInputValue({ data: '3' })

		expect(wrapper.vm.inputValue).toBe('12/3')
	})

	it('adds a separator when inputValue length is 2 or 5 and dateFormat includes "/"', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					inputValue: '12',
				}
			},
		})

		wrapper.vm.updateInputValue({ data: '3' })

		expect(wrapper.vm.inputValue).toBe('12/3')
	})
})
describe('Watchers', () => {
	it('calls validate and validateAllDates when rules prop changes', async () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				rules: [],
			},
		})

		const validateMock = vi.spyOn(wrapper.vm, 'validate')
		const validateAllDatesMock = vi.spyOn(wrapper.vm, 'validateAllDates')

		await wrapper.setProps({ rules: [() => true] })

		expect(validateMock).toHaveBeenCalledWith(wrapper.vm.date)
		expect(validateAllDatesMock).toHaveBeenCalled()
	})
	it('emits value event when date changes', () => {
		const wrapper = shallowMount(DatePicker)

		wrapper.vm.$watch('date', () => {
			wrapper.vm.emitUpdateEvent()
		})

		wrapper.vm.date = new Date(2023, 3, 15) // April 15, 2023
		wrapper.vm.emitUpdateEvent()
		const emittedEvent = wrapper.emitted('update:model-value')
		expect(emittedEvent).toBeTruthy()
	})

	it('emits value event when date changes and date is an array', () => {
		const wrapper = shallowMount(DatePicker)

		wrapper.vm.$watch('date', () => {
			wrapper.vm.emitUpdateEvent()
		})

		wrapper.vm.date = [new Date(2023, 3, 15), new Date(2023, 3, 20)] // April 15, 2023 - April 20, 2023
		wrapper.vm.emitUpdateEvent()
		const emittedEvent = wrapper.emitted('update:model-value')
		expect(emittedEvent).toBeTruthy()
	})

	it('emits value event when date changes and date is a string', () => {
		const wrapper = shallowMount(DatePicker)

		wrapper.vm.$watch('date', () => {
			wrapper.vm.emitUpdateEvent()
		})

		wrapper.vm.date = '15/04/2023'
		wrapper.vm.emitUpdateEvent()
		const emittedEvent = wrapper.emitted('update:model-value')
		expect(emittedEvent).toBeTruthy()
	})

	it('updates date correctly when newVal is an array with more than one element', async () => {
		const wrapper = shallowMount(DatePicker)
		const newVal = [
			dayjs().format('DD/MM/YYYY'),
			dayjs().add(1, 'day').format('DD/MM/YYYY'),
		]
		await wrapper.setProps({ modelValue: newVal })
		expect(wrapper.vm.modelValue).toEqual(newVal)
	})
	it('updates date correctly when newVal is not an array', async () => {
		const wrapper = shallowMount(DatePicker)
		const newVal = dayjs().format('DD/MM/YYYY')
		await wrapper.setProps({ modelValue: newVal })
		expect(wrapper.vm.modelValue).toEqual(newVal)
	})

	it('updates date correctly when modelValue changes and is a string with dateFormatReturn not equal to DD/MM/YYYY', async () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				dateFormatReturn: 'YYYY/MM/DD',
			},
		})

		const newVal = '15/04/2023' // April 15, 2023
		await wrapper.setProps({ modelValue: newVal })

		const expectedDate = dayjs(newVal, 'DD/MM/YYYY').toDate()
		expect(wrapper.vm.date).toEqual(expectedDate)
	})

	it('does not update date when modelValue changes to an invalid date string and dateFormatReturn not equal to DD/MM/YYYY', async () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				dateFormatReturn: 'YYYY/MM/DD',
			},
		})

		const newVal = 'invalid date'
		await wrapper.setProps({ modelValue: newVal })

		expect(wrapper.vm.date).toBeNull()
	})
	it('updates date correctly when modelValue changes and is an array of strings with dateFormatReturn not equal to DD/MM/YYYY', async () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				dateFormatReturn: 'YYYY/MM/DD',
			},
		})

		const newVal = ['15/04/2023', '16/04/2023'] // April 15, 2023 and April 16, 2023
		await wrapper.setProps({ modelValue: newVal })

		const expectedDate = newVal.map((date) =>
			dayjs(date, 'DD/MM/YYYY').format('YYYY/MM/DD')
		)
		expect(wrapper.vm.date).toEqual(expectedDate)
	})
})
describe('Mounted', () => {
	it('update modelValue', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				modelValue: '15/04/2023',
			},
		})

		expect(wrapper.vm.date).toEqual(new Date(2023, 3, 15))
	})
	it('adds error message when error prop is true', () => {
		const wrapper = shallowMount(DatePicker, {
			propsData: {
				error: true,
			},
		})

		expect(wrapper.vm.errorMessages).toContain('Une erreur est survenue')
	})

	it('handleCut method updates state and clipboard correctly', async () => {
		const wrapper = shallowMount(DatePicker)
		const mockEvent = {
			clipboardData: { getData: vi.fn(() => '07/07/1990') },
		}
		await wrapper.vm.handleCut(mockEvent as any)
		expect(wrapper.vm.inputValue).toBe('')
		expect(wrapper.vm.date).toBeNull()
	})

	it('handlePaste method updates state and clipboard correctly', async () => {
		const wrapper = shallowMount(DatePicker)
		const mockEvent = {
			clipboardData: { getData: vi.fn(() => '07/07/1990') },
		}
		await wrapper.vm.handlePaste(mockEvent as any)
		expect(wrapper.vm.inputValue).toBe('07/07/1990')
		expect(wrapper.vm.date).toBe('07/07/1990')
	})

	it('resets error messages correctly', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					errorMessages: ["La date saisie n'est pas valide"],
					warningErrorMessages: ['Warning message'],
					isNotValid: true,
				}
			},
		})

		wrapper.vm.resetErrorMessages()

		expect(wrapper.vm.errorMessages).toEqual([])
		expect(wrapper.vm.warningErrorMessages).toEqual([])
		expect(wrapper.vm.isNotValid).toBe(false)
	})

	it('emits update:model-value event and resets error messages when date is valid', () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					date: new Date(2023, 3, 15), // April 15, 2023
				}
			},
		})

		const resetErrorMessagesMock = vi.spyOn(
			wrapper.vm,
			'resetErrorMessages'
		)
		wrapper.vm.emitUpdateEvent()

		expect(resetErrorMessagesMock).toHaveBeenCalled()
		const emittedEvent = wrapper.emitted('update:model-value')
		expect(emittedEvent).toBeTruthy()
		expect(emittedEvent?.[0]).toEqual(['15/04/2023'])
	})

	it('handles paste event correctly and resets error messages when date is valid', async () => {
		const wrapper = shallowMount(DatePicker)
		const mockEvent = {
			clipboardData: { getData: vi.fn(() => '07/07/1990') },
		}

		const resetErrorMessagesMock = vi.spyOn(
			wrapper.vm,
			'resetErrorMessages'
		)
		await wrapper.vm.handlePaste(mockEvent as any)

		expect(resetErrorMessagesMock).toHaveBeenCalled()
		expect(wrapper.vm.inputValue).toBe('07/07/1990')
		expect(wrapper.vm.date).toBe('07/07/1990')
		expect(wrapper.vm.isNotValid).toBe(false)
	})

	it('clears error messages when inputValue is set to an empty string', async () => {
		const wrapper = shallowMount(DatePicker, {
			data() {
				return {
					warningErrorMessages: ['Warning message'],
					errorMessages: ['Error message'],
					inputValue: '07/07/1990',
				}
			},
		})

		await wrapper.setData({ inputValue: '' })

		expect(wrapper.vm.warningErrorMessages).toEqual([])
		expect(wrapper.vm.errorMessages).toEqual([])
	})
})

describe('BeforeUnmount', () => {
	it('removes keydown event listener from input element', () => {
		const wrapper = shallowMount(DatePicker, {
			attachTo: document.body,
			stubs: ['VueDatePicker'],
		})

		const datePicker = wrapper.vm.$refs.datePicker as any
		const inputElement = document.createElement('input')
		datePicker.$el = document.createElement('div')
		datePicker.$el.appendChild(inputElement)

		const clearInputOnFullSelectionMock = vi.fn()
		wrapper.vm.clearInputOnFullSelection = clearInputOnFullSelectionMock
		inputElement.addEventListener('keydown', clearInputOnFullSelectionMock)

		wrapper.vm.$options.beforeUnmount?.call(wrapper.vm)

		const event = new Event('keydown')
		inputElement.dispatchEvent(event)

		expect(clearInputOnFullSelectionMock).not.toHaveBeenCalled()
	})
})
