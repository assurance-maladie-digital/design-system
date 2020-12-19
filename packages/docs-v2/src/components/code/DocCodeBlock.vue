<template>
	<VSheet
		:tile="tile"
		color="#1f1f1f"
		class="doc-code-block overflow-hidden"
		:class="{ 'mb-4': !noMargin }"
		outlined
		rounded
		dark
	>
		<slot />

		<CopyBtn
			:tooltip-duration="1000"
			:text-to-copy="getSlotContent"
			:vuetify-options="copyBtnOptions"
			label="Copier le code"
		/>
	</VSheet>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiContentCopy } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			tile: {
				type: Boolean,
				default: false
			},
			noMargin: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocCodeBlock extends MixinsDeclaration {
		copyIcon = mdiContentCopy;

		copyBtnOptions = {
			menu: {
				left: true,
				nudgeLeft: 16
			},
			icon: {
				color: 'grey lighten-1'
			}
		};

		getSlotContent(): string {
			const markup = this.$el.querySelector('pre');

			if (!markup) {
				return '';
			}

			return markup.innerText;
		}
	}
</script>

<style lang="scss">
	.doc-code-block {
		position: relative;
		padding: 12px 52px 12px 16px;

		pre {
			margin: 0;
		}

		.vd-copy-btn {
			position: absolute;
			background-color: inherit;
			top: 6px;
			right: 8px;
		}

		&:not(:hover) .vd-copy-btn .v-btn {
			opacity: .6;
		}

		/**
		 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
		 * Based on https://github.com/chriskempson/tomorrow-theme
		 * @author Rose Pritchard
		 */
		code[class*="language-"],
		pre[class*="language-"] {
			color: #ccc;
			background: none;
			font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
			font-size: 1em;
			text-align: left;
			white-space: pre;
			word-spacing: normal;
			word-break: normal;
			word-wrap: normal;
			line-height: 1.5;
			tab-size: 4;
			hyphens: none;
		}

		/* Code blocks */
		pre[class*="language-"] {
			overflow: auto;
		}

		/* Inline code */
		:not(pre) > code[class*="language-"] {
			padding: .1em;
			border-radius: .3em;
			white-space: normal;
		}

		.token.comment,
		.token.block-comment,
		.token.prolog,
		.token.doctype,
		.token.cdata {
			color: #999;
		}

		.token.punctuation {
			color: #ccc;
		}

		.token.tag,
		.token.attr-name,
		.token.namespace,
		.token.deleted {
			color: #e2777a;
		}

		.token.function-name {
			color: #6196cc;
		}

		.token.boolean,
		.token.number,
		.token.function {
			color: #f08d49;
		}

		.token.property,
		.token.class-name,
		.token.constant,
		.token.symbol {
			color: #f8c555;
		}

		.token.selector,
		.token.important,
		.token.atrule,
		.token.keyword,
		.token.builtin {
			color: #cc99cd;
		}

		.token.string,
		.token.char,
		.token.attr-value,
		.token.regex,
		.token.variable {
			color: #7ec699;
		}

		.token.operator,
		.token.entity,
		.token.url {
			color: #67cdcc;
		}

		.token.important,
		.token.bold {
			font-weight: bold;
		}

		.token.italic {
			font-style: italic;
		}

		.token.entity {
			cursor: help;
		}

		.token.inserted {
			color: green;
		}
	}
</style>
