export const locales = {
	numberLabel: 'Numéro de sécurité sociale',
	numberHint: '13 caractères',
	keyLabel: 'Clé',
	keyHint: '2 chiffres',
	errorRequiredNumber: 'Le numéro de sécurité sociale est obligatoire',
	errorRequiredKey: 'La clé de validation est obligatoire',
	errorLengthNumber: (length: number): string => `La longueur du numéro de sécurité sociale doit être de ${length} caractères.`,
	errorLengthKey: (length: number): string => `La longueur de la clé doit être de ${length} caractères.`
} as const;
