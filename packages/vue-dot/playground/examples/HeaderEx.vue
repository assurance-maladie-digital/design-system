<template>
	<DocSection
		title="Header"
	>
		<div style="width: 100%">
			<!-- header : non connecté -->
			<h2 class="subtitle-1 font-weight-bold">
				Non connecté
			</h2>
			<!-- titre -->
			<h3 class="subtitle-2">
				Titre
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				account-text=""
			/>
			<!-- Titre + Mon compte -->
			<h3 class="subtitle-2">
				Titre + Mon compte
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu />
				</template>
			</HeaderBar>
			<!-- logo -->
			<h3 class="subtitle-2">
				Logo
			</h3>
			<HeaderBar
				:app="false"
				title="Titre long d'une application"
				account-text=""
			>
				<template #logo>
					<img
						src="../../src/assets/logo.svg"
						class="d-block"
						:height="$vuetify.breakpoint.smAndDown ? '36' : '56'"
					>
				</template>
			</HeaderBar>
			<!-- logo mon compte -->
			<h3 class="subtitle-2">
				Logo + Mon compte
			</h3>
			<HeaderBar
				:app="false"
				title="Titre long d'une application"
			>
				<template #logo>
					<img
						src="../../src/assets/logo.svg"
						class="d-block"
						:height="$vuetify.breakpoint.smAndDown ? '36' : '56'"
					>
				</template>
			</HeaderBar>

			<!-- header : connecté -->
			<h2 class="subtitle-1 font-weight-bold">
				connecté (version avec logo idem)
			</h2>
			<!-- Prénom nom -->
			<h3 class="subtitle-2">
				Prénom nom
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				:hide-user-icon="true"
				firstname="Prénom"
				lastname="nom"
				:logged-in="true"
			/>
			<!-- Prénom nom + information supplémentaire -->
			<h3 class="subtitle-2">
				Prénom nom + information supplémentaire
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				:hide-user-icon="true"
				firstname="Prénom"
				lastname="nom"
				:logged-in="true"
				info="information supplémentaire"
			/>
			<!-- Prénom Nom + Avatar  -->
			<h3 class="subtitle-2">
				Prénom nom + Avatar
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				:logged-in="true"
				firstname="Prénom"
				lastname="nom"
			/>
			<!-- Prénom Nom + Informations supplémentaires + Avatar -->
			<h3 class="subtitle-2">
				Prénom Nom + Informations supplémentaires + Avatar
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				logged-in
				info="information supplémentaire"
				firstname="Prénom"
				lastname="nom"
			/>

			<h2 class="subtitle-1 font-weight-bold">
				Header avec navigation
			</h2>

			<h3 class="subtitle-2">
				Onglets seuls
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				:navigation-list="['onglet', 'onglet']"
				hide-user-icon
				logged-in
				firstname="Prénom"
				lastname="nom"
			/>

			<h3 class="subtitle-2">
				Nom du projet + onglets
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				:navigation-list="['onglet', 'onglet']"
				breadcrumb="projet"
				hide-user-icon
				logged-in
				:firstname="null"
				lastname="nom"
			/>

			<h3 class="subtitle-2">
				Nom sous-projet + onglets
			</h3>
			<HeaderBar
				v-model="navigationIndex"
				:app="false"
				title="Titre"
				:navigation-list="['onglet1', 'onglet2', 'onglet3', 'onglet4', 'onglet56666']"
				:actions-list="['test1', 'test2']"
				breadcrumb="sous projet test long"
				back
				:hide-user-icon="false"
				:logged-in="true"
				firstname="Prénom"
				lastname="nom"
				info="info supplémentaire"
			/>

			<h3 class="subtitle-2">
				Recherche activée
			</h3>
			<HeaderBar
				:app="false"
				title="Titre"
				searchable
			/>
		</div>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				navigationIndex: 2
			};
		}

	});
</script>

<style scoped>

</style>
