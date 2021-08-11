<template>
	<ul class="doc-home-page-list pl-0 mt-10 w-100">
		<li
			v-for="(item, index) in homePageListItems"
			:key="index"
			class="d-flex align-center mb-10"
		>
			<VIcon
				:size="iconSize"
				color="secondary"
				class="flex-grow-1 mr-10 d-sm-inline-flex d-none"
			>
				{{ item.icon }}
			</VIcon>

			<DocMarkdown>{{ item.content }}</DocMarkdown>
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';

	import { homePageListItems } from '../../data/homePageListItems';

	@Component({
		components: {
			DocMarkdown
		}
	})
	export default class DocHomePageList extends Vue {
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
