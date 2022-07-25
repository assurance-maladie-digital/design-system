<template>
	<div class="vd-social-media-links">
		<span class="text-body-2 primary--text">
			{{ locales.followUs }}
		</span>

		<div class="d-flex justify-start justify-sm-end max-width-none mx-n2">
			<VBtn
				v-for="social in links"
				:key="social.index"
				:href="social.href"
				target="_blank"
				rel="noopener noreferrer"
				color="grey darken-2"
				icon
				class="mx-1"
			>
				<VIcon size="30px">
					{{ social.icon }}
				</VIcon>
			</VBtn>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from '../locales';

	import { SocialMediaLink } from './types';

	const Props = Vue.extend({
		props: {
			links: {
				type: Array as PropType<SocialMediaLink[]>,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class SocialMediaLinks extends MixinsDeclaration {
		locales = locales;

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
</script>
