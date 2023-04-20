<template>
	<FooterBar v-bind="docProps">
		<VRow
			:no-gutters="$vuetify.breakpoint.xs"
			class="max-width-none"
		>
			<VCol
				cols="12"
				sm="6"
			>
				<CollapsibleList
					:items="remboursementItems"
					list-title="Remboursement"
				/>
			</VCol>

			<VCol
				cols="12"
				sm="6"
			>
				<CollapsibleList
					:items="healthItems"
					list-title="Santé"
				/>
			</VCol>
		</VRow>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import CollapsibleList from '@cnamts/vue-dot/src/patterns/FooterBar/CollapsibleList';
	import { ListItem } from '@cnamts/vue-dot/src/patterns/FooterBar/CollapsibleList/types';

	@Component ({
		components: {
			CollapsibleList
		}
	})
	export default class FooterBarCollapsibleList extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		remboursementItems: ListItem[] = [
			{
				text: 'Ce qui est remboursé',
				href: 'https://www.ameli.fr/assure/remboursements/rembourse'
			},
			{
				text: 'Ce qui reste à votre charge',
				href: 'https://www.ameli.fr/assure/remboursements/reste-charge'
			},
			{
				text: 'Être bien remboursé',
				href: 'https://www.ameli.fr/assure/remboursements/etre-bien-rembourse'
			}
		];

		healthItems: ListItem[] = [
			{
				text: 'Mon espace santé',
				href: 'https://www.ameli.fr/assure/sante/mon-espace-sante'
			},
			{
				text: 'Accomplir les bons gestes',
				href: 'https://www.ameli.fr/assure/sante/bons-gestes'
			},
			{
				text: 'Réagir en cas d’urgence',
				href: 'https://www.ameli.fr/assure/sante/urgence'
			},
			{
				text: 'Télésanté',
				href: 'https://www.ameli.fr/assure/sante/telesante'
			}
		];
	}
</script>
