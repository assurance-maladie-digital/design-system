export const locales = {
	maxSize: (max: string, ext: string) => `Taille max. : ${max}`,
	accept: (length: number, ext: string) => {
		let text = '';
		if (length && length > 1) {
			text = 'Formats acceptés :';
		} else {
			text = 'Format accepté :';
		}

		return `${text} ${ext}`;
	}
};
