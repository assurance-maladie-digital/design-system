<template>
	<div class="vd-choice-button-field">
		<VBtnToggle
			:value="choiceValue"
			v-bind="field.metadata"
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
			v-if="field && field.metadata && field.metadata.hint"
			class="mx-4 mb-0 v-messages"
			:class="this.$vuetify.theme.dark ? 'theme--dark' : 'theme--light'"
		>
			{{ field.metadata.hint }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	import { ChoiceField } from '../mixins/choiceField';
	import { FieldComponent } from '../mixins/fieldComponent';

	import { FieldItem } from '../types';

	const MixinsDeclaration = mixins(FieldComponent, ChoiceField);

	/** Form field to select a value from a list */
	@Component
	export default class ChoiceButtonField extends MixinsDeclaration {
		checkIcon = mdiCheck;

		/**
		 * Filter items with truthy value only
		 *
		 * @returns {FieldItem[]} The filtered items
		 */
		get filteredItems(): FieldItem[] {
			if (!Array.isArray(this.field.items)) {
				return [];
			}

			const filteredItems = this.field.items.filter((item) => Boolean(item.value));

			return filteredItems;
		}

		get isInline(): boolean {
			return this.field && this.field.metadata && this.field.metadata.inline;
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
