export function toKebabCase(str: string): string {
	return str
		.replace(/\s+/g, '-')
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.toLowerCase();
}
