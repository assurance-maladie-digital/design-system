<template>
	<VLayout
		tag="footer"
		align-center
		justify-center
		class="footer white px-3 py-2"
		role="footer"
	>
		<span class="grey lighten-4 px-3 py-1 secondary--text">
			<span class="font-weight-bold">
				<% if (i18n) { %>{{ $t('components.layout.appFooter.versionLabel') }}<% } else { %>Version<% } %> {{ version }}
			</span>

			<% if (i18n) { %>{{ $t('components.layout.appFooter.date') }}<% } else { %><%= footerDate %><% } %>
		</span>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import pkg from '../../../package.json';

	/** The application footer */
	@Component
	export default class Footer extends Vue {
		/** The version from package.json */
		version = pkg.version;
	}
</script>

<style lang="scss" scoped>
	.footer {
		flex: none;
		box-shadow: 0 10px 10px 10px rgba(0, 0, 0, .2);
	}
</style>
