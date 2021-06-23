<template>
	<div class="d-flex align-center">
		<p class="mb-0 mr-1">
			Ticket n°<b>7079114565</b>
		</p>

		<CopyBtn
			label="Copier le numéro de ticket"
			text-to-copy="7079114565"
		>
			<template #icon>
				<VIcon>
					{{ duplicateIcon }}
				</VIcon>
			</template>

			<template #tooltip>
				Le texte a bien été copié
			</template>
		</CopyBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiContentDuplicate  } from '@mdi/js';

	@Component
	export default class CopyBtnSlots extends Vue {
		duplicateIcon = mdiContentDuplicate ;
	}
</script>
