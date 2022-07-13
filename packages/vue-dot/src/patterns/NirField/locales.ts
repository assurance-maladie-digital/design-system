export const locales = {
	label: 'Numéro de sécurité sociale',
	hint: (nirLength: number): string => `${nirLength} caractères ${nirLength === 13 ? ' (sans clé)' : ''}`
};
