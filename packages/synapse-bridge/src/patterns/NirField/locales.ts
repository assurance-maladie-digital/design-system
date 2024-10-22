export const locales = {
	errorRequiredNumber: "Le numéro de sécurité sociale est requis.",
	errorLengthNumber: (length: number) => `Le numéro de sécurité sociale doit contenir ${length} caractères.`,
	errorInvalidFormat: "Le format du numéro de sécurité sociale est invalide.",
	errorRequiredKey: "La clé du numéro de sécurité sociale est requise.",
	errorLengthKey: (length: number) => `La clé du numéro de sécurité sociale doit contenir ${length} caractères.`,
	errorInvalidKey: "La clé du numéro de sécurité sociale est invalide.",
	numberLabel: "Numéro de sécurité sociale",
	numberHint: "13 caractères",
	keyLabel: 'Clé',
	keyHint: '2 chiffres'
} as const ;
