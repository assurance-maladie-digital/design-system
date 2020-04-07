<template>
	<VCard
		:id="id"
		:color="$vuetify.theme.dark ? undefined : 'grey darken-4'"
		class="v-markup"
		outlined
	>
		<Prism
			v-if="$slots.default || code"
			:language="language || undefined"
			:code="code"
			:inline="inline"
		>
			<slot />
		</Prism>

		<div class="v-markup__edit">
			<a
				:href="href"
				target="_blank"
				rel="noopener"
				title="Éditer le code"
				aria-label="Éditer le code"
			>
				<VIcon>
					{{ pencilIcon }}
				</VIcon>
			</a>
		</div>

		<!-- <CopyBtn
			label="Copier le code"
			:text-to-copy="$slot"
		/> -->

		<div class="v-markup__copy">
			<VIcon
				title="Copier le code"
				aria-label="Copier le code"
				@click="copyMarkup"
			>
				{{ copyIcon }}
			</VIcon>

			<VSlideXTransition>
				<span
					v-if="copied"
					class="v-markup__copied"
				>
					Copié
				</span>
			</VSlideXTransition>
		</div>

		<a
			v-if="filename && file"
			:href="href"
			target="_blank"
			rel="noopener"
			class="v-markup__filename"
		>
			<span v-text="file" />
		</a>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiPencil, mdiContentCopy } from '@mdi/js';

	// Prism
	import 'prismjs';
	import 'prismjs/components/prism-bash.js';
	// import 'prismjs/components/prism-css.js';
	// import 'prismjs/components/prism-javascript.js';
	// import 'prismjs/components/prism-json.js';
	import 'prismjs/components/prism-scss.js';
	import 'prismjs/components/prism-typescript.js';

	import 'prismjs/themes/prism-tomorrow.css';

	// Utilities
	// import { getBranch } from '@/util/helpers';

	const Props = Vue.extend({
		props: {
			lang: {
				type: String,
				default: null
			},
			inline: {
				type: Boolean,
				default: false
			},
			value: {
				type: String,
				default: 'markup'
			},
			filename: {
				type: Boolean,
				default: process.env.NODE_ENV !== 'production'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			Prism: () => import('vue-prism-component')
		}
	})
	export default class DocMarkup extends MixinsDeclaration {
		pencilIcon = mdiPencil;
		copyIcon = mdiContentCopy;

		code = null;
		copied = false;
		language: string | null = this.lang;
		// branch = null;

		get file(): string {
			const split = this.value.split('_');
			const folder = split.shift();
			const file = split.join('_');

			return `${folder}/${file}.txt`;
		}

		get href(): string {
			// return `https://github.com/vuetifyjs/vuetify/tree/${this.branch}/packages/docs/src/snippets/${this.file}`;
			return '';
		}

		get id() {
			if (this.value === 'markup') {
				return;
			}

			return 'markup-' + this.value.replace(/_/g, '-');
		}

		mounted() {
			this.$nextTick(this.init);
			// this.branch = getBranch();
		}

		copyMarkup(): void {
			const markup = this.$el.querySelector('pre');

			if (!markup) {
				return;
			}

			markup.setAttribute('contenteditable', 'true');
			markup.focus();
			document.execCommand('selectAll', false);
			this.copied = document.execCommand('copy');
			markup.removeAttribute('contenteditable');

			setTimeout(() => {
				this.copied = false;
			}, 2000);
		}

		get markup() {
			return this.$el?.querySelector('pre') || '';
		}

		init(): void {
			if (this.$slots.default || !this.value) {
				return;
			}

			import(`../../${this.file}`)
				.then(this.parseRaw)
				.catch(err => console.log(err));
		}

		parseRaw(res: any): void {
			this.language = this.lang || this.value.split('_').shift() || null;
			this.code = res.default.trim();
		}
	}
</script>

<style lang="sass">
	.v-application .v-markup
		align-items: center
		box-shadow: none
		display: flex
		border-radius: 4px
		position: relative
		overflow: hidden
		margin-bottom: 16px
		background: #2d2d2d
		color: #fff

		&.theme--dark
			background: #1F1F1F

		pre, code
			margin: 0
			background: transparent
			font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important
			font-weight: 300
			font-size: 15px
			line-height: 1.55

		code *
			font-family: inherit

		code
			position: relative
			box-shadow: none
			overflow-x: auto
			overflow-y: hidden
			word-break: break-word
			flex-wrap: wrap
			align-items: center
			vertical-align: middle
			white-space: pre-wrap

			&:before
				display: none

		&__copied
			position: absolute
			top: 12px
			right: 75px

		&__copy,
		&__edit
			position: absolute
			top: 0
			cursor: pointer
			width: 25px
			height: 25px
			z-index: 1

		&__copy
			right: 0

		&__edit
			right: 36px

			> a
				color: inherit
				text-decoration: none

		a.v-markup__filename
			text-decoration: none
			position: absolute
			bottom: 0
			right: 0
			padding: 8px 12px 8px 8px
			font-size: 12px
			color: rgba(#fff, .56)

		&:after
			position: absolute
			right: 10px
			transition: opacity .2s ease-in
			content: attr(data-lang)
			color: rgba(#000, 0.3)
			font-size: 1rem
			font-weight: 700
			top: 5px

		&:hover
			.v-markup__copy,
			.v-markup__edit
				.VIcon
					opacity: 1

				&:after
					opacity: 0

		.v-markup__copy,
		.v-markup__edit
			.VIcon
				color: inherit
				position: absolute
				right: 0
				transition: opacity .2s ease-in
				font-size: 1.5rem
				opacity: 0
				top: 0
				width: 50px
				height: 50px
				z-index: 4
</style>
