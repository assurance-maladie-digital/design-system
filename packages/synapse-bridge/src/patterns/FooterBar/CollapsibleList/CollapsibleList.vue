<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ListItem } from "./types";

export default defineComponent({
	props: {
		listTitle: {
			type: String,
			default: null,
		},
		items: {
			type: Array as PropType<ListItem[]>,
			default: () => [],
		},
	},
	computed: {
		isMobile(): boolean {
			return this.$vuetify.display.smAndDown;
		},
	},
});
</script>

<template>
	<VExpansionPanels
		v-if="isMobile"
		class="vd-collapse-list-mobile"
		variant="accordion"
		flat
	>
		<VExpansionPanel
			class="vd-panel"
			elevation="0"
			bg-color="transparent"
		>
			<VExpansionPanelTitle class="vd-panel-title text-subtitle-2 pl-0 py-4">
				{{ listTitle }}
			</VExpansionPanelTitle>

			<VExpansionPanelText class="vd-panel-text">
				<ul class="pl-0">
					<li
						v-for="(item, index) in items"
						:key="index"
						class="py-3"
					>
						<a
							:href="item.href"
							:aria-label="item.ariaLabel"
							class="text-body-2 text-decoration-none text--primary"
						>
							{{ item.text }}
						</a>
					</li>
				</ul>
			</VExpansionPanelText>
		</VExpansionPanel>
	</VExpansionPanels>

	<div v-else class="vd-collapse-list">
		<h4 class="text-subtitle-1 font-weight-bold mb-3">
			{{ listTitle }}
		</h4>

		<ul class="pl-0">
			<li
				v-for="(item, index) in items"
				:key="index"
				:class="{ 'mb-2': index < items.length - 1 }"
			>
				<a
					:href="item.href"
					:aria-label="item.ariaLabel"
					class="text-body-2 text-decoration-none text--primary"
				>
					{{ item.text }}
				</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>

.vd-panel {
	background-color: transparent;
}

.vd-panel-title :deep(.v-expansion-panel-title__overlay) {
	background: transparent !important;
}

.vd-panel-text :deep(.v-expansion-panel-text__wrapper) {
	padding: 0;
}

li {
	list-style: none;
}

a {
	transition: 0.15s;
	padding-top: 1px; // Add top padding to account for bottom border
	border-bottom: 1px solid transparent;

	&:hover,
	&:focus {
		border-color: currentColor;
	}
}

.vd-collapse-list a {
	color: black;
}

.vd-collapse-list.theme--dark :deep() {
	h4, ul, a, button {
		color: white !important;
	}
}

.vd-collapse-list-mobile.theme--dark :deep() {
	button {
		color: white !important;
	}
}
</style>
