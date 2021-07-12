function markdownToCodeBlock(match) {
	/** Get opening tag with language (eg: "```bash") */
	const tagLangRegexp = /^`{3}([a-z-]*)\n/;

	// Remove opening and closing tags
	const blocContent = match.replace(tagLangRegexp, '').replace(/`{3}/g, '');

	// Escape specific characters to avoid issues with parsing step
	const escapedBlocContent = blocContent
		.replace(/"/g, '&quot;') // double quotes
		.replace(/\n/g, '\\n') // new lines
		.replace(/`/g, '\\`') // backticks
		.replace(/\${/g, '\\$\\{') // string templates opening

	// Wrap code in backtick chars to avoid issues with quotes (eg: :code="` myVar=""; `")
	const code = '`' + escapedBlocContent + '`';

	/** Get language (eg: bash in "```bash") */
	const languageMatch = match.match(tagLangRegexp);
	const language = languageMatch && languageMatch[1] ? languageMatch[1] : 'bash';

	return `<doc-markup language="${language}" :code="${code}"></doc-markup>`;
}

export function transformCodeBlocks(document) {
	if (document.extension !== '.md') {
		return;
	}

	/** Match every Markdown code block with language */
	const codeBlockRegex = /^`{3}([a-z]|-)+\n[\s\S]*?\n`{3}/gm;

	if (!document.data.match(codeBlockRegex)) {
		return;
	}

	document.data = document.data.replace(codeBlockRegex, markdownToCodeBlock);
}
