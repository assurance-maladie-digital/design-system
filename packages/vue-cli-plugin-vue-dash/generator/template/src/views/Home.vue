<template>
	<PageCard
		min-height
		card-class="d-flex flex-column align-start py-4 px-5"
	>
		<h2 class="text-h6 font-weight-bold primary--text mb-4">
			<% if (i18n) { %>{{ $t('views.home.title') }}<% } else { %>Premiers pas<% } %>
		</h2>

		<p><% if (i18n) { %>{{ $t('views.home.description.block1') }}<% } else { %>Vous venez de créer une nouvelle application front-end avec Vue Dash.<% } %></p>

		<p><% if (i18n) { %>{{ $t('views.home.description.block2') }}<% } else { %>Tout est prêt, vous pouvez dès à présent commencer à développer !<% } %></p>

		<RouterLink
			:to=" {
				name: 'about'
			}"<% if (cypress) { %>
			data-cy="aboutLink"<% } %>
		>
			<% if (i18n) { %>{{ $t('views.home.about.label') }}<% } else { %>À propos<% } %>
		</RouterLink>

		<VSpacer />

		<VBtn
			color="accent"
			outlined
			class="mt-8"<% if (cypress) { %>
			data-cy="sendNotification"<% } %>
			@click="sendNotification"
		>
			<% if (i18n) { %>{{ $t('views.home.sendNotification') }}<% } else { %>Envoyer une notification exemple<% } %>
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta, MetaInfo } from '@/decorators';

	import { mapActions } from 'vuex';

	/** Home page */
	@Component({
		// Vuex bindings
		methods: mapActions('notification', ['addNotification'])
	})
	export default class Home extends Vue {
		/* istanbul ignore next */
		sendNotification(): void {
			this.addNotification({
				type: 'success',
				message: 'Exemple de notification'
			});
		}

		/* istanbul ignore next */
		@Meta
		metaInfo(): MetaInfo {
			return {
				title: <% if (i18n) { %>this.$t('views.home.meta.title') as string<% } else { %>'Premiers pas'<% } %>,
				meta: [
					{
						name: 'description',
						content: <% if (i18n) { %>this.$t('views.home.meta.description') as string<% } else { %>'Votre nouvelle application Vue Dash.'<% } %>
					}
				]
			};
		}
	}
</script>
