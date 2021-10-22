<template>
	<HeaderBar
		app
		fixed
		clipped-left
		service-title="Design System"
		@click="emitDrawerEvent"
	>
		<template #navigation-bar-content>
			<VBtn
				v-if="!$vuetify.breakpoint.lgAndUp"
				:aria-label="drawerActionLabel"
				:elevation="0"
				color="transparent"
				class="text-none px-2 mx-n2"
				@click="emitDrawerEvent"
			>
				<VIcon class="mr-4">
					{{ menuIcon }}
				</VIcon>

				Menu
			</VBtn>
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
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocHeader extends MixinsDeclaration {
		menuIcon = mdiMenu;

		get drawerActionLabel(): string {
			const action = this.drawer ? 'Masquer' : 'Afficher';

			return `${action} le menu`;
		}

		emitDrawerEvent(): void {
			this.$emit('update:drawer', !this.drawer);
		}
	}
</script>
