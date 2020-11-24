<template>
	<DocCodeBlock v-bind="$attrs">
		<Prism
			:code="code"
			:inline="inline"
			:language="language"
			:data-lang="dataLang"
		/>
	</DocCodeBlock>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	// Prism
	import 'prismjs';
	import 'prismjs/components/prism-bash.js';
	import 'prismjs/components/prism-css.js';
	import 'prismjs/components/prism-javascript.js';
	import 'prismjs/components/prism-json.js';
	import 'prismjs/components/prism-scss.js';
	import 'prismjs/components/prism-visual-basic.js';
	import 'prismjs/components/prism-typescript.js';

	import 'prismjs/themes/prism-tomorrow.css';

	import Prism from 'vue-prism-component';

	const Props = Vue.extend({
		props: {
			language: {
				type: String,
				default: undefined
			},
			inline: {
				type: Boolean,
				default: false
			},
			code: {
				type: String,
				default: undefined
			},
			hideLanguage: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			Prism
		},
		inheritAttrs: false
	})
	export default class DocMarkup extends MixinsDeclaration {
		get dataLang(): string | undefined {
			if (this.hideLanguage) {
				return;
			}

			return this.language;
		}
	}
</script>
