<template>
	<VLayout>
		<VCol
			class="pa-0 ma-auto largeur-icone"
		>
			<VIcon
				size="30px"
				class="error--text"
			>
				{{ iconErreur }}
			</VIcon>
		</VCol>
		<VCol class="pa-1 error--text">
			<slot />
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiDoNotDisturb } from '@mdi/js';

	@Component
	export default class Error extends Vue {
		iconErreur = mdiDoNotDisturb;
	}
</script>

<style lang="scss" scoped>
	.largeur-icone {
		max-width: 40px!important;
	}
</style>
