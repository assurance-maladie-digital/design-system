const remark = require('remark');
const html = require('remark-html');

const remarkProcessor = remark().use(html);

async function markdownToHtml(content) {
	return await remarkProcessor
		.process(content)
		.then(
			(file) => String(file),
			(err) => String(err)
		);
}

export async function parseMarkdownDescription(document) {
	if (document.extension !== '.md' || !document.description) {
		return;
	}

	const description = await markdownToHtml(document.description);
	document.description = description;
}
