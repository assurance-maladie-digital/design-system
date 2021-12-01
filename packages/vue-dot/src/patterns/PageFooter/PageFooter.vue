<template>
	<VFooter
		:elevation="3"
		color="#fff"
		class="d-flex justify-center"
	>
		<RouterLink
			:to="{
				name: 'cgu'
			}"
			class="footer-link my-2 mx-4"
		>
			{{ $t('components.layout.appFooter.cgu') }}
		</RouterLink>

		<RouterLink
			:to="{
				name: 'legalNotice'
			}"
			class="footer-link my-2 mx-4"
		>
			{{ $t('components.layout.appFooter.legalNoticeBtn') }}
		</RouterLink>

		<p class="grey--text text--darken-2 my-2 mx-4">
			{{ $t('components.layout.appFooter.accessibilityLevel') }}
		</p>

		<p class="grey--text text--darken-2 my-2 mx-4">
			{{ $t('components.layout.appFooter.version') }} {{ version }}
		</p>
	</VFooter>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class AppFooter extends Vue {
		version = process.env.VUE_APP_VERSION;
	}
</script>

<style lang="scss" scoped>
	.footer-link {
		color: inherit;
		transition: .15s;
		text-decoration: none;
		border-bottom: 1px solid transparent;

		&:hover,
		&:focus {
			border-color: currentColor;
		}
	}
</style>