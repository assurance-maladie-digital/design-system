<script land="ts">
	import Vue from 'vue';

	import remark from 'remark';
	import html from 'remark-html';

	const remarkProcessor = remark().use(html);

	function markdownToHtml(content) {
		return remarkProcessor.processSync(content);
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
			props,
			slots
		}) {
			const children = [];
			const node = nodes[0] || {};

			if (node.children) {
				children.push(...node.children);
			} else if (nodes.length > 1) {
				children.push(nodes);
			} else {
				const text = node.text || data.domProps?.textContent || '';

				data.domProps = {
					...data.domProps,
					innerHTML: markdownToHtml(text)
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
