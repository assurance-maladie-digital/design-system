<template>
	<span
		v-if="link"
		class="mb-2 mb-md-0"
	>
		Éditer cette page sur

		<a
			:href="link"
			target="_blank"
			rel="noopener"
			class="text-decoration-none primary--text font-weight-medium d-inline-block"
		>
			GitHub

			<VIcon
				size=".875rem"
				color="primary"
			>
				{{ openInNewIcon }}
			</VIcon>
		</a>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiOpenInNew } from '@mdi/js';

	import { DEFAULT_BRANCH, DEFAULT_DIR, REPO } from '../../constants';

	const Props = Vue.extend({
		props: {
			path: {
				type: String,
				required: true
			},
			extension: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	export default class DocGithubLink extends MixinsDeclaration {
		openInNewIcon = mdiOpenInNew;

		get link(): string {
			const linkArray = [
				REPO,
				'edit',
				DEFAULT_BRANCH,
				DEFAULT_DIR,
				`content${this.path}${this.extension}`
			];

			return linkArray.filter(path => Boolean(path)).join('/');
		}
	}
</script>
