import { notAfterTodayFn } from '@/rules/notAfterToday/index.ts'
import dayjs from 'dayjs'
import { defaultErrorMessages } from '@/rules/notAfterToday/locales'
import { it, describe, expect } from 'vitest'
import { formatDateToDDMMYYYYFn } from '../'

const DATE_FORMAT = 'DD/MM/YYYY'

const pastDate = dayjs().subtract(1, 'year').format(DATE_FORMAT)
const futureDate = dayjs().add(1, 'year').format(DATE_FORMAT)
const today = dayjs().format(DATE_FORMAT)

describe('notAfterTodayFn', () => {
	const notAfterToday = notAfterTodayFn(defaultErrorMessages)

	it('returns true when value is null', () => {
		expect(notAfterToday(null)).toBe(true)
	})

	it('returns true when value is a date before today', () => {
		expect(notAfterToday(pastDate)).toBe(true)
	})

	it('returns error message when value is a date after today', () => {
		expect(notAfterToday(futureDate)).toBe(defaultErrorMessages.default)
	})

	it('returns true when value is today', () => {
		expect(notAfterToday(today)).toBe(true)
	})

	it('returns date in DD/MM/YYYY format', () => {
		const date = new Date('2021-01-01')
		expect(formatDateToDDMMYYYYFn(date)).toBe('01/01/2021')
	})
})
