<template>
	<VBtn
		v-bind="$attrs"
		:class="{ 'pr-1': !hideBackIcon }"
		text
		color="primary"
		class="vd-back-btn text-none px-0"
		role="button"
		v-on="$listeners"
	>
		<slot name="icon">
			<VIcon
				v-if="!hideBackIcon"
				color="primary"
				class="mr-1"
			>
				{{ backIcon }}
			</VIcon>
		</slot>

		<slot>
			{{ locales.label }}
		</slot>
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiArrowLeft } from '@mdi/js';

	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			hideBackIcon: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class BackBtn extends MixinsDeclaration {
		locales = locales;

		backIcon = mdiArrowLeft;
	}
</script>

<style lang="scss" scoped>
	.v-btn {
		// Disable hover state
		&::before {
			content: none;
		}

		&:focus-visible {
			outline: 2px solid;
		}

		.v-icon {
			flex: none;
		}
	}
</style>
