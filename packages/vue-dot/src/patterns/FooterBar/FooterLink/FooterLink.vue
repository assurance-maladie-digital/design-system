<template>
	<div class="d-flex">
		<a
			v-if="sitemapExternalLink || cguExternalLink || a11yStatementExternalLink || legalNoticeExternalLink"
			v-bind="options"
			:href="sitemapExternalLink || cguExternalLink || a11yStatementExternalLink || legalNoticeExternalLink"
			target="_blank"
		>
			<slot />
		</a>
		<RouterLink
			v-else
			v-bind="options"
			:to="sitemapRoute || cguRoute || a11yStatementRoute || legalNoticeRoute"
		>
			<slot />
		</RouterLink>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	const Props = Vue.extend({
		props: {
			options: {
				type: Object as PropType<Record<string, unknown>>,
				default: () => ({})
			},
			sitemapRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'sitemap' })
			},
			sitemapExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			cguRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'cgu' })
			},
			cguExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			legalNoticeRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'legalNotice' })
			},
			legalNoticeExternalLink: {
				type: String as PropType<string>,
				default: null
			},
			a11yStatementRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'a11yStatement' })
			},
			a11yStatementExternalLink: {
				type: String as PropType<string>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FooterLink extends MixinsDeclaration {}
</script>
