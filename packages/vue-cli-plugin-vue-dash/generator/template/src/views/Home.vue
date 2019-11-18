<template>
	<PageCard
		min-height
		card-class="py-4 px-5 layout column align-start"
	>
		<h2 class="title font-weight-bold primary--text mb-4">
			<% if (i18n) { %>{{ $t('views.home.title') }}<% } else { %>Premiers pas<% } %>
		</h2>

		<p><% if (i18n) { %>{{ $t('views.home.description.block1') }}<% } else { %>Vous venez de créer une nouvelle application front-end avec Vue Dash.<% } %></p>

		<p><% if (i18n) { %>{{ $t('views.home.description.block2') }}<% } else { %>Tout est prêt, vous pouvez dès à présent commencer à développer !<% } %></p>

		<% if (i18n) { %><RouterLink :to="$t('views.home.about.to')"><% } else { %><RouterLink
			:to=" {
				name: 'about'
			}"
		><% } %>
			<% if (i18n) { %>{{ $t('views.home.about.label') }}<% } else { %>À propos<% } %>
		</RouterLink>

		<VSpacer />

		<VBtn
			color="accent"
			outlined
			@click="sendNotification"
		>
			<% if (i18n) { %>{{ $t('views.home.notify') }}<% } else { %>Envoyer une notification (exemple)<% } %>
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	import { mapActions } from 'vuex';

	import { NotificationObj } from '@cnamts/vue-dot/src/modules/notification';

	import { mdiCheck } from '@mdi/js';

	/** Home page */
	@Component({
		// Vuex bindings
		methods: mapActions('notification', ['notify'])
	})
	export default class Home extends Vue {
		/* istanbul ignore next */
		sendNotification() {
			this.notify({
				type: 'success',
				message: 'Exemple de notification',
				icon: mdiCheck
			});
		}

		/* istanbul ignore next */
		@Meta
		metaInfo() {
			return {
				title: <% if (i18n) { %>this.$t('views.home.meta.title')<% } else { %>'Premiers pas'<% } %>,
				meta: [
					{
						name: 'description',
						content: <% if (i18n) { %>this.$t('views.home.meta.description')<% } else { %>'Votre nouvelle application Vue Dash.'<% } %>
					}
				]
			};
		}
	}
</script>
