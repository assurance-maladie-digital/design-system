<template>
	<div class="doc-text-icon pl-0 mt-10 w-100 d-flex align-center">
		<VIcon
			:size="iconSize"
			color="secondary"
			class="flex-grow-1 mr-10 d-sm-inline-flex d-none"
		>
			{{ icon }}
		</VIcon>

		<DocMarkdown>{{ content }}</DocMarkdown>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';

	import { homePageListItems } from '../../data/homePageListItems';

	const Props = Vue.extend({
		props: {
			icon: {
				type: String,
				required: true
			},
			content: {
				type: String,
				required: true
			}
		}
	})

	@Component({
		components: {
			DocMarkdown
		}
	})
	export default class DocTextIcon extends Props {
		homePageListItems = homePageListItems;

		get iconSize(): string {
			switch (this.$vuetify.breakpoint.name) {
				case 'md': {
					return '60px';
				}

				case 'sm':
				case 'xs': {
					return '40px';
				}

				default: {
					return '80px';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.v-icon {
		flex: none;
	}
</style>
