/** From https://emailregex.com/ */
// eslint-disable-next-line style/max-len
export const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

/** Check if an email is valid */
export function isEmailValid(email: string): boolean {
  return Boolean(EMAIL_REGEXP.exec(email));
}
