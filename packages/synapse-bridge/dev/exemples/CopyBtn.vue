<template>
	<div class="ma-4">
		<CopyBtn
			label="Copier le numéro de dossier"
			:text-to-copy="() => 'example-1'"
		/>

		<CopyBtn
			label="Copier le numéro de dossier"
			text-to-copy="example-2"
		/>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="example-3"
			hide-tooltip
		/>

		<CopyBtn
			:tooltip-duration="5000"
			label="Copier le numéro de patient"
			text-to-copy="example-4"
		/>

		<CopyBtn
			label="Copier le numéro de ticket"
			text-to-copy="example-6"
		>
			<template #icon>
				<VIcon>
					{{ mdiContentDuplicate }}
				</VIcon>
			</template>

			<template #tooltip>
				Le texte a bien été copié
			</template>
		</CopyBtn>

		<CopyBtn
			:vuetify-options="vuetifyOptions"
			label="Copier le numéro d'utilisateur"
			text-to-copy="example-5"
		/>
	</div>
</template>

<script lang="ts" setup>
	import CopyBtn from '../../src/elements/CopyBtn'
	import { mdiContentDuplicate } from '@mdi/js'

	const vuetifyOptions = {
		menu: {
			location: 'bottom center',
			offset: 2
		},
		btn: {
			density: 'default'
		},
		icon: {
			color: 'indigo'
		}
	}
</script>
