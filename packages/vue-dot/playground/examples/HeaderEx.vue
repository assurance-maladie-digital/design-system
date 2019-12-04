<template>
	<DocSection
		title="Header"
	>
		<div style="width: 100%">
			<!-- header : non connecté -->
			<h3>Non connecté</h3>
			<!-- titre -->
			<h5>Titre</h5>
			<HeaderBar
				:app="false"
				title="Titre"
				account-text=""
			/>
			<!-- Titre + Mon compte -->
			<h5>Titre + Mon compte</h5>
			<HeaderBar
				:app="false"
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu />
				</template>
			</HeaderBar>
			<!-- logo -->
			<h5>Logo</h5>
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
			<h5>Logo + Mon compte</h5>
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
			<h3>connecté (version avec logo idem)</h3>
			<!-- Prénom nom -->
			<h5>Prénom nom</h5>
			<HeaderBar
				:app="false"
				title="Titre"
				:hide-user-icon="true"
				firstname="Baptiste"
				lastname="Coulon"
				:logged-in="true"
			/>
			<!-- Prénom nom + information supplémentaire -->
			<h5>Prénom nom + information supplémentaire</h5>
			<HeaderBar
				:app="false"
				title="Titre"
				:hide-user-icon="true"
				firstname="Baptiste"
				lastname="Coulon"
				:logged-in="true"
				info="information supplémentaire"
			/>
			<!-- Prénom Nom + Avatar  -->
			<h5>Prénom nom + Avatar</h5>
			<HeaderBar
				:app="false"
				title="Titre"
				:logged-in="true"
				firstname="Baptiste"
				lastname="Coulon"
			/>
			<!-- Prénom Nom + Informations supplémentaires + Avatar -->
			<h5>Prénom Nom + Informations supplémentaires + Avatar </h5>
			<HeaderBar
				:app="false"
				title="Titre"
				:logged-in="true"
				info="information supplémentaire"
				firstname="Baptiste"
				lastname="Coulon"
			/>

			<h3>Header avec navigation</h3>

			<h5>Onglets seuls</h5>
			<HeaderBar
				:app="false"
				title="Titre"
				:navigation-list="['onglet', 'onglet']"
				:hide-user-icon="true"
				:logged-in="true"
				firstname="Baptiste"
				lastname="Coulon"
			/>

			<h5>Nom du projet + onglets </h5>
			<HeaderBar
				:app="false"
				title="Titre"
				:navigation-list="['onglet', 'onglet']"
				breadcrumb="projet"
				:hide-user-icon="true"
				:logged-in="true"
				firstname="Baptiste"
				lastname="Coulon"
			/>

			<h5>Nom sous-projet + onglets </h5>
			<HeaderBar
				title="Titre"
				:navigation-list="['onglet1', 'onglet2', 'onglet3', 'onglet4', 'onglet5']"
				:actions-list="['test1', 'test2']"
				breadcrumb="sous projet"
				back
				:hide-user-icon="false"
				:logged-in="true"
				firstname="Jean philippe baptiste gezg"
				lastname="Coulon"
				info="info supp"
			/>
		</div>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({

	});
</script>

<style scoped>

</style>
