/**
 * @see https://gist.github.com/codeguy/6684588
 * @param str The string to slugify
 * @param separator The separator used to divide words
 */
export function slugify(str: string, separator = '-'): string {
	return str
		.toString()
		.normalize('NFD') // Split an accented letter in the base letter and the accent
		.replace(/[\u0300-\u036f]/g, '') // Remove all previously split accents
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9 ]/g, '') // Remove all chars not letters, numbers & spaces (to be replaced)
		.replace(/\s+/g, separator);
}
