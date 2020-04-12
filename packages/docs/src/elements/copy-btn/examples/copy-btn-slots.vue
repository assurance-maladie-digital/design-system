<template>
	<VLayout align-center>
		<p class="mb-0 mr-1">Copiez le texte :</p>

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

<script>
	import { mdiPlusCircle } from '@mdi/js';

	export default {
		data() {
			return {
				addIcon: mdiPlusCircle
			};
		}
	};
</script>
