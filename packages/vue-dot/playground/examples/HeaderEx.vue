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
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu
						account-text=""
						:hide-user-icon="true"
					/>
				</template>
			</HeaderBar>
			<!-- Titre + Mon compte -->
			<h5>Titre + Mon compte</h5>
			<HeaderBar
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu
						account-text="Mon Compte"
						:hide-user-icon="true"
					/>
				</template>
			</HeaderBar>
			<!-- logo -->
			<h5>Logo</h5>
			<HeaderBar
				title="Titre long d'une application"
			>
				<template #logo>
					<img
						src="../../src/assets/logo.svg"
						class="d-block"
						:height="$vuetify.breakpoint.smAndDown ? '36' : '56'"
					>
				</template>
				<template #items>
					<HeaderBarMenu
						account-text=""
						:hide-user-icon="true"
					/>
				</template>
			</HeaderBar>
			<!-- logo mon compte -->
			<h5>Logo + Mon compte</h5>
			<HeaderBar
				title="Titre long d'une application"
			>
				<template #logo>
					<img
						src="../../src/assets/logo.svg"
						class="d-block"
						:height="$vuetify.breakpoint.smAndDown ? '36' : '56'"
					>
				</template>
				<template #items>
					<HeaderBarMenu
						account-text="Mon Compte"
						:hide-user-icon="true"
					/>
				</template>
			</HeaderBar>

			<!-- header : connecté -->
			<h3>connecté (version avec logo idem)</h3>
			<!-- Prénom nom -->
			<h5>Prénom nom</h5>
			<HeaderBar
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu
						:hide-user-icon="true"
						firstname="Baptiste"
						lastname="Coulon"
						:logged-in="true"
					/>
				</template>
			</HeaderBar>
			<!-- Prénom nom + information supplémentaire -->
			<h5>Prénom nom + information supplémentaire</h5>
			<HeaderBar
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu
						:hide-user-icon="true"
						firstname="Baptiste"
						lastname="Coulon"
						:logged-in="true"
						info="information supplémentaire"
					/>
				</template>
			</HeaderBar>
			<!-- Prénom Nom + Avatar  -->
			<h5>Prénom nom + Avatar</h5>
			<HeaderBar
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu
						:logged-in="true"
						firstname="Baptiste"
						lastname="Coulon"
					/>
				</template>
			</HeaderBar>
			<!-- Prénom Nom + Informations supplémentaires + Avatar -->
			<h5>Prénom Nom + Informations supplémentaires + Avatar </h5>
			<HeaderBar
				title="Titre"
			>
				<template #items>
					<HeaderBarMenu
						:logged-in="true"
						info="information supplémentaire"
						firstname="Baptiste"
						lastname="Coulon"
					/>
				</template>
			</HeaderBar>
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
