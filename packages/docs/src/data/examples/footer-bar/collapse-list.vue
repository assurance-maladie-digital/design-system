<template>
	<FooterBar
		v-bind="docProps"
		hide-social-media-links
	>
		<CollapseList :list-items="listItems" />
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';


	@Component
	export default class FooterBarCollapseList extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		listItems = {
			title: 'Plan du site',
			list: [
				{
					name: 'Page 1',
					route: '/'
				},
				{
					name: 'Page 2',
					route: '/'
				},
				{
					name: 'Page 3',
					route: '/'
				}
			]
		};
	}
</script>
