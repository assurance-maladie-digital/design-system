<template>
	<VCard
		:color="$vuetify.theme.dark ? undefined : 'grey darken-4'"
		class="v-markup"
		outlined
	>
		<component
			v-if="prismComponent && ($slots.default || code)"
			:is="prismComponent"
			:language="language || undefined"
			:inline="inline"
		>
			<slot />
		</component>

		<!-- <div class="v-markup__edit">
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
		</div> -->

		<CopyBtn
			:tooltip-duration="1000"
			:text-to-copy="getSlotContent"
			:vuetify-options="copyBtnOptions"
			title="Copier le code"
			label="Copier le code"
		/>

		<!-- <a
			v-if="filename && file"
			:href="href"
			target="_blank"
			rel="noopener"
			class="v-markup__filename"
		>
			<span v-text="file" />
		</a> -->
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiPencil, mdiContentCopy } from '@mdi/js';

	// Prism
	import 'prismjs';
	// import 'prismjs/components/prism-bash.js';
	// import 'prismjs/components/prism-css.js';
	// import 'prismjs/components/prism-javascript.js';
	// import 'prismjs/components/prism-json.js';
	// import 'prismjs/components/prism-scss.js';
	import 'prismjs/components/prism-typescript.js';

	import 'prismjs/themes/prism-tomorrow.css';

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

	@Component
	export default class DocMarkup extends MixinsDeclaration {
		pencilIcon = mdiPencil;
		copyIcon = mdiContentCopy;

		code = null;
		copied = false;
		language: string | null = this.lang;

		prismComponent = null;

		copyBtnOptions = {
			menu: {
				left: true,
				nudgeLeft: 16
			},
			icon: {
				color: 'white'
			}
		};

		mounted() {
			import('vue-prism-component').then(module => {
				this.prismComponent = module.default
			})
		}

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
	.v-application .v-markup {
		align-items: center;
		box-shadow: none;
		display: flex;
		border-radius: 4px;
		position: relative;
		overflow: hidden;
		margin-bottom: 16px;
		background: #2d2d2d;
		color: #fff;

		&.theme--dark {
			background: #1f1f1f;
		}

		pre,
		code {
			margin: 0;
			background: transparent;
			font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
			font-weight: 300;
			font-size: 15px;
			line-height: 1.55;
		}

		code * {
			font-family: inherit;
		}

		code {
			position: relative;
			box-shadow: none;
			overflow-x: auto;
			overflow-y: hidden;
			word-break: break-word;
			flex-wrap: wrap;
			align-items: center;
			vertical-align: middle;
			white-space: pre-wrap;

			&:before {
				display: none;
			}
		}

		// &__edit,
		.vd-copy-btn {
			position: absolute;
			top: 10px;
			cursor: pointer;
			width: 36px;
			height: 36px;
			z-index: 1;

			.v-btn:focus {
				opacity: 1;
			}
		}

		.vd-copy-btn {
			right: 10px;
		}

		.vd-copy-btn .v-btn {
			opacity: 0;
		}

		// &__edit {
		// 	right: 36px;

		// 	> a {
		// 		color: inherit;
		// 		text-decoration: none;
		// 	}
		// }

		// a.v-markup__filename {
		// 	text-decoration: none;
		// 	position: absolute;
		// 	bottom: 0;
		// 	right: 0;
		// 	padding: 8px 12px 8px 8px;
		// 	font-size: 12px;
		// 	color: rgba(#fff, .56);
		// }

		&:after {
			position: absolute;
			right: 10px;
			transition: opacity .2s ease-in;
			content: attr(data-lang);
			color: rgba(#000, 0.3);
			font-size: 1rem;
			font-weight: 700;
			top: 5px;
		}

		&:hover {
			.vd-copy-btn,
			.v-markup__edit {
				.v-icon {
					opacity: 1;
				}

				&:after {
					opacity: 0;
				}
			}

			.vd-copy-btn .v-btn {
				opacity: 1;
			}
		}

		.v-markup__edit {
			.v-icon {
				color: inherit;
				position: absolute;
				right: 0;
				transition: opacity .2s ease-in;
				font-size: 1.5rem;
				opacity: 0;
				top: 0;
				// width: 50px;
				// height: 50px;
				z-index: 4;
			}
		}
	}
</style>
