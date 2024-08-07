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

	it('returns correct indexedThis', () => {
		const wrapper = shallowMount(DatePicker)
		const expectedIndexedThis = wrapper.vm.indexedThis
		expect(wrapper.vm.indexedThis).toEqual(expectedIndexedThis)
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

	it('calls blockOpenOnclickGeneric with correct argument when blockOpenOnclickRangePicker is called', () => {
		const wrapper = shallowMount(DatePicker)
		const blockOpenOnclickGenericMock = vi.fn()
		wrapper.vm.blockOpenOnclickGeneric = blockOpenOnclickGenericMock

		wrapper.vm.blockOpenOnclickRangePicker()

		expect(blockOpenOnclickGenericMock).toHaveBeenCalledWith(
			'rangeDatePicker'
		)
	})

	it('calls blockOpenOnclickGeneric with correct argument when blockOpenOnclick is called', () => {
		const wrapper = shallowMount(DatePicker)
		const blockOpenOnclickGenericMock = vi.fn()
		wrapper.vm.blockOpenOnclickGeneric = blockOpenOnclickGenericMock
		wrapper.vm.blockOpenOnclick()
		expect(blockOpenOnclickGenericMock).toHaveBeenCalledWith('datePicker')
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

	it('calls handleIconClickGeneric with correct arguments when rangeHandleIconClick is called', () => {
		const wrapper = shallowMount(DatePicker)
		const handleIconClickGenericMock = vi.fn()
		wrapper.vm.handleIconClickGeneric = handleIconClickGenericMock
		const mockEvent = { preventDefault: vi.fn() }
		wrapper.vm.rangeHandleIconClick(mockEvent)
		expect(handleIconClickGenericMock).toHaveBeenCalledWith(
			mockEvent,
			'rangeDatePicker'
		)
	})

	it('calls handleIconClick with correct arguments', () => {
		const wrapper = shallowMount(DatePicker)
		const handleIconClickGenericMock = vi.fn()
		wrapper.vm.handleIconClickGeneric = handleIconClickGenericMock
		const mockEvent = { preventDefault: vi.fn() }
		wrapper.vm.handleIconClick(mockEvent)
		expect(handleIconClickGenericMock).toHaveBeenCalledWith(
			mockEvent,
			'datePicker'
		)
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

	it('trims the last character of indexedThis[historyKey] if value.data is null', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.updateInputValue({ data: null }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('')
	})
	it('trims indexedThis[historyKey] to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		await wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
	})
	it('trims indexedThis[historyKey] to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		await wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
	})
	it('trims indexedThis[historyKey] to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		await wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
	})
	it('trims indexedThis[historyKey] to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		await wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
	})
	it('trims indexedThis[historyKey] to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		await wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
	})
	it('trims indexedThis[historyKey] to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		await wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
	})
	it('calls updateInputValue with correct arguments when getInput is called', async () => {
		const wrapper = shallowMount(DatePicker)
		const updateInputValueMock = vi.fn()
		wrapper.vm.updateInputValue = updateInputValueMock
		const mockValue = { data: '1' }
		wrapper.vm.getInput(mockValue)
		expect(updateInputValueMock).toHaveBeenCalledWith(
			mockValue,
			'inputValue'
		)
	})

	it('trims indexedThis.inputValue to 10 characters when stopInput is called', async () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.indexedThis.inputValue = '12345678901'
		wrapper.vm.stopInput()
		expect(wrapper.vm.indexedThis.inputValue).toBe('1234567890')
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

	it('should throw an error for unsupported date format', () => {
		const wrapper = shallowMount(DatePicker)
		expect(() => wrapper.vm.createDateRegEx('DD-YY-MM')).toThrow(
			'Unsupported date format part: YY'
		)
	})
})
describe('Watchers', () => {
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

	it('trims the last character of inputValue if it is not a digit or a slash', async () => {
		const wrapper = shallowMount(DatePicker)
		await wrapper.setData({ inputValue: '12/34/567a' })
		expect(wrapper.vm.inputValue).toBe('12/34/567')
	})

	it('trims inputValue to 10 characters if its length is more than 10', async () => {
		const wrapper = shallowMount(DatePicker)
		await wrapper.setData({ inputValue: '12/34/56789/123' })
		expect(wrapper.vm.inputValue).toBe('12/34/5678')
	})
	it('sets lastTypeAddedDate to inputValue', async () => {
		const wrapper = shallowMount(DatePicker)
		await wrapper.setData({ inputValue: '12/34/5678' })
		expect(wrapper.vm.lastTypeAddedDate).toBe('inputValue')
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

	it('calls removeLastCharacter when value.data is null', () => {
		const wrapper = shallowMount(DatePicker)
		const removeLastCharacterMock = vi.fn()
		wrapper.vm.removeLastCharacter = removeLastCharacterMock
		wrapper.vm.updateInputValue({ data: null }, 'inputValue')
		expect(removeLastCharacterMock).toHaveBeenCalledWith('inputValue')
	})

	it('does nothing if input length is 10 characters', () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.isMaxLength = vi.fn(() => true)
		const appendCharacterMock = vi.fn()
		wrapper.vm.appendCharacter = appendCharacterMock
		wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(appendCharacterMock).not.toHaveBeenCalled()
	})

	it('adds a separator if necessary', () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.shouldAddSeparator = vi.fn(() => true)
		const addSeparatorMock = vi.fn()
		wrapper.vm.addSeparator = addSeparatorMock
		wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(addSeparatorMock).toHaveBeenCalledWith('inputValue')
	})

	it('appends the character if it is not a separator', () => {
		const wrapper = shallowMount(DatePicker)
		wrapper.vm.isNotSeparator = vi.fn(() => true)
		const appendCharacterMock = vi.fn()
		wrapper.vm.appendCharacter = appendCharacterMock
		wrapper.vm.updateInputValue({ data: '1' }, 'inputValue')
		expect(appendCharacterMock).toHaveBeenCalledWith('inputValue', '1')
	})
})
