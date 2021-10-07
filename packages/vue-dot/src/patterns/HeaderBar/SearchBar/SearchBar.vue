<template>
	<VTextField
		:color="themeColor"
		:value="search"
		:disabled="loading"
		:label="searchLabel"
		:class="textFieldClasses"
		height="20px"
		autofocus
		class="w-100 py-2 px-5"
		@input="searchValue = $event"
		@keyup.enter="emitSearchEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiMagnify } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/** Search field value */
			search: {
				type: String,
				default: undefined
			},
			/** Label of the search field */
			searchLabel: {
				type: String,
				default: ''
			},
			/** Disable interactive elements while loading */
			loading: {
				type: Boolean,
				default: false
			},
			themeColor: {
				type: String,
				default: '#0c419a'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		inheritAttrs: false
	})
	export default class SearchBar extends MixinsDeclaration {
		// Icons
		searchIcon = mdiMagnify;

		searchValue = '';

		get textFieldClasses(): string {
			const fieldClass = this.$vuetify.breakpoint.xs ? 'vd-form-input-s' : 'vd-form-input';

			return `${fieldClass} flex-grow-0`;
		}

		emitSearchEvent(): void {
			this.$emit('search', this.searchValue);
		}
	}
</script>
