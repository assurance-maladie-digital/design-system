import { describe, it, expect, afterEach, vi, SpyInstance, beforeEach } from 'vitest'
import { propValidator } from '../'

const PROP_NAME = 'test'
const ACCEPTED_VALUES = ['value1', 'value2']

describe('propValidator', () => {
	let consoleErrorSpy: SpyInstance

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
	})

	it('does not log anything if the prop is valid', () => {
		const result = propValidator(PROP_NAME, ACCEPTED_VALUES, 'value1')

		expect(result).toBeTruthy()
		expect(consoleErrorSpy).not.toHaveBeenCalled()
	})

	it('logs an error if the prop is not valid', () => {
		const result = propValidator(PROP_NAME, ACCEPTED_VALUES, 'wrongValue')

		expect(result).toBeTruthy()
		expect(consoleErrorSpy).toHaveBeenCalled()
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})
})
