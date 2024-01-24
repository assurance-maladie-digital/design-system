export const locales = {
	or: 'Ou',
	placeFile: (multiple: boolean): string => multiple ? 'Placez vos fichiers ici' : 'Placez votre fichier ici',
	chooseFile: (multiple: boolean): string => multiple ? 'Choisir des fichiers' : 'Choisir un fichier',
	infoText: (max: string, ext: string, length: number): string => `Taille max. : ${max}. ${length === 1 ? 'Format accepté' : 'Formats acceptés'} : ${ext}`,
	fileSizeUnits: [
		'o',
		'Ko',
		'Mo',
		'Go',
		'To'
	]
};
