<template>
	<div class="vd-choice-button-field">
		<VBtnToggle
			:value="choiceValue"
			v-bind="metadata"
			class="vd-choice-button-field-toggle layout wrap accent--text"
			:class="{ 'column': !isInline }"
		>
			<VBtn
				v-for="(item, index) in filteredItems"
				:key="index"
				:value="item.value"
				:outlined="!isSelected(item.value)"
				elevation="0"
				height="40"
				active-class="white--text"
				class="mb-2 text-none"
				color="accent"
				@click="toggleItem(item)"
			>
				<span class="body-1">
					{{ item.text }}
				</span>

				<VSpacer />

				<VIcon
					:style="{ visibility: isSelected(item.value) ? 'visible' : 'hidden' }"
					class="ml-1 white--text"
				>
					{{ checkIcon }}
				</VIcon>
			</VBtn>
		</VBtnToggle>

		<p
			v-if="metadata && metadata.hint"
			class="mx-4 mb-0 v-messages"
			:class="this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ metadata.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	import { FieldItem } from '../types';

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceButtonField extends ChoiceComponent {
		checkIcon = mdiCheck;

		/**
		 * Filter items with truthy value only
		 *
		 * @returns {FieldItem[]} The filtered items
		 */
		get filteredItems(): FieldItem[] {
			if (!Array.isArray(this.items)) {
				return [];
			}

			const filteredItems = this.items.filter((item) => {
					return item.value !== null && item.value !== undefined;
				}
			);

			return filteredItems;
		}

		get isInline(): boolean {
			return this.metadata && this.metadata.inline;
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../tokens';

	.vd-choice-button-field .vd-choice-button-field-toggle {
		&.column .v-btn {
			border-radius: 4px !important;
			border-width: 1px !important;
		}

		&:not(.v-btn-toggle--group) .v-btn {
			border-color: $vd-accent !important;
		}
	}
</style>
