<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher le composant
		</VBtn>

		<DialogBox v-model="dialog">
			<template #title>
				<h4 class="display-1">
					Information
				</h4>
			</template>

			<VCardText class="px-0">
				Il est possible d'utiliser les slots pour modifier l'affichage par défaut.
			</VCardText>

			<template #actions>
				<VBtn
					color="primary"
					@click="dialog = false"
				>
					Retour
				</VBtn>
			</template>
		</Dialogbox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxSlots extends Vue {
		dialog = false;
	}
</script>
