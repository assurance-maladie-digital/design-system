<template>
	<!-- VApp is an element which is required to use Vuetify. @see https://vuetifyjs.com/en/ for help -->
	<VApp v-cloak>
		<AppHeader />

		<NotificationBar<% if (cypress) { %> data-cy="notificationBar"<% } %> />

		<VMain>
			<!-- Transition between routes -->
			<transition
				name="fade"
				mode="out-in"
			>
				<!-- Load the component defined in the router for the current route -->
				<RouterView />
			</transition>
		</VMain>

		<AppFooter v-if="!$maintenanceEnabled" />
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	// Static import for faster rendering
	import { AppHeader, AppFooter } from '@/components/layout';

	/** App is the main component */
	@Component({
		components: {
			AppHeader,
			AppFooter
		}
	})
	export default class App extends Vue {
		/** The meta informations of the route */
		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				// If a sub-components does not specifies metaInfo.title, this title will be used
				title: <% if (i18n) { %>this.$t('common.meta.title') as string<% } else { %>'<%= capitalizeFirstLetter(projectName) %>'<% } %>,
				// All titles will be injected into this template
				titleTemplate: <% if (i18n) { %>this.$t('common.meta.titleTemplate') as string<% } else { %>'%s | CNAM'<% } %>,
				meta: [
					{
						name: 'description',
						vmid: 'description', /** Used to avoid duplicated tags @see https://vue-meta.nuxtjs.org/faq/#unique-metadata */
						content: <% if (i18n) { %>this.$t('common.meta.description') as string<% } else { %>'<%= capitalizeFirstLetter(projectDescription) %>.'<% } %>
					}
				]
			};
		}
	}
</script>
