<template>
	<HeaderBar>
		<VBtn
			:elevation="0"
			:icon="$vuetify.breakpoint.xsOnly"
			:height="height"
			class="pa-0 px-sm-3 py-sm-2"
		>
			<span class="d-none d-sm-inline-flex flex-column justify-start text-none font-weight-bold">
				Édith Cartier
			</span>

			<VIcon
				size="40px"
				color="grey darken-1"
				class="ml-0 ml-sm-5"
			>
				{{ userIcon }}
			</VIcon>
		</VBtn>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiAccountCircle } from '@mdi/js';

	@Component
	export default class HeaderBarDefaultSlot extends Vue {
		userIcon = mdiAccountCircle;

		get height(): string | null {
			return this.$vuetify.breakpoint.xsOnly ? null : 'auto';
		}
	}
</script>
