<script lang="ts">
	import Vue, { VNode } from 'vue';

	import { remark } from 'remark';
	import html from 'remark-html';

	import { VFile } from 'vfile';

	const remarkProcessor = remark().use(html, {
		// Disable sanitization since we trust the source
		// and raw HTML in Markdown cannot be sanitized
		sanitize: false
	});

	function markdownToHtml(content: string): VFile {
		return remarkProcessor.processSync(content) as unknown as VFile;
	}

	export default Vue.extend({
		name: 'DocMarkdown',
		functional: true,
		props: {
			tag: {
				type: String,
				default: 'div'
			}
		},
		render(h, {
			children: nodes = [],
			data,
			props
		}): VNode | VNode[] {
			const children = [];
			const node = nodes[0] || {};

			if (node.children) {
				children.push(...node.children);
			} else if (nodes.length > 1) {
				children.push(nodes);
			} else {
				const text: string = node.text || data.domProps?.textContent || '';

				data.domProps = {
					...data.domProps,
					innerHTML: markdownToHtml(text.trim())
				};
			}

			data.staticClass = `v-markdown ${data.staticClass || ''}`.trim();

			return h(props.tag, data, children);
		}
	});
</script>

<style lang="scss" scoped>
	.v-markdown ::v-deep p {
		margin-bottom: 0 !important;
	}
</style>
