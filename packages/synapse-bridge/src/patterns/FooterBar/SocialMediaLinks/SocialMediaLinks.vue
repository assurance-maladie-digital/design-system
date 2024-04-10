<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { locales } from "../locales";
import type { SocialMediaLink } from "./types";

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
});
</script>

<template>
	<div class="vd-social-media-links">
		<span class="vd-social-media-links-label text-subtitle-2 text--primary">
			{{ locales.followUs }}
		</span>

		<ul class="d-flex justify-start justify-sm-end max-width-none ml-n2">
			<li
				v-for="(social, index) in links"
				:key="index"
			>
				<VBtn
					:href="social.href"
					target="_blank"
					rel="noopener noreferrer"
					:icon="true"
					class="mx-1"
					elevation='0'
					variant="text"
				>
					<VIcon size="30px" class="vd-social-media-links-icon">
						{{ social.icon }}
					</VIcon>
				</VBtn>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	@use "@cnamts/design-tokens/dist/tokens";

	li {
		list-style: none;
	}

	.vd-social-media-links-label.text--primary {
		color: tokens.$vd-primary;
	}

	.vd-social-media-links-icon {
		color: tokens.$vd-grey-base;
	}

	.v-btn--icon {
		width: calc(var(--v-btn-height) + 5px);
		height: calc(var(--v-btn-height) + 5px);
		border: 0;
	}

	.theme--dark .v-btn--variant-text:hover :deep() {
		background: rgba(white , 0.1);
	}
</style>
