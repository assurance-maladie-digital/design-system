function replacer(match) {
	/** Get opening tag with language (eg: "```bash") */
	const tagLangRegexp = /`{3}([a-z]*)\n/;

	// Remove opening and closing tags
	const blocContent = match.replace(tagLangRegexp, '').replace(/`{3}/g, '');
	// Espaces new lines to avoid issues with parsing step
	const escapedBlocContent = blocContent.replace(/\n/g, '\\n');
	// Wrap code in backtick chars to avoid issues with quotes (eg: :code="` myVar=""; `")
	const code = '`' + escapedBlocContent + '`';

	/** Get language (eg: bash in "```bash") */
	const languageMatch = match.match(/`{3}([a-z]*)\n/);
	const language = languageMatch[1];

	return `<doc-markup language="${language}" :code="${code}"></doc-markup>`;
}

export function transformCodeBlocks(document) {
	if (document.extension !== '.md') {
		return;
	}

	/** Match every Markdown code block */
	const codeBlockRegex = /`{3}[a-z]*\n[\s\S]*?\n`{3}/gm;

	if (!document.data.match(codeBlockRegex)) {
		return;
	}

	const data = document.data.replace(codeBlockRegex, replacer);
	document.data = data;
}
