<template>
	<div>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Afficher le composant
		</VBtn>

		<DialogBox
			v-model="dialog"
			:width="dialogWidth"
			title="Enregistrement"
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<p>Souhaitez-vous procéder à l’enregistrement ?</p>
		</DialogBox>
	</div>
</template>

<script lang="ts">
import DialogBox from "../src/elements/DialogBox";
import { defineComponent } from "vue";

import { tokens } from '@cnamts/design-tokens';

export default defineComponent({
	components: {
		DialogBox,
	},
	data() {
		return {
			dialog: false,
			dialogWidth: tokens.dialogWidth.dialogSmall
		};
	},
});
</script>
