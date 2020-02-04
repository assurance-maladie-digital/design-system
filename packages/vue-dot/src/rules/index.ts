import { email, emailFn } from './email';
import { isDateValid, isDateValidFn } from './isDateValid';
import { maxLength, maxLengthFn } from './maxLength';
import { minLength, minLengthFn } from './minLength';
import { notAfterToday, notAfterTodayFn } from './notAfterToday';
import { notBeforeToday, notBeforeTodayFn } from './notBeforeToday';
import { required, requiredFn } from './required';

// Export all rules function
export const rulesFunctions = {
	emailFn,
	isDateValidFn,
	maxLengthFn,
	minLengthFn,
	notAfterTodayFn,
	notBeforeTodayFn,
	requiredFn
};

// Export all rules
export const rules = {
	email,
	isDateValid,
	maxLength,
	minLength,
	notAfterToday,
	notBeforeToday,
	required
};
