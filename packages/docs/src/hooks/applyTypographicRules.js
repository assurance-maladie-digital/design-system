const SPACE_CHARACTER = ' ';
const NBSP_CHARACTER = '&nbsp;';

function insertNBSP(document, characters, position = 'before', matchEndString = false) {
	characters.forEach(character => {
		let stringToMatch = '';
		let replaceValue = '';

		switch (position) {
			case 'after': {
				stringToMatch = character + SPACE_CHARACTER;
				replaceValue = character + NBSP_CHARACTER;
				break;
			}

			case 'before': {
				stringToMatch = SPACE_CHARACTER + character;
				replaceValue = NBSP_CHARACTER + character;
				break;
			}

			case 'both': {
				stringToMatch = SPACE_CHARACTER + character + SPACE_CHARACTER;
				replaceValue = NBSP_CHARACTER + character + NBSP_CHARACTER;
				break;
			}
		}

		const toMatch = matchEndString ? stringToMatch + '$' : stringToMatch;
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
	insertNBSP(document, [':'], 'both');
	insertNBSP(document, [':'], 'before', true);
}
