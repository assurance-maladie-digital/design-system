import email, { email as emailFn } from './email';
import isDateValid, { isDateValid as isDateValidFn } from './isDateValid';
import maxLength, { maxLength as maxLengthFn } from './maxLength';
import minLength, { minLength as minLengthFn } from './minLength';
import notAfterToday, { notAfterToday as notAfterTodayFn } from './notAfterToday';
import notBeforeToday, { notBeforeToday as notBeforeTodayFn } from './notBeforeToday';
import required, { required as requiredFn } from './required';

import { ValidationRules } from './types';

// Export all rules function
export const rulesFunctions = {
	email: emailFn,
	isDateValid: isDateValidFn,
	maxLength: maxLengthFn,
	minLength: minLengthFn,
	notAfterToday: notAfterTodayFn,
	notBeforeToday: notBeforeTodayFn,
	required: requiredFn
};

// Export all rules
export default {
	email,
	isDateValid,
	maxLength,
	minLength,
	notAfterToday,
	notBeforeToday,
	required
};
