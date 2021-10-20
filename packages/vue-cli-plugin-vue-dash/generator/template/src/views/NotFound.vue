<template>
	<ErrorPage
		<% if (i18n) { %>:code="$t('views.notFound.code')"
		:page-title="$t('views.notFound.error')"
		:message="$t('views.notFound.message')"<% } else { %>code="404"
		page-title="Page non trouvée"
		message="Il semblerait qu'il y ait eu une erreur !"<% } if (cypress) { %>
		data-cy="errorPage"<% } %>
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	/** 404 page */
	@Component
	export default class NotFound extends Vue {
		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				title: <% if (i18n) { %>this.$t('views.notFound.meta.title') as string<% } else { %>'Erreur 404'<% } %>,
				meta: [
					{
						name: 'description',
						vmid: 'description',
						content: <% if (i18n) { %>this.$t('views.notFound.meta.description') as string<% } else { %>'Page non trouvée.'<% } %>
					}
				]
			};
		}
	}
</script>
