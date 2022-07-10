<template>
	<VMenu
		v-model="menuModel"
		max-height="600px"
		offset-y
		@input="resetSearch"
	>
		<template #activator="{ attrs }">
			<VTextField
				ref="searchInput"
				v-model="value"
				v-bind="attrs"
				:background-color="backgroundColor"
				:class="textfieldClasses"
				:flat="!isFocused"
				:placeholder="placeholder"
				class="mx-2 mx-md-4"
				dense
				hide-details
				outlined
				@focus="isFocused = true"
				@blur="isFocused = false"
				@input="fetchData"
			>
				<template
					#prepend-inner
					v-if="!isMobile"
				>
					<VIcon
						:color="!isFocused ? 'grey' : undefined"
						class="ml-1 mr-2"
					>
						{{ magnifyIcon }}
					</VIcon>
				</template>
			</VTextField>
		</template>

		<VCard>
			<VList
				dense
				nav
			>
				<DocSearchResults
					v-for="(item, index) in resultsFormatted"
					:key="index"
					:item="item"
				/>
			</VList>

			<div class="d-flex flex-row justify-end px-2 px-md-4">
				<AisPoweredBy />
			</div>
		</VCard>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import DocSearchResults from './DocSearchResults.vue';

	import { Refs } from '@cnamts/vue-dot/src/types';

	import { mdiMagnify } from '@mdi/js';

	import { formatSearchData } from '../../functions/formatSearchData';

	import { search } from '../../services/search/api';
	import { SearchResult, SearchResultFormatted } from '../../services/search/types';

	const minSearchLength = parseInt(process.env.SEARCH_MIN_LENGTH as string, 10);

	@Component<DocSearch>({
		components: {
			DocSearchResults
		}
	})
	export default class DocSearch extends Vue {
		$refs!: Refs<{
			searchInput: HTMLInputElement & {
				$refs: {
					input: any;
				}
			}
		}>;

		magnifyIcon = mdiMagnify;

		isFocused = false;
		menuModel = false;

		data: SearchResult | null = null;

		value = '';

		get placeholder(): string {
			return `Rechercher (${minSearchLength} caractères min)`
		}

		get backgroundColor(): string  {
			return !this.isFocused ? 'grey lighten-3' : '';
		}

		get flat(): boolean {
			return !this.isFocused
		}

		get textfieldClasses(): string {
			return this.menuModel ? 'rounded-b-0' : ' rounded-lg'
		}

		get resultsFormatted(): SearchResultFormatted[] {
			if (!this.data) {
				return [];
			}

			return formatSearchData(this.data);
		}

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		async fetchData(): Promise<void> {
			if (!this.value || this.value.length < minSearchLength) {
				this.menuModel = false;
				return;
			}

			const data = await search(this.value);
			this.data = data as unknown as SearchResult;

			this.menuModel = true;
		}

		resetSearch(): void {
			this.value = '';
			this.menuModel = false;
		}
	}
</script>

<style lang="scss" scoped>
	.v-menu__content {
		width: 0;
	}
</style>
