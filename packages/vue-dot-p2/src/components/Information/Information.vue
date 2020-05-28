<template>
	<VLayout>
		<VCol class="pa-0 ma-auto padding-left-info largeur-icone">
			<VIcon
				size="25px"
				class="help-icon info"
			>
				{{ iconInformation }}
			</VIcon>
		</VCol>

		<VCol class="pa-1 info--text">
			<slot />
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiInformationVariant } from '@mdi/js';

	@Component
	export default class Information extends Vue {
		iconInformation = mdiInformationVariant;
	}
</script>

<style lang="scss" scoped>
	.largeur-icone {
		max-width: 40px !important;
	}

	.help-icon {
		color: white;
		border-radius: 28px;
	}

	.padding-left-info {
		padding-left: 2.5px !important;
	}
</style>
