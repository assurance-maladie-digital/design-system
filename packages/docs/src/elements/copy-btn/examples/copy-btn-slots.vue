<template>
	<VLayout align-center>
		<p class="mb-0 mr-1">
			Copiez le texte :
		</p>

		<CopyBtn
			label="Copier le texte"
			text-to-copy="Exemple"
		>
			<template #icon>
				<VIcon>
					{{ addIcon }}
				</VIcon>
			</template>

			<template #tooltip>
				Le texte a bien été copié
			</template>
		</CopyBtn>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiPlusCircle } from '@mdi/js';

	@Component
	export default class CopyBtnSlots extends Vue {
		addIcon = mdiPlusCircle;
	}
</script>
