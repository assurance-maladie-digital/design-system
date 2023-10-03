<script lang="ts">
	import { defineComponent } from 'vue'
	import { mdiArrowLeft } from '@mdi/js'

	import { locales } from './locales'

	export default defineComponent({
		props: {
			hideBackIcon: {
				type: Boolean,
				default: false
			},
			dark: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				backIcon: mdiArrowLeft,
				locales
			}
		}
	})
</script>

<template>
	<VBtn
		v-bind="$attrs"
		:variant="dark ? 'outlined' : 'text'"
		:theme="dark ? 'dark' : 'light'"
		:color="dark ? 'white' : 'primary'"
		:outlined="dark"
		:class="{
			'px-0': !dark,
			'pr-1': !dark && !hideBackIcon
		}"
		class="vd-back-btn text-none"
	>
		<slot name="icon">
			<VIcon
				v-if="!hideBackIcon"
				:color="dark ? 'white' : 'primary'"
				:class="{ 'ml-n1': dark }"
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

<style lang="scss" scoped>
	// Disable hover state on light theme
	.v-btn.v-theme--light:deep() {
		.v-btn__underlay,
		.v-btn__overlay {
			display: none;
		}
	}
</style>
