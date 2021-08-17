function insertNBSP(document, characters, position = 'before', noSpaceAfter = false) {
	const SPACE_CHARACTER = ' ';
	const NBSP_CHARACTER = '&nbsp;';

	characters.forEach(character => {
		const stringToMatch = position === 'before' ? SPACE_CHARACTER + character : character + SPACE_CHARACTER;
		const replaceValue = position === 'before' ? NBSP_CHARACTER + character : character + NBSP_CHARACTER;

		const toMatch = noSpaceAfter ? stringToMatch + '\W' : stringToMatch;
		const regexp = new RegExp(toMatch, 'gm');

		document.data = document.data.replace(regexp, replaceValue.replace('\\', ''));
	});
}

export function applyTypographicRules(document) {
	if (document.extension !== '.md') {
		return;
	}

	insertNBSP(document, [';', '\\?', '»']);
	insertNBSP(document, ['«'], 'after');
	insertNBSP(document, [':'], undefined, true);
}
