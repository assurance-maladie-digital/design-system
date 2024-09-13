<template>
	<NirField
		v-model="nir"
		required
		outlined
		:nir-length="15"
	>
		<template #number-append-icon>
			<VIcon color="success">
				{{ mdiCheck }}
			</VIcon>
		</template>
		<template #key-append-icon>
			<VIcon color="success">
				{{ mdiCheck }}
			</VIcon>
		</template>
	</NirField>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { mdiCheck } from '@mdi/js';

@Component
export default class NirFieldRequired extends Vue {
	nir: string | null = null;
	mdiCheck = mdiCheck;
}
</script>
