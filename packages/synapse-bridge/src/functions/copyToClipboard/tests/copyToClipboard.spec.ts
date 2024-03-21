import {
	describe,
	it,
	vi,
	expect,
	beforeEach,
	afterEach,
} from 'vitest'

import { copyToClipboard } from '..'

describe('copyToClipboard', () => {
	const testStr = 'test'

	beforeEach(() => {
		Object.defineProperty(document, 'execCommand', {
			value: vi.fn(() => true),
			writable: true,
		})
	})

	afterEach(() => {
		vi.clearAllMocks()

		Object.defineProperty(navigator, 'clipboard', {
			value: null,
			writable: true,
		})
	})

	it('copies text to the clipboard', () => {
		vi.spyOn(document, 'getSelection').mockImplementation(() => ({
			rangeCount: 0,
			getRangeAt: () => null,
			removeAllRanges: () => null,
		}) as unknown as Selection)

		const writeTextMock = vi.fn()

		Object.defineProperty(navigator, 'clipboard', {
			value: {
				writeText: writeTextMock,
			},
			writable: true,
		})

		copyToClipboard(testStr)

		expect(writeTextMock).toHaveBeenCalledWith(testStr)
		expect(document.execCommand).not.toHaveBeenCalled()
	})

	it('copies text to the clipboard when text is already selected', () => {
		vi.spyOn(document, 'getSelection').mockImplementation(() => ({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null,
		}) as unknown as Selection)

		const writeTextMock = vi.fn()

		Object.defineProperty(navigator, 'clipboard', {
			value: {
				writeText: writeTextMock,
			},
			writable: true,
		})

		copyToClipboard(testStr)

		expect(writeTextMock).toHaveBeenCalledWith(testStr)
		expect(document.execCommand).not.toHaveBeenCalled()
	})

	it('copies text to the clipboard when text is already selected and Clipboard API is unavailable', () => {
		vi.spyOn(document, 'getSelection').mockImplementation(() => ({
			rangeCount: 2,
			getRangeAt: (index: number) => ['a', 'b'][index],
			removeAllRanges: () => null,
			addRange: () => null,
		}) as unknown as Selection)

		copyToClipboard(testStr)

		expect(document.execCommand).toHaveBeenCalledWith('copy')
	})

	it('does not copies text when getSelection is unavailable', () => {
		expect(copyToClipboard(testStr)).toBeUndefined()
	})
})
