<template>
	<SubHeader>
		<template #back-btn>
			<VBtn
				color="white"
				depressed
				class="secondary--text"
			>
				Retour
			</VBtn>
		</template>

		<template #title>
			<h3 class="headline font-weight-bold mt-2">
				Dossier n°&nbsp;42
			</h3>
		</template>

		<template #sub-title>
			<h4 class="title mt-1">
				Traité par Paul Dupont
			</h4>
		</template>

		<template #additional-informations>
			<p class="font-weight-bold mt-4 mb-0">
				15 modifications
			</p>
		</template>

		<template #right-content>
			<div class="d-flex flex-column align-start flex-grow-0 ml-auto mt-auto">
				<VBtn
					text
					color="white"
				>
					<VIcon class="mr-2">
						{{ cancelIcon }}
					</VIcon>

					Clore le dossier
				</VBtn>

				<VBtn
					text
					color="white"
					class="mt-2"
				>
					<VIcon class="mr-2">
						{{ copyIcon }}
					</VIcon>

					Dupliquer le dossier
				</VBtn>
			</div>
		</template>
	</SubHeader>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCancel, mdiContentCopy } from '@mdi/js';

	@Component
	export default class SubHeaderSlots extends Vue {
		cancelIcon = mdiCancel;
		copyIcon = mdiContentCopy;
	}
</script>
