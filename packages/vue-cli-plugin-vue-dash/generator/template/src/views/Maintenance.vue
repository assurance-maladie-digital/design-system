<template>
	<ErrorPage
		:code="pageInfo.code"
		:title="pageInfo.title"
		:message="pageInfo.message"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	// Maintenance related env vars
	declare const MAINTENANCE_CODE: string;
	declare const MAINTENANCE_TITLE: string;
	declare const MAINTENANCE_MESSAGE: string;

	@Component
	export default class Maintenance extends Vue {
		get pageInfo() {
			// Use env var and default text
			return {
				code: MAINTENANCE_CODE || <% if (i18n) { %>this.$t('views.maintenance.code')<% } else { %>'503'<% } %>,
				title: MAINTENANCE_TITLE || <% if (i18n) { %>this.$t('views.maintenance.title')<% } else { %>'Maintenance en cours'<% } %>,
				message: MAINTENANCE_MESSAGE ||<% if (i18n) { %> this.$t('views.maintenance.message')<% } else { %>
					'L\'application n\'est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée.'<% } %>
			};
		}

		/* istanbul ignore next */
		@Meta
		metaInfo() {
			return {
				title: this.pageInfo.title,
				meta: [
					{
						name: 'description',
						content: this.pageInfo.message
					}
				]
			};
		}
	}
</script>
