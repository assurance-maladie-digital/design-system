<template>
	<MaintenancePage
		:page-title="pageInfo.title"
		:message="pageInfo.message"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	@Component
	export default class Maintenance extends Vue {
		get pageInfo(): IndexedObject {
			// Use env var and default text
			return {
				title: window.MAINTENANCE_TITLE || <% if (i18n) { %>this.$t('views.maintenance.meta.title') as string<% } else { %>'Maintenance en cours'<% } %>,
				message:
					window.MAINTENANCE_MESSAGE ||
					<% if (i18n) { %>this.$t('views.maintenance.meta.description') as string<% } else { %>'L’application n’est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée.'<% } %>
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
						vmid: 'description',
						content: this.pageInfo.message
					}
				]
			};
		}
	}
</script>
