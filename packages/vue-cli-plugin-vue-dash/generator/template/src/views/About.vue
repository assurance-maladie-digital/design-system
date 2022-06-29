<template>
	<PageContainer>
		<VCard class="pa-8">
			<VBtn
				:to="{
					name: 'home'
				}"
				color="accent"
				class="mb-8"
				outlined
				exact<% if (cypress) { %>
				data-cy="backBtn"<% } %>
			>
				<VIcon class="mr-2">
					{{ backArrowIcon }}
				</VIcon>

				<% if (i18n) { %>{{ $t('views.about.backBtn.label') }}<% } else { %>Retour<% } %>
			</VBtn>

			<h2 class="text-h6 font-weight-bold primary--text">
				<% if (i18n) { %>{{ $t('views.about.title') }}<% } else { %>À propos<% } %>
			</h2>

			<LinksList
				v-for="(data, index) in links"
				:key="index"
				:title="data.title"
				:links="data.links"
				class="mt-4"<% if (cypress) { %>
				data-cy="links"<% } %>
			/>
		</VCard>
	</PageContainer>
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

	@Component({
		components: {
			LinksList: () => import(
				/* webpackChunkName: "links-list" */
				'@/components/LinksList'
			)
		}
	})
	export default class About extends Vue {
		backArrowIcon = mdiArrowLeft;

		<% if (i18n) { %>get links(): LinkItem[] {
			return this.$t('views.about.links') as unknown as LinkItem[];
		}<% } else { %>links: LinkItem[] = [
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
						vmid: 'description',
						content: <% if (i18n) { %>this.$t('views.about.meta.description') as string<% } else { %>'Informations et liens utiles.'<% } %>
					}
				]
			};
		}
	}
</script>
