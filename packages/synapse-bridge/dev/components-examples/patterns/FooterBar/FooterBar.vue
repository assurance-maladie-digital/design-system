<template>
	<VApp>
		<PageContainer>
			<FooterBar v-bind='docProps'/>

			<br /><br />

			<FooterBar v-bind='docProps'>
				<p class="text--secondary mb-0">Contenu supplémentaire.</p>
			</FooterBar>

			<br /><br />

			<FooterBar v-bind='docProps' hide-sitemap-link>
				<p class="text--secondary mb-0">Contenu supplémentaire.</p>
			</FooterBar>

			<br /><br />

			<FooterBar v-bind='docProps' class='theme--dark'>
				<VRow :no-gutters="isXs" class="max-width-none">
					<VCol cols="12" sm="6">
						<CollapsibleList
							:items="remboursementItems"
							list-title="Remboursement"
							class='theme--dark'
						/>
					</VCol>

					<VCol cols="12" sm="6">
						<CollapsibleList
							:items="healthItems"
							list-title="Santé"
							class='theme--dark'
						/>
					</VCol>
				</VRow>
			</FooterBar>
		</PageContainer>
	</VApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageContainer from "@/elements/PageContainer/PageContainer.vue";
import FooterBar from "@/patterns/FooterBar/FooterBar.vue";
import CollapsibleList from "@/patterns/FooterBar/CollapsibleList/CollapsibleList.vue";
import { ListItem } from "@/patterns/FooterBar/CollapsibleList/types";

export default defineComponent({
	components: {
		PageContainer,
		FooterBar,
		CollapsibleList,
	},
	data() {
		return {
			docProps: {
				sitemapRoute: "/",
				cguRoute: "/",
				cookiesRoute: "/",
				legalNoticeRoute: "/",
				a11yStatementRoute: "/",
			},
			remboursementItems: [
				{
					text: "Ce qui est remboursé",
					href: "https://www.ameli.fr/assure/remboursements/rembourse",
				},
				{
					text: "Ce qui reste à votre charge",
					href: "https://www.ameli.fr/assure/remboursements/reste-charge",
				},
				{
					text: "Être bien remboursé",
					href: "https://www.ameli.fr/assure/remboursements/etre-bien-rembourse",
				},
			] as ListItem[],

			healthItems: [
				{
					text: "Mon espace santé",
					href: "https://www.ameli.fr/assure/sante/mon-espace-sante",
				},
				{
					text: "Accomplir les bons gestes",
					href: "https://www.ameli.fr/assure/sante/bons-gestes",
				},
				{
					text: "Réagir en cas d’urgence",
					href: "https://www.ameli.fr/assure/sante/urgence",
				},
				{
					text: "Télésanté",
					href: "https://www.ameli.fr/assure/sante/telesante",
				},
			] as ListItem[],
		};
	},
	computed: {
		isXs(): boolean {
			return this.$vuetify.display.name === "xs";
		},
	},
});
</script>
