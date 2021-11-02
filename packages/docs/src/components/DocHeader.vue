<template>
	<HeaderBar
		app
		fixed
		clipped-left
		service-title="Design System"
		@click="emitDrawerEvent"
	>
		<template #navigation-bar-content>
			<div
				v-if="!$vuetify.breakpoint.lgAndUp"
				class="d-flex align-center"
			>
				<VBtn
					:aria-label="menuBtnActionLabel"
					:elevation="0"
					width="36px"
					height="36px"
					icon
					class="mx-n2"
					@click="emitDrawerEvent"
				>
					<VIcon>
						{{ menuIcon }}
					</VIcon>
				</VBtn>

				<h2
					v-if="menuBtnLabel"
					class="text-body-2 text-sm-subtitle-1 ml-4"
				>
					{{ menuBtnLabel }}
				</h2>
			</div>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiMenu } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			drawer: {
				type: Boolean,
				default: false
			},
			menuBtnLabel: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocHeader extends MixinsDeclaration {
		menuIcon = mdiMenu;

		get menuBtnActionLabel(): string {
			const action = this.drawer ? 'Masquer' : 'Afficher';

			return `${action} le menu`;
		}

		emitDrawerEvent(): void {
			this.$emit('update:drawer', !this.drawer);
		}
	}
</script>
