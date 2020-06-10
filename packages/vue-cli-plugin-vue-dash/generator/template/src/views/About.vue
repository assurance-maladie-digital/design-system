<template>
	<PageCard card-class="py-4 px-5">
		<h2 class="title font-weight-bold primary--text">
			<% if (i18n) { %>{{ $t('views.about.title') }}<% } else { %>À propos<% } %>
		</h2>

		<Links
			v-for="(data, index) in links"
			:key="index"
			:title="data.title"
			:links="data.links"
			class="mt-4"
		/>

		<VBtn
			exact
			color="accent"
			outlined
			<% if (i18n) { %>:to="$t('views.about.backBtn.to')"<% } else { %>:to="{
				name: 'home'
			}"<% } %>
			class="mt-8"
		>
			<VIcon class="mr-2">
				{{ backArrowIcon }}
			</VIcon>

			<% if (i18n) { %>{{ $t('views.about.backBtn.label') }}<% } else { %>Retour<% } %>
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	import { Link } from '@/types';

	import { mdiArrowLeft } from '@mdi/js';

	interface LinkItem {
		title: string;
		links: Link[];
	}

	/** About page */
	@Component({
		components: {
			Links: () => import(
				/* webpackChunkName: "links" */
				'@/components/Links'
			)
		}
	})
	export default class About extends Vue {
		backArrowIcon = mdiArrowLeft;

		<% if (i18n) { %>get links(): LinkItem[] {
			return this.$t('views.about.links') as unknown as LinkItem[];
		}<% } else { %>links = [
			{
				title: 'CNAM',
				links: [
					{
						id: 0,
						url: 'https://github.com/assurance-maladie-digital/design-system',
						name: 'Design System'
					}
				]
			},
			{
				title: 'Vue.js',
				links: [
					{
						id: 0,
						url: 'https://vuejs.org/',
						name: 'Core Docs'
					},
					{
						id: 1,
						url: 'https://forum.vuejs.org/',
						name: 'Forum'
					}
				]
			},
			{
				title: 'Vuetify',
				links: [
					{
						id: 0,
						url: 'https://vuetifyjs.com/',
						name: 'Vuetify'
					}
				]
			},
			{
				title: 'Écosystème',
				links: [
					{
						id: 0,
						url: 'http://router.vuejs.org/',
						name: 'Vue Router'
					},
					{
						id: 1,
						url: 'http://vuex.vuejs.org/',
						name: 'Vuex'
					},
					{
						id: 2,
						url: 'https://github.com/vuejs/awesome-vue',
						name: 'Awesome Vue'
					}
				]
			}
		];<% } %>

		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				title: <% if (i18n) { %>this.$t('views.about.meta.title') as string<% } else { %>'À propos'<% } %>,
				meta: [
					{
						name: 'description',
						content: <% if (i18n) { %>this.$t('views.about.meta.description') as string<% } else { %>'Informations et liens utiles.'<% } %>
					}
				]
			};
		}
	}
</script>
