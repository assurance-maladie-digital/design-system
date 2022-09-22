<template>
	<div class="new-filter">
		<VBtn
			outlined
			@click="showSideBar = !showSideBar"
		>
			<span class="mr-2">{{ filtersCount }}</span>
			<VIcon>
				{{ filterIcon }}
			</VIcon>
			<span>Filtres</span>
		</VBtn>
		<VNavigationDrawer
			v-if="showSideBar"
			permanent
			absolute
			right
		>
			<v-expansion-panels
				accordion
				flat
				class="mt-2"
			>
				<v-expansion-panel
					v-for="(item,i) in filters"
					:key="i"
				>
					<v-expansion-panel-header>
						<div
							style="display: block"
							class="text--primary"
						>
							<span>{{ item }} ({{ chips.length }})</span>
						</div>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-chip-group
							active-class="primary--text"
							column
						>
							<v-chip
								v-for="chip in chips"
								:key="chip"
								small
								close
							>
								{{ chip }}
							</v-chip>
						</v-chip-group>
						<VDivider class="my-2" />
						<span class="description-text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						<div class="mt-6">
							<v-select
								:items="[1,2,3,4,5]"
								label="Outlined style"
								dense
								outlined
							/>
							<v-select
								:items="[1,2,3,4,5]"
								label="Outlined style"
								dense
								outlined
							/>
						</div>
					</v-expansion-panel-content>
					<VDivider class="my-2" />
				</v-expansion-panel>
			</v-expansion-panels>
			<div
				class="ma-2"
			>
				<v-btn
					class="mb-2"
					outlined
					block
					small
					color="indigo"
				>
					Fermer
				</v-btn>
				<v-btn
					class="mb-2"
					outlined
					block
					small
					color="indigo"
				>
					Réinitialiser
				</v-btn>
				<v-btn
					block
					small
					color="primary"
				>
					Appliquer
				</v-btn>
			</div>
		</VNavigationDrawer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';

	import { mdiCloseCircle, mdiWindowClose, mdiPencil, mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			disabled: {
				type: String,
				default: 'default text'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({})
	export default class FileUpload extends MixinsDeclaration {
		locales = locales;
		closeIcon = mdiCloseCircle;
		deleteIcon = mdiWindowClose;
		editIcon = mdiPencil;
		filterIcon = mdiFilterVariant;

		showSideBar = false;

		chips = ['azer', 'rtyu', 'yuio', '!çà)'];
		filters = ['Prix', 'Taille', 'Poids', 'Vendeurs', 'Livraison'];

		get filtersCount(): string {
			return `${this.filters.length}`;
		}
	}
</script>

<style lang="scss" scoped>
.new-filter {
	.v-navigation-drawer {
		width: 300px !important;
	}
	.v-expansion-panel-header {
		min-height: 0 !important;
		padding: 8px 24px;
	}
	.description-text {
		font-size: 11px;
	}
}
</style>
