export function toPascalCase(str: string): string {
	const words = str.match(/[a-z]+/gi);

	if (!words) {
		return '';
	}

	return words
		.map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
		.join('');
}
