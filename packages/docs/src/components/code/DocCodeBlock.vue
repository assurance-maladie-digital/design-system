<template>
	<VSheet
		:tile="tile"
		:rounded="rounded"
		:color="sheetColor"
		:class="{ 'mb-4': !noMargin }"
		class="doc-code-block overflow-hidden"
		outlined
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

	import { tokens } from '@cnamts/design-tokens';

	import '~/assets/styles/code-block-theme.scss';

	const Props = Vue.extend({
		props: {
			tile: {
				type: Boolean,
				default: false
			},
			rounded: {
				type: Boolean,
				default: true
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

		sheetColor = tokens.colors.amBlue.darken80;

		getSlotContent(): string {
			const markup = this.$el.querySelector('pre');

			if (!markup) {
				return '';
			}

			return markup.innerText;
		}
	}
</script>

<style lang="scss" scoped>
	.doc-code-block {
		width: 100%;
		position: relative;
		padding: 12px 52px 12px 16px;

		:deep() {
			pre[class*="language-"] {
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
		}
	}
</style>
