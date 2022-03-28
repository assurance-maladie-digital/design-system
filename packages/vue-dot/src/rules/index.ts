import { email, emailFn } from './email';
import { isDateValid, isDateValidFn } from './isDateValid';
import { maxLength, maxLengthFn } from './maxLength';
import { minLength, minLengthFn } from './minLength';
import { notAfterToday, notAfterTodayFn } from './notAfterToday';
import { notBeforeToday, notBeforeTodayFn } from './notBeforeToday';
import { required, requiredFn } from './required';

export const rulesFunctions = {
	emailFn,
	isDateValidFn,
	maxLengthFn,
	minLengthFn,
	notAfterTodayFn,
	notBeforeTodayFn,
	requiredFn
};

export const rules = {
	email,
	isDateValid,
	maxLength,
	minLength,
	notAfterToday,
	notBeforeToday,
	required
};
