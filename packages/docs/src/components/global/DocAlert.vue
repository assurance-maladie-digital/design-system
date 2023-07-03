<template>
	<VAlert
		v-bind="$attrs"
		v-on="$listeners"
		:icon="icon"
		class="doc-alert w-100"
	>
		<slot />
	</VAlert>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from "vue-class-component";

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	import {
		mdiCheckCircleOutline,
		mdiAlertCircleOutline,
		mdiInformationOutline,
		mdiAlertOutline
	} from '@mdi/js';

	@Component({
		inheritAttrs: false
	})
	export default class DocAlert extends Vue {
		iconMapping: IndexedObject = {
			success: mdiCheckCircleOutline,
			error: mdiAlertCircleOutline,
			info: mdiInformationOutline,
			warning: mdiAlertOutline
		};

		get icon(): string | null {
			return this.iconMapping[this.$attrs.type];
		}
	}
</script>

<style lang="scss" scoped>
	.doc-alert :deep(p:last-child) {
		margin-bottom: 0 !important;
	}
</style>
