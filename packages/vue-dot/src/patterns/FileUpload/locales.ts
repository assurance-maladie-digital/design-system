export const locales = {
	or: 'Ou',
	chooseFile: 'Choisir un fichier',
	infoText: (max: string, ext: string, length: number): string => `Taille max. ${ext} : ${max}. ${length === 1 ? 'Format accepté' : 'Formats acceptés'} : ${ext}`,
	fileSizeUnits: [
		'o',
		'Ko',
		'Mo',
		'Go',
		'To'
	]
};
