<template>
	<VLayout>
		<VCol
			class="pa-0 ma-auto largeur-icone"
		>
			<VIcon
				size="30px"
				class="warning--text"
			>
				{{ iconWarning }}
			</VIcon>
		</VCol>
		<VCol class="pa-1 warning--text">
			<slot />
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiAlertCircle } from '@mdi/js';

	@Component
	export default class Warning extends Vue {
		iconWarning = mdiAlertCircle;
	}
</script>

<style lang="scss" scoped>
	.largeur-icone {
		max-width: 40px!important;
	}
</style>
