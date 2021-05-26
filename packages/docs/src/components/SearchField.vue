<template>
	<VMenu offset-y>
		<template #activator="{ on, attrs }">
			<VTextField
				v-model="search"
				v-bind="attrs"
				v-on="on"
				ref="search"
				:background-color="textFieldBgColor"
				:class="isSearching ? 'rounded-b-0' : ' rounded-lg'"
				:flat="!isFocused && !isSearching"
				class="search-field ml-2 mr-6"
				type="search"
				autocomplete="off"
				label="Rechercher"
				hide-details
				solo
				@focus="isFocused = true"
				@blur="onBlur"
				@keydown.esc="resetSearch"
			>
				<template #prepend-inner>
					<VIcon
						:color="iconColor"
						class="search-icon mx-2"
					>
						{{ searchIcon }}
					</VIcon>
				</template>
			</VTextField>
		</template>

		<VList v-show="results.length">
			<VListItem
				v-for="result of results"
				:key="result.slug"
				:to="result.path"
				nuxt
			>
				<VListItemContent>
					<VListItemTitle v-text="result.title" />
				</VListItemContent>
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { IContentDocument } from '@nuxt/content/types/content';

	import { Refs } from '@cnamts/vue-dot/src/types';

	import { mdiMagnify } from '@mdi/js';

	interface SearchInput {
		blur: () => void;
	}

	@Component<SearchField>({
		watch: {
			async search(search: string): Promise<void> {
				if (!search) {
					this.results = [];
					return;
				}

				this.results = await this.$content({ deep: true })
					.limit(6)
					.search(search)
					.fetch<IContentDocument[]>();
			}
		}
	})
	export default class SearchField extends Vue {
		$refs!: Refs<{
			search: SearchInput;
		}>;

		searchIcon = mdiMagnify;

		isFocused = false;
		search: string | null = null;
		results = [] as IContentDocument[];

		get textFieldBgColor(): string | undefined {
			return this.isFocused ? undefined : 'grey lighten-3';
		}

		get iconColor(): string | undefined {
			return !this.isFocused ? 'grey' : undefined;
		}

		get isSearching(): boolean {
			return this.search ? this.search.length > 0 : false;
		}

		onBlur(): void {
			this.isFocused = false;
			this.results = [];
		}

		resetSearch(): void {
			this.$refs.search.blur();
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.search-field {
		max-width: $vd-input-medium;
	}

	.search-icon,
	.search-icon ::v-deep svg {
		max-width: none;
	}
</style>
