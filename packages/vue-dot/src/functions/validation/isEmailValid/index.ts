/** From https://emailregex.com/ */
export const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Check if the email is valid
 * (using https://emailregex.com/)
 *
 * @param {string} email The email to check
 * @returns {boolean} Is the email valid
 */
export function isEmailValid(email: string): boolean {
	// Test the email
	return Boolean(EMAIL_REGEXP.exec(email));
}
