<template>
	<ErrorPage
		:title="pageInfo.title"
		:message="pageInfo.message"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	// Maintenance related env vars
	declare const MAINTENANCE_TITLE: string;
	declare const MAINTENANCE_MESSAGE: string;

	@Component
	export default class Maintenance extends Vue {
		get pageInfo(): IndexedObject {
			// Use env var and default text
			return {
				title: MAINTENANCE_TITLE || <% if (i18n) { %>this.$t('views.maintenance.title') as string<% } else { %>'Maintenance en cours'<% } %>,
				message: MAINTENANCE_MESSAGE ||<% if (i18n) { %> this.$t('views.maintenance.message') as string<% } else { %>
					'L\'application n\'est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée.'<% } %>
			};
		}

		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
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
