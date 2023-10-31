<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { locales } from "../locales";

import { SocialMediaLink } from "./types";

import { useDisplay } from "vuetify";

export default defineComponent({
	props: {
		links: {
			type: Array as PropType<SocialMediaLink[]>,
			default: null,
		},
	},
	data() {
		return {
			locales,
		};
	},
	computed: {
		isMobile(): boolean {
			const { name } = useDisplay();
			return name.value === "xs" || name.value === "sm";
		},
	},
});
</script>

<template>
	<div class="vd-social-media-links">
		<span class="text-subtitle-2 primary--text">
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
