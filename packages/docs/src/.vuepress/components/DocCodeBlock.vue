<template>
	<VSheet
		:tile="tile"
		color="#1f1f1f"
		class="doc-code-block overflow-hidden"
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
		width: 100%;
		position: relative;
		margin-bottom: 16px;
		padding: 12px 52px 12px 16px;

		pre,
		code {
			background: transparent;
			font-weight: 300;
			margin: 0 !important;

			// Remove padding before content
			&[class*=language] {
				padding: 0;
			}
		}

		code * {
			font-family: inherit;
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

		pre[class*=language] {
			&::after {
				content: attr(data-lang);
				bottom: .75rem;
				color: #bdbdbd;
				font-family: inherit;
				font-size: .7rem;
				font-weight: 700;
				position: absolute;
				right: 1rem;
				text-transform: uppercase;
			}
		}
	}
</style>
