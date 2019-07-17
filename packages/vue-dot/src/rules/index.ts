import email from './email';
import isDateValid from './isDateValid';
import maxLength from './maxLength';
import minLength from './minLength';
import notAfterToday from './notAfterToday';
import notBeforeToday from './notBeforeToday';
import required from './required';

// Export all rules
export default {
	email,
	isDateValid,
	notAfterToday,
	notBeforeToday,
	required,
	maxLength,
	minLength
};
